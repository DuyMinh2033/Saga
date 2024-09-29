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
