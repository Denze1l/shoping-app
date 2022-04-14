import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const itemsList = useSelector((state) => state.addItem.allItems);
  console.log(itemsList);
  const userLogged = useSelector((state) => state.login.isLogged);
  return <div className="App">{userLogged ? <Layout /> : <Auth />}</div>;
}

export default App;
