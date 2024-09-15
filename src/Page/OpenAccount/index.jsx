/* eslint-disable no-unused-vars */
import useSagas from "../../hooks/useSaga";
import useReducer from "../../hooks/useReducer";
import { customerSaga } from "./reudux/getCusTomer/saga";
import { customerReducer } from "./reudux/getCusTomer/reducer";
import { customerSagaPost } from "./reudux/PostCustomer/saga";
import { customerReducerPost } from "./reudux/PostCustomer/reducer";
import TermAndCondition from "../../components/TermAndConditions";
import { getCustomerInfo } from "./reudux/getCusTomer/action";
import { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import { useSelector } from "react-redux";
import { customerInfo } from "./reudux/getCusTomer/selector";
const OpenAccount = () => {
  useSagas([{ key: "customer", saga: customerSaga }]);
  useReducer([{ key: "customer", reducer: customerReducer }]);
  useSagas([{ key: "customerPost", saga: customerSagaPost }]);
  useReducer([{ key: "customerPost", reducer: customerReducerPost }]);
  const dataUserInfo = useSelector(customerInfo);

  const [step, setStep] = useState("");
  const [openBS, setOpenBs] = useState(false);
  const handleSubmit = () => {
    getCustomerInfo();
    setStep("step2");
    setOpenBs(true);
  };

  return (
    <div style={{ width: "375px", margin: "0 auto" }}>
      <TermAndCondition onSubmit={handleSubmit} />
      {step === "step2" && (
        <CustomerInfo
          openBs={openBS}
          setIsOpenBs={setOpenBs}
          data={dataUserInfo}
        />
      )}
    </div>
  );
};

export default OpenAccount;
