/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TermAndCondition from '../../components/TermAndConditions';
import useReducer from '../../hooks/useReducer';
import useSagas from '../../hooks/useSaga';
import CustomerInfo from '../CustomerInfo';

import { getCustomerInfo } from './reudux/getCusTomer/action';
import { customerReducer } from './reudux/getCusTomer/reducer';
import { customerSaga } from './reudux/getCusTomer/saga';
import { customerInfo } from './reudux/getCusTomer/selector';
import { customerReducerPost } from './reudux/PostCustomer/reducer';
import { customerSagaPost } from './reudux/PostCustomer/saga';

const OpenAccount = () => {
  useSagas([{ key: 'customer', saga: customerSaga }]);
  useReducer([{ key: 'customer', reducer: customerReducer }]);
  useSagas([{ key: 'customerPost', saga: customerSagaPost }]);
  useReducer([{ key: 'customerPost', reducer: customerReducerPost }]);
  const dataUserInfo = useSelector(customerInfo);

  const [step, setStep] = useState('');
  const [openBS, setOpenBs] = useState(false);
  const handleSubmit = () => {
    setStep('step2');
    setOpenBs(true);
  };

  const [state, setState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (openBS && !dataUserInfo) {
      getCustomerInfo();
    }
  }, [openBS]);

  return (
    <div style={{ width: '375px', margin: '0 auto' }}>
      <TermAndCondition onSubmit={handleSubmit} />
      {step === 'step2' && (
        <CustomerInfo openBs={openBS} setIsOpenBs={setOpenBs} data={dataUserInfo} />
      )}
      <div className={`${state && 'concac'}`}>Hello</div>
      <button onClick={() => setState(!state)}>Navigate</button>
    </div>
  );
};

export default OpenAccount;
