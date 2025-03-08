import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { FETCH_USERS_REQUEST, fetchUsersFailure, fetchUsersSuccess } from '../action/action';
import { DELETE_DATA_REQUEST } from '../action/actionDelete';
import { POST_DATA_REQUEST, postDataFailure, postDataSuccess } from '../action/actionPost';

const domain = 'https://66ce967d901aab24841ee608.mockapi.io/api/v1/project';
function fetchUsersApi() {
  return axios.get(domain);
}

function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* watchFetchUsersSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}

///Post
function postDataApi(data) {
  return axios.post(domain, data);
}

function* postDataSaga(action) {
  try {
    const response = yield call(postDataApi, action.payload);
    yield put(postDataSuccess(response.data));
  } catch (error) {
    yield put(postDataFailure(error.message));
  }
}

function* watchPostDataSaga() {
  yield takeEvery(POST_DATA_REQUEST, postDataSaga);
}

//Delete

function DeleteDataApi(id) {
  return axios.delete(`${domain}/${id}`);
}

function* DeleteDataSaga(action) {
  try {
    const response = yield call(DeleteDataApi, action.payload);
    yield put(postDataSuccess(response.data));
  } catch (error) {
    yield put(postDataFailure(error.message));
  }
}

function* watchDeleteDataSaga() {
  yield takeEvery(DELETE_DATA_REQUEST, DeleteDataSaga);
}

export default function* rootSaga() {
  yield all([fork(watchFetchUsersSaga), fork(watchPostDataSaga), fork(watchDeleteDataSaga)]);
}
