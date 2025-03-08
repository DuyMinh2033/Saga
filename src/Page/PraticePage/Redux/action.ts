import { dispatch } from '../../../redux/store';

import { ActionType } from './type';

export const getUserInfo = (payload) =>
  dispatch({ type: ActionType.GET_INFO_USER_REQUEST, payload });
export const cleanUpCustomer = () => dispatch({ type: ActionType.CLEAN_UP });
