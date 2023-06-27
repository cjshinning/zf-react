import React from 'react';
import './index.less';
import { MenuOutlined } from '@ant-design/icons';
import Lession from '@/typings/lession';
import { Lessions } from '@/store/reducers/home';
import { Link } from 'react-router-dom';
import { Alert, Card, Skeleton, Button } from 'antd';
interface Props {
  lessions: Lessions,
  getLessions: any
}

function HomeSliders(props: Props) {
  React.useEffect(() => {
    if (props.lessions.list.length === 0) {
      props.getLessions();
    }
  }, [])
  return (
    <section className='lession-list'>
      <h2><MenuOutlined />全部课程</h2>
      <Skeleton
        loading={props.lessions.list.length === 0 && props.lessions.loading}
        active
        paragraph={{ rows: 8 }}
      >
        {
          props.lessions.list.map((lession: Lession, index: number) => (
            <Link key={lession.id} to={{ pathname: `/detail/${lession.id}`, state: lession }}>
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
            <Button type='primary' block loading={props.lessions.loading} onClick={props.getLessions}>{props.lessions.loading ? '' : '加载更多'}</Button>
          ) : (<Alert style={{ textAlign: 'center' }} message='我是有底线的' type='warning' />)
        }
      </Skeleton>
    </section>
  )
}

export default HomeSliders;