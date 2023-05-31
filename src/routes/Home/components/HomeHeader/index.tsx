import React from 'react';
import './index.less';
import { BarsOutlined } from '@ant-design/icons'
import logo from '@/assets/images/logo.png';
import classnames from 'classnames';

interface Props {
  currentCategory: string;
  setCurrentCategory: (currentCategory: string) => void
}
function HomeHeader(props: Props) {
  let [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
    let target: HTMLUListElement = event.target as HTMLUListElement;
    const category = target.dataset.category;  //获取事件源对象对应的自定义属性的值 all reat vue
    props.setCurrentCategory(category);
    setIsMenuVisible(false);
  }
  return (
    <header className='home-header'>
      <div className='logo-header'>
        <img src={logo} />
        <BarsOutlined onClick={() => setIsMenuVisible(true)} />
      </div>
      {
        isMenuVisible && <ul
          className='category'
          onClick={setCurrentCategory}>
          <li data-category="all" className={
            classnames({ active: props.currentCategory === 'all' })
          }>全部</li>
          <li data-category="react" className={
            classnames({ active: props.currentCategory === 'react' })
          }>React</li>
          <li data-category="vue" className={
            classnames({ active: props.currentCategory === 'vue' })
          }>Vue</li>
        </ul>
      }
    </header>
  )
}

export default HomeHeader;