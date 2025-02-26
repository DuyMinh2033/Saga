/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import store from '../redux/store';

const useSagas = sagas => {
  useEffect(() => {
    store.sagaManager.injectSagas(sagas);
    return () => {
      const keys = sagas.map(item => item.key);
      store.sagaManager.ejectSagas(keys);
    };
  }, []);
};

export default useSagas;
