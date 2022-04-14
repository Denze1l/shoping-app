import React from "react";
import "./Auth.css";
import { loginActions } from "../store/login-slice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const loginBut = (e) => {
    e.preventDefault();
    dispatch(loginActions.loginFunc());
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={loginBut}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
