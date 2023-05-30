import { AnyAction } from 'redux';

export interface HomeState {
  title: string
}

let initialState = { title: '首页' }

function reducer(state: HomeState = initialState, action: AnyAction): HomeState {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;