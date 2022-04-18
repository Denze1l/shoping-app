import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { loginActions } from "../store/login-slice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loginActions.logoutFunc());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logout} className="lgout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
