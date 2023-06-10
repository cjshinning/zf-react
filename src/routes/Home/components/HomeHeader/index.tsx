import React from 'react';
import './index.less';
import { BarsOutlined } from '@ant-design/icons'
import logo from '@/assets/images/logo.png';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

interface Props {
  currentCategory: string;
  setCurrentCategory: (currentCategory: string) => void
}

const duration = 1000;  //动画持续的时间
const defaultStyle = {  //默认样式
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}
interface TransitionStyles {
  entering: React.CSSProperties,
  entered: React.CSSProperties,
  exiting: React.CSSProperties,
  exited: React.CSSProperties,
}
const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
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
      <CSSTransition
        in={isMenuVisible}
        timeout={duration}
      >
        {
          (state: keyof TransitionStyles) => (
            <ul
              className="category"
              onClick={setCurrentCategory}
              style={
                {
                  ...defaultStyle,
                  ...transitionStyles[state]
                }
              }
            >
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
          )
        }
      </CSSTransition>

    </header>
  )
}

export default HomeHeader;