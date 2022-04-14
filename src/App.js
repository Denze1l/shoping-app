import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const userLogged = useSelector((state) => state.isLogged);
  console.log(userLogged);
  console.log(userLogged);
  return <div className="App">{userLogged ? <Layout /> : <Auth />}</div>;
}

export default App;
