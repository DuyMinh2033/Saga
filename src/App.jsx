import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpenAccount from "./Page/OpenAccount";
import SchemaForm from "./Page/ShemaForm";

const route = [
  {
    path: "/open-account",
    element: <OpenAccount />,
  },
  {
    path: "/form-schema",
    element: <SchemaForm />,
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
