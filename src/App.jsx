import { useEffect, useState } from "react";
import "./App.css";
import { auth, logOut, signIn } from "./service/firebase";

function App() {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const { displayName = "", email = "" } = user;
      setUser({
        displayName,
        email,
      });
    });
  }, []);

  return (
    <div>
      {user.email ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={logOut}>Logout</button>
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
