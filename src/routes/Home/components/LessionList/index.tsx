import React from 'react';
import './index.less';
import { MenuOutlined } from '@ant-design/icons';
import Lession from '@/typings/lession';
import { Lessions } from '@/store/reducers/home';
import { Link } from 'react-router-dom';
import { Alert, Card, Skeleton, Button } from 'antd';
interface Props {
  lessions: Lessions,
  getLessions: any,
  homeContainerRef: any
}
interface VisibleLession extends Lession {
  index: number
}
function LessionList(props: Props, forwardRef: any) {
  // 强制更新的方法 类组件里forceUpdate，函数组件里只能模拟一个 +1的目的是为了让值改变
  const [, forceUpdate] = React.useReducer(x => x + 2, 0);
  forwardRef.current = forceUpdate;
  React.useEffect(() => {
    if (props.lessions.list.length === 0) {
      props.getLessions();
    }
  }, []);
  let start = 0, end = 0; //主要是要计算起始索引和结束索引
  let homeContainerRef = props.homeContainerRef.current;
  let remUnit: number = parseFloat(document.documentElement.style.fontSize);  //真实的rem值
  let itemSize = (650 / 75) * remUnit; //每个条目的高度 rem的值
  let screenHeight = window.innerHeight - (222 / 75) * remUnit; //屏幕的高度 header+footer总高度
  if (homeContainerRef) {
    const scrollTop = homeContainerRef.scrollTop; //获取容器向上卷去的高度
    start = Math.floor(scrollTop / itemSize); //要显示的条目的其实索引
    end = start + Math.floor(screenHeight / itemSize);  //10
    start -= 2, end += 2; //缓存的条目
    start = start < 0 ? 0 : start;  //如果小于0就取0
    end = end > props.lessions.list.length ? props.lessions.list.length : end;  //如果已经大于最后一条了，就取最后一条
  }
  // 注意：第一次是0，拿不到高度
  console.log(props.lessions.list.length * itemSize);
  // 第一次的第1条到第12条
  let visibleList = props.lessions.list.map((item: Lession, index: number) => ({ ...item, index })).slice(start, end);
  let cardStyle: React.CSSProperties = { position: 'absolute', top: 0, left: 0, width: '100%', height: itemSize }
  let bottomTop = props.lessions.list.length * itemSize;
  return (
    <section className='lession-list'>
      <h2><MenuOutlined />全部课程</h2>
      <Skeleton
        loading={props.lessions.list.length === 0 && props.lessions.loading}
        active
        paragraph={{ rows: 8 }}
      >
        <div style={{ position: 'relative', width: '100%', height: `${props.lessions.list.length * itemSize}` }}>
          {
            visibleList.map((lession: VisibleLession, index: number) => (
              <Link
                key={lession.id}
                to={{ pathname: `/detail/${lession.id}`, state: lession }}
                style={{ ...cardStyle, top: `${itemSize * lession.index}px` }}
              >
                <Card hoverable={true} style={{ width: '100%' }}
                  cover={<img src={lession.poster} />}
                >
                  <Card.Meta title={lession.title} description={`价格：￥${lession.price}元`}></Card.Meta>
                </Card>
              </Link>
            ))
          }
          {
            props.lessions.hasMore ? (
              <Button style={{ textAlign: 'center', top: `${bottomTop}px` }} type='primary' block loading={props.lessions.loading} onClick={props.getLessions}>{props.lessions.loading ? '' : '加载更多'}</Button>
            ) : (<Alert style={{ textAlign: 'center', top: `${bottomTop}px` }} message='我是有底线的' type='warning' />)
          }
        </div>
      </Skeleton>
    </section>
  )
}

export default React.forwardRef(LessionList);