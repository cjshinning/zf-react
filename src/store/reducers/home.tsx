import { AnyAction } from 'redux';
import * as types from '../action-types';
import Slider from '@/typings/slider';
import Lession from '@/typings/lession';
export interface Lessions {
  loading: boolean; //是否处于加载中
  list: Lession[];  //课程的数据
  hasMore: boolean; //是否有更多数据 是不是最后一页了
  offset: number; //取的时候偏移量
  limit: number;  //每页的条数
}

export interface HomeState {
  title: string,
  currentCategory: string;
  sliders: Slider[],
  lessions: Lessions
}

let initialState: HomeState = {
  title: '首页',
  currentCategory: 'all',
  sliders: [],
  lessions: {
    loading: false, //是否处于加载中
    list: [],  //课程的数据
    hasMore: true, //是否有更多数据 是不是最后一页了
    offset: 0, //取的时候偏移量
    limit: 5  //每页的条数
  }
}

function reducer(state: HomeState = initialState, action: AnyAction): HomeState {
  switch (action.type) {
    case types.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case types.GET_SLIDERS:
      return { ...state, sliders: action.payload.data }
    case types.SET_LESSION_LOADING:
      return { ...state, lessions: { ...state.lessions, loading: action.payload } };
    case types.SET_LESSIONS:
      return {
        ...state,
        lessions: {
          ...state.lessions, loading: false,
          hasMore: action.payload.hasMore,
          list: [...state.lessions.list, ...action.payload.list],
          offset: state.lessions.offset + action.payload.list.length
        }
      };
    default:
      return state;
  }
}

export default reducer;