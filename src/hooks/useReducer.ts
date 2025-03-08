import { useEffect } from 'react';

import store from '../redux/store';

const useReducers = (reducers) => {
  useEffect(() => {
    store.reducerManager.injectReducers(reducers);
    return () => {
      const keys = reducers.map((item) => item.key);
      store.reducerManager.ejectReducers(keys);
    };
  }, []);
};

export default useReducers;
