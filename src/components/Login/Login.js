import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./login.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className={css.btn} onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
