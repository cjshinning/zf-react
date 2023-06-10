import React, { PropsWithChildren } from 'react';
import './index.less';
import { LeftOutlined } from '@ant-design/icons';
import { History } from 'history';

type Props = PropsWithChildren<{
  history: History
}>;
function NavBar(props: Props) {
  return (
    <div className='nav-header'>

      <LeftOutlined onClick={() => { props.history.goBack() }} />
      {props.children}
    </div>
  )
}

export default NavBar;