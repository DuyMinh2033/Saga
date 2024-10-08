import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import Pdfss from "./Pdf";

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
  {
    path: "/pdf",
    element: <Pdfss />,
  },
];

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {route.map((r, i) => (
            <Route path={r.path} element={r.element} key={i} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
