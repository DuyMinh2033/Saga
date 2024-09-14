import { call, put } from 'redux-saga/effects';

import { setHttpFailure, setHttpRequesting, setHttpSuccess } from './http';
import { apiCall } from './apiCall';


export default function* workerSaga(url, method, options, action) {
    try {
        const { type, payload } = action;
        yield put(setHttpRequesting(type));
        const response = yield call(apiCall, url, method, payload);
        if (response) {
            yield put(setHttpSuccess(type));
            yield put({ type: `${type}_SUCCESS`, payload: response });
        } else {
            yield put(setHttpFailure(type, 'No data received from API'));
            yield put({ type: `${type}_FAILED`, payload: null });
        }
    } catch (error) {
        yield put(setHttpFailure(action.type, error.message));
        yield put({ type: `${action.type}_FAILED`, payload: error.message });
    }
}
