import * as types from '@/store/action-types';
import { AnyAction } from 'redux';
import { validate } from '@/api/profile';
const actions = {
  validate(): AnyAction {
    return {
      type: types.VALIDATE,
      payload: validate()
    };
  }
}

export default actions;