import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga/saga";

const createSagaInjector = (runSaga, rootSaga) => {
  let runningSagas = {};
  const isInjected = (key) => !!runningSagas[key];

  const injectSagas = (sagas) => {
    sagas.forEach(({ key, saga }) => {
      if (!isInjected(key)) {
        const task = runSaga(saga);
        runningSagas[key] = task;
      }
    });
  };

  const ejectSagas = (keys) => {
    keys.forEach((key) => {
      const task = runningSagas[key];
      if (task && task.isRunning()) {
        task.cancel();
        delete runningSagas[key];
      }
    });
  };

  if (rootSaga) {
    injectSagas([{ key: "rootSaga", saga: rootSaga }]);
  }

  return { injectSagas, ejectSagas };
};

let dynamicReducers = {};
const staticReducers = {};

const rootReducer = () =>
  combineReducers({
    ...staticReducers,
    ...dynamicReducers,
  });

// Inject reducers mới
const injectReducers = (store, reducers) => {
  reducers.forEach(({ key, reducer }) => {
    if (!dynamicReducers[key]) {
      dynamicReducers[key] = reducer;
      store.replaceReducer(rootReducer());
    }
  });
};

// Eject reducers
const ejectReducers = (store, keys) => {
  keys.forEach((key) => {
    if (dynamicReducers[key]) {
      delete dynamicReducers[key];
      store.replaceReducer(rootReducer());
    }
  });
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

store.sagaManager = createSagaInjector(sagaMiddleware.run, null);

store.reducerManager = {
  injectReducers: (reducers) => injectReducers(store, reducers),
  ejectReducers: (keys) => ejectReducers(store, keys),
};
sagaMiddleware.run(rootSaga);

export default store;
export const dispatch = store.dispatch;
export const getState = store.getState;
