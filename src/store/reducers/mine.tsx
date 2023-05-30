import { AnyAction } from 'redux';

export interface MineState {
  title: string
}

let initialState = { title: '购物车' }

function reducer(state: MineState = initialState, action: AnyAction): MineState {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;