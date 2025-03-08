import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';

import OpenAccount from './Page/OpenAccount';
import SchemaForm from './Page/ShemaForm';
import AddressForm from './Page/AdressCustomer';
import TestPage from './Page/TestPage';
import Axios from './Page/Axios';
import DynamicPage from './Page/Dynamic';
import ScrollPage from './Page/ScrollPage';
import ProductList from './Page/ProductList/ProductList';
import PraticePage from './Page/PraticePage';
import ScrollFetch from './Page/ScrollFetch';
import SelectDate from './common/components/ScrollSelectDate';
import Notification from './Page/Notification';
import ProductCenter from './Page/ProductCenter';
import TestAnchorTab from './Page/TestAnchorTab';
import InputIOS from './Page/InputIOS';
import KeyBoard from './Page/TestOpenKeyboard';
import RandomOptions from './Page/RandomOptions';
import Home from './Home';
import SortImage from './Page/SortImage';
import Demo from './Page/Demo';

// import LoginPage from "./Page/Login";

const route = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/open-account',
    element: <OpenAccount />,
  },
  {
    path: '/form-schema',
    element: <SchemaForm />,
  },
  {
    path: '/address',
    element: <AddressForm />,
  },
  {
    path: '/test-api',
    element: <TestPage />,
  },
  {
    path: '/axios',
    element: <Axios />,
  },
  {
    path: '/dynamic',
    element: <DynamicPage />,
  },
  {
    path: '/scroll-page',
    element: <ScrollPage />,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
  {
    path: '/pratice',
    element: <PraticePage />,
  },
  {
    path: '/scroll-fetch',
    element: <ScrollFetch />,
  },
  {
    path: '/select-date',
    element: <SelectDate />,
  },
  {
    path: '/notification',
    element: <Notification />, // scroll select date
  },
  {
    path: '/product-center',
    element: <ProductCenter />, //scroll to bottom then fetch data
  },
  {
    path: '/anchor-tab',
    element: <TestAnchorTab />, //anchor tab
  },
  {
    path: '/demo',
    element: <Demo />,
  },
  // {
  //   path: "/pdf",
  //   element: <Pdfss />,
  // },
  {
    path: '/ios',
    element: <InputIOS />,
  },
  {
    path: '/KeyBoard',
    element: <KeyBoard />,
  },
  {
    path: '/random',
    element: <RandomOptions />,
  },
  {
    path: '/sort-image',
    element: <SortImage />,
  },

  // {
  //   path: "/zoom",
  //   element: <PinchZoomPDF />,
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
];

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener(
      'redirect',
      (e: any) => {
        try {
          if (typeof e.detail === 'object') {
            const data = e.detail;
            const path = String(data.src);
            navigate(path);
          }
        } catch (error) {
          console.log(error);
        }
      },
      false,
    );
  }, []);

  return (
    <div>
      <Routes>
        {route.map((r, i) => (
          <Route path={r.path} element={r.element} key={i} />
        ))}
      </Routes>
      {/* <BottomSheet open={open} title={"Alert"} onClose={() => setOpen(false)}>
        <p>Required Login</p>
        <button onClick={handleConfirm}>Confirm</button>
      </BottomSheet> */}
    </div>
  );
}

export default App;
