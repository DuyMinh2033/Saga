import { ActionType } from "./type";

const initState = {
  isLoading: false,
  userInfo: {},
};

export const infoUserReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.GET_INFO_USER_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.GET_INFO_USER_REQUEST_SUCCESS:
      return { ...state, userInfo: payload, isLoading: false };
    case ActionType.GET_INFO_USER_REQUEST_FAILED:
      return { ...state, userInfo: payload, isLoading: false };
    case ActionType.CLEAN_UP:
      return initState;
    default:
      return state;
  }
};
