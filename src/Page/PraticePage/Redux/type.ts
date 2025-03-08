export const usersInfo = {
  GET_INFO_USER_INFO: 'http://localhost:8800/api/user/get-users',
};

export const UserInfoFeatureName = 'usersInfo';

export const ActionType = {
  GET_INFO_USER_REQUEST: `${UserInfoFeatureName}/GET_INFO_USER_REQUEST`,
  GET_INFO_USER_REQUEST_SUCCESS: `${UserInfoFeatureName}/GET_INFO_USER_REQUEST_SUCCESS`,
  GET_INFO_USER_REQUEST_FAILED: `${UserInfoFeatureName}/GET_INFO_USER_REQUEST_FAILED`,
  CLEAN_UP: `${UserInfoFeatureName}/CLEAN_UP`,
};
