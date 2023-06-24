import * as types from '@/store/action-types';
import { AnyAction } from 'redux';
import { getLessions, getSliders } from '@/api/home';
const actions = {
  setCurrentCategory(currentCategory: string): AnyAction {
    return { type: types.SET_CURRENT_CATEGORY, payload: currentCategory };
  },
  getSliders() {
    return {
      type: types.GET_SLIDERS,
      payload: getSliders()
    }
  },
  getLessions() { //获取课程数据
    return function (dispatch: Function, getState: Function) {
      (async function () {
        let { currentCategory, lessions: { hasMore, offset, limit, loading } } = getState().home;
        // 如果的确有更多的数据，并且不是处于加载中的话，就可以加载数据了
        if (hasMore && !loading) {
          dispatch({ type: types.SET_LESSION_LOADING, payload: true }); //加载状态改为true
          let result = await getLessions(currentCategory, offset, limit);
          dispatch({ type: types.SET_LESSIONS, payload: result.data }); //设置新的课程数据
        }
      })()
    }
  }
}

export default actions;