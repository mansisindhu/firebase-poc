import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  fetchWishlist,
  getUser,
  addToWishlist,
} from "./redux/action";

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
          id: user.uid,
        })
      );
    });

    dispatch(fetchData());
    dispatch(fetchWishlist());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToWishlist = () => (docId) => {
    dispatch(addToWishlist(user?.id, docId));
  };

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
        <div key={el.id}>
          {el.name}{" "}
          <button onClick={handleAddToWishlist(el.docId)}>Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default App;
