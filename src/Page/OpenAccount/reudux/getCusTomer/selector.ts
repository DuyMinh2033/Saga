import { CustomerFeatureName } from './type';

export const customerInfo = (state) => {
  return state[CustomerFeatureName]?.customer?.data;
};

export const customerLoadState = (state) => {
  return state[CustomerFeatureName]?.isLoading;
};

export const getCustomerFailedMsg = (state) => {
  return state[CustomerFeatureName]?.customer?.elHeader?.resMsg;
};
