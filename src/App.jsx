import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import OpenAccount from "./Page/OpenAccount";
import SchemaForm from "./Page/ShemaForm";
import AddressForm from "./Page/AdressCustomer";
import TestPage from "./Page/TestPage";
import Axios from "./Page/Axios";
import DynamicPage from "./Page/Dynamic";
import ScrollPage from "./Page/ScrollPage";
import ProductList from "./Page/ProductList/ProductList";
import PraticePage from "./Page/PraticePage";
import ScrollFetch from "./Page/ScrollFetch";
import SelectDate from "./common/components/ScrollSelectDate";
import Notification from "./Page/Notification";
import ProductCenter from "./Page/ProductCenter";
import TestAnchorTab from "./Page/TestAnchorTab";
import Demo from "./Page/Demo";

import InputIOS from "./Page/InputIOS";
import KeyBoard from "./Page/TestOpenKeyboard";
import TestDirty from "./Page/TestIsDrityReact";

import LoginPage from "./Page/Login";
import useSagas from "./hooks/useSaga";
import useReducers from "./hooks/useReducer";
import { customerSaga } from "./RequestInfoUser/saga";
import { customerReducer } from "./RequestInfoUser/reducer";
import { useEffect, useRef, useState } from "react";
import { getCustomerInfo } from "./RequestInfoUser/action";
import { useSelector } from "react-redux";
import { customerInfo } from "./RequestInfoUser/selector";
import { apiCall } from "./Shared/apiCall";
import BottomSheet from "./components/BottomSheet";
import PinchZoomPDF from "./Page/ZoomMobile";

const route = [
  {
    path: "/open-account",
    element: <OpenAccount />,
  },
  {
    path: "/form-schema",
    element: <SchemaForm />,
  },
  {
    path: "/address",
    element: <AddressForm />,
  },
  {
    path: "/test-api",
    element: <TestPage />,
  },
  {
    path: "/axios",
    element: <Axios />,
  },
  {
    path: "/dynamic",
    element: <DynamicPage />,
  },
  {
    path: "/scroll-page",
    element: <ScrollPage />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/pratice",
    element: <PraticePage />,
  },
  {
    path: "/scroll-fetch",
    element: <ScrollFetch />,
  },
  {
    path: "/select-date",
    element: <SelectDate />,
  },
  {
    path: "/notification",
    element: <Notification />, // scroll select date
  },
  {
    path: "/product-center",
    element: <ProductCenter />, //scroll to bottom then fetch data
  },
  {
    path: "/anchor-tab",
    element: <TestAnchorTab />, //anchor tab
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  // {
  //   path: "/pdf",
  //   element: <Pdfss />,
  // },
  {
    path: "/ios",
    element: <InputIOS />,
  },
  {
    path: "/KeyBoard",
    element: <KeyBoard />,
  },
  // {
  //   path: "/testDirty",
  //   element: <TestDirty />,
  // },
  {
    path: "/zoom",
    element: <PinchZoomPDF />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
const url = "http://localhost:8800/api/user/get-user";
const pathUrl = "http://localhost:5173/login";
function App() {
  useSagas([{ key: "customer", saga: customerSaga }]);
  useReducers([{ key: "customer", reducer: customerReducer }]);
  const infoUser = useSelector(customerInfo);
  const { id: idUserInfo } = infoUser || {};
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const currentUrl = window.location.href;
  const getUserInfo = async () => {
    await getCustomerInfo();
  };
  const refTimeOut = useRef(null);
  useEffect(() => {
    if (!(pathUrl === currentUrl)) {
      refTimeOut.current = setTimeout(() => {
        if (!idUserInfo) {
          setOpen(true);
        }
      }, 1000);
    }
    return () => clearTimeout(refTimeOut?.current);
  }, [infoUser]);

  useEffect(() => {
    !(pathUrl === currentUrl) && getUserInfo();
  }, []);

  const handleConfirm = () => {
    if (!(pathUrl === currentUrl)) {
      navigate("/login");
    }
    setOpen(false);
  };

  return (
    <div>
      <Routes>
        {route.map((r, i) => (
          <Route path={r.path} element={r.element} key={i} />
        ))}
      </Routes>
      <BottomSheet open={open} title={"Alert"} onClose={() => setOpen(false)}>
        <p>Required Login</p>
        <button onClick={handleConfirm}>Confirm</button>
      </BottomSheet>
    </div>
  );
}

export default App;
