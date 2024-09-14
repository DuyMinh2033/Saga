import useSagas from "../../hooks/useSaga";
import useReducer from "../../hooks/useReducer";
import { customerSaga } from "./reudux/getCusTomer/saga";
import { customerReducer } from "./reudux/getCusTomer/reducer";
import { customerSagaPost } from "./reudux/PostCustomer/saga";
import { customerReducerPost } from "./reudux/PostCustomer/reducer";
import TermAndCondition from "../../components/TermAndConditions";
import { getCustomerInfo } from "./reudux/getCusTomer/action";
const OpenAccount = () => {
  useSagas([{ key: "customer", saga: customerSaga }]);
  useReducer([{ key: "customer", reducer: customerReducer }]);
  useSagas([{ key: "customerPost", saga: customerSagaPost }]);
  useReducer([{ key: "customerPost", reducer: customerReducerPost }]);

  const handleSubmit = () => {
    getCustomerInfo();
  };

  return (
    <div>
      <TermAndCondition onSubmit={handleSubmit} />
    </div>
  );
};

export default OpenAccount;
