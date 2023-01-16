import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/action";

import { auth, signIn, signOut } from "./service/firebase";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        getUser({
          displayName: user.displayName,
          email: user.email,
        })
      );
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        <button className="button" onClick={signIn}>
          Sign in with google
        </button>
      )}
    </div>
  );
}

export default App;
