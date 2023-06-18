import { AnyAction } from 'redux';
import * as types from '../action-types';
import Slider from '@/typing/slider';

export interface HomeState {
  title: string,
  currentCategory: string;
  sliders: Slider[]
}

let initialState = {
  title: '首页',
  currentCategory: 'all',
  sliders: []
}

function reducer(state: HomeState = initialState, action: AnyAction): HomeState {
  switch (action.type) {
    case types.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case types.GET_SLIDERS:
      return { ...state, sliders: action.payload.data }
    default:
      return state;
  }
}

export default reducer;