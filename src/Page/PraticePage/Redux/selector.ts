import { UserInfoFeatureName } from './type';

export const usersInfoSelector = (state) => {
  return state[UserInfoFeatureName]?.userInfo?.data?.data;
};

export const customerLoadState = (state) => {
  return state[UserInfoFeatureName]?.isLoading;
};

export const getCustomerFailedMsg = (state) => {
  return state[UserInfoFeatureName]?.customer?.elHeader?.resMsg;
};
