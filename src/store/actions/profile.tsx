import * as types from '@/store/action-types';
import { AnyAction } from 'redux';
import { login, register, validate } from '@/api/profile';
import { LoginPayload, LoginResult, RegisertPayload, RegisterResult } from '@/typing/user';
import { push } from 'connected-react-router';
import { message } from 'antd';
const actions = {
  validate(): AnyAction {
    return {
      type: types.VALIDATE,
      payload: validate()
    };
  },
  register(values: RegisertPayload) {
    return function (dispatch: Function) {  //redux-thunk
      (async function () {
        let result: RegisterResult = await register<RegisterResult>(values);
        if (result.success) { //如果注册成功了，跳到登录页去
          dispatch(push('/login'))
        } else {
          message.error(result.message);
        }
      })()
    }
  },
  login(values: LoginPayload) {
    return function (dispatch: Function) {  //redux-thunk
      (async function () {
        let result: LoginResult = await login<LoginResult>(values);
        if (result.success) { //如果注册成功了，跳到登录页去
          sessionStorage.setItem('token', result.data.token);
          dispatch(push('/profile'))
        } else {
          message.error(result.message);
        }
      })()
    }
  },
  logout() {
    return function (dispatch: Function) {
      sessionStorage.removeItem('token'); //清除本地的token
      dispatch({ type: types.LOGOUT }); //派发一个退出的仓库
      dispatch(push('/login'));
    }
  }
}

export default actions;