import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "./redux/action/action";
import FormPost from "./components/FormPost";
import FormDelete from "./components/FormDelete";

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>User List</h3>
      {loading && <p>Loading...</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <FormPost />
      <FormDelete />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App