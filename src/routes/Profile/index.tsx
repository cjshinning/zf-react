import React, { PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState, ProfileState } from '@/store/reducers';
import './index.less';
import NavBar from '@/components/NavBar';
import actions from '@/store/actions/profile';
import { message, Descriptions, Button, Alert } from 'antd';
import { AxiosError } from 'axios';
import LOGIN_TYPES from '@/typing/login-types';
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Prop = PropsWithChildren<RouteComponentProps> & StateProps & DispatchProps;

function Profile(props: Prop) {
  useEffect(() => {
    props.validate().catch((error: AxiosError) => message.error(error.message));
  }, []);
  let content = null;

  if (props.loginState === LOGIN_TYPES.UN_VALIDATE) {
    // 什么都不做，还是null
  } else if (props.loginState === LOGIN_TYPES.LOGINED) {
    content = (
      <div className='user-info'>
        <Descriptions>
          <Descriptions.Item label="用户名">Jenny</Descriptions.Item>
          <Descriptions.Item label="手机号">1340000000</Descriptions.Item>
          <Descriptions.Item label="邮箱">1340000000@163.com</Descriptions.Item>
        </Descriptions>
        <Button type='primary'>退出登录</Button>
      </div>
    )
  } else if (props.loginState === LOGIN_TYPES.UNLOGIN) {
    content = <>
      <Alert
        type="warning"
        message="当前用户你好，请选择注册或者登录"
        description="亲爱的用户你好，请选择登录或者注册"
      >
      </Alert>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Button type='dashed' onClick={() => props.history.push('/login')}>登录</Button>
        <Button onClick={() => props.history.push('/register')}>注册</Button>
      </div>
    </>
  }

  return (
    <section>
      <NavBar history={props.history}>个人中心</NavBar>
      {content}
    </section>
  )
}

function mapStateToProps(state: RootState): ProfileState {
  return state.profile;
}

export default connect(
  mapStateToProps, actions
)(Profile);