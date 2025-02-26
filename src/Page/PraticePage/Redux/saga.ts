import { all, takeLatest } from "redux-saga/effects";

import { ActionType, usersInfo } from "./type";
import workerSaga from "../../../Shared/SagaWoker";

const Method = {
  POST: "post",
  GET: "get",
  PUT: "put",
};

const EMPTY_OBJ = {};

export function* getUser() {
  yield takeLatest(
    ActionType.GET_INFO_USER_REQUEST,
    workerSaga,
    usersInfo.GET_INFO_USER_INFO,
    Method.GET,
    {
      dataPath: "",
      defaultResponse: EMPTY_OBJ,
    }
  );
}

export function* getUserInfoSaga() {
  yield all([getUser()]);
}
