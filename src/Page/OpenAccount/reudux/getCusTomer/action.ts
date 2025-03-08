import { dispatch } from '../../../../redux/store';

import { Actiontype } from './type';

export const getCustomerInfo = (payload) =>
  dispatch({ type: Actiontype.GET_CUSTOMER_REQUEST, payload });
export const cleanUpCustomer = () => dispatch({ type: Actiontype.CLEAN_UP });
