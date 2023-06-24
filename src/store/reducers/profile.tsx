import { AnyAction } from 'redux';
import LOGIN_TYPES from '@/typings/login-types';
import * as types from '@/store/action-types';
import { User } from '@/typings/user';

export interface ProfileState {
  title: string;
  loginState: LOGIN_TYPES;  //获取当前用户的登录状态  未验证/未登录/登录
  user: User;  //如果成功了，会把已经登录的用户信息放在这里
  error: string | null //会把失败的原因放在这里
}

let initialState = {
  title: '个人中心',
  loginState: LOGIN_TYPES.UN_VALIDATE,
  user: null,
  error: null
}

function reducer(state: ProfileState = initialState, action: AnyAction): ProfileState {
  switch (action.type) {
    case types.VALIDATE:
      if (action.payload.success) {
        return { ...state, loginState: LOGIN_TYPES.LOGINED, user: action.payload.data, error: null }
      } else {
        return { ...state, loginState: LOGIN_TYPES.UNLOGIN, user: null, error: action.payload }
      }
    case types.LOGOUT:
      return { ...state, loginState: LOGIN_TYPES.UNLOGIN, user: null, error: null }
    case types.CHAN_AVATAR:
      return { ...state, user: { ...state.user, avatar: action.payload } }
    default:
      return state;
  }
}

export default reducer;