import { AnyAction } from 'redux';

export interface ProfileState {
  title: string
}

let initialState = { title: '个人中心' }

function reducer(state: ProfileState = initialState, action: AnyAction): ProfileState {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;