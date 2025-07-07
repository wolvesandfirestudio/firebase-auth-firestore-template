import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("login"); // or "signup"

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  if (user) {
    return (
      <>
        <Dashboard />
        <button onClick={() => signOut(auth)}>Log Out</button>
      </>
    );
  }

  return (
    <>
      <h1>{mode === "login" ? "Login" : "Sign Up"}</h1>
      {mode === "login" ? (
        <LoginForm onLogin={() => {}} />
      ) : (
        <SignupForm onSignup={() => {}} />
      )}
      <button onClick={() => setMode(mode === "login" ? "signup" : "login")}>
        Switch to {mode === "login" ? "Sign Up" : "Login"}
      </button>
    </>
  );
}

export default App;
