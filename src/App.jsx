import { useSelector } from "react-redux";

import { signIn, signOut } from "./service/firebase";

function App() {
  const user = useSelector((state) => state.user);

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
