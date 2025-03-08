import { dispatch } from '../../../../redux/store';

import { Actiontype } from './type';

export const PostCustomerInfoRequest = (payload) =>
  dispatch({ type: Actiontype.POST_CUSTOMER_REQUEST, payload });
export const cleanUpCustomer = () => dispatch({ type: Actiontype.CLEAN_UP });
