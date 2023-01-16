import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getUser } from "./redux/action";

import { auth, signIn, signOut } from "./service/firebase";

function App() {
  const { user, data } = useSelector((state) => state);
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

    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      {data.map((el) => (
        <div>
          {el.name} <button>Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default App;
