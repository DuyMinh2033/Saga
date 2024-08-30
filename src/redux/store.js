import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import userReducer from "./reducer/reducer";
import rootSaga from "./Saga/saga";

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();


// Kết hợp các reducer
const rootReducer = combineReducers({
    user: userReducer,
});


// Tạo store và kết nối saga middleware
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
);

// Chạy root saga
sagaMiddleware.run(rootSaga);

export default store;
