import { useContext } from "react";
import UserContent from "../contexts/UserContent";

/* eslint-disable react/prop-types */
function Login() {
  const { login } = useContext(UserContent);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;