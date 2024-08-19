import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="App">
      {/* {isLoading && <h1>Loading ...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user) => (
        <>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      ))} */}
      <PostContainer />
    </div>
  );
}

export default App;
