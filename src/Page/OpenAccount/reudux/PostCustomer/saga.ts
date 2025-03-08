import { all, takeLatest } from 'redux-saga/effects';

import workerSaga from '../../../../Shared/SagaWoker';

import { Actiontype, customerUrl } from './type';

const Method = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
};

const EMPTY_OBJ = {};

export function* getCustomer() {
  yield takeLatest(
    Actiontype.POST_CUSTOMER_REQUEST,
    workerSaga,
    customerUrl.POST_CUSTOMER_INFO,
    Method.GET,
    {
      dataPath: '',
      defaultResponse: EMPTY_OBJ,
    },
  );
}

export function* customerSagaPost() {
  yield all([getCustomer()]);
}
