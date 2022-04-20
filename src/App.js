import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
//

function App() {
  const cart = useSelector((state) => state.addItem);
  const userLogged = useSelector((state) => state.login.isLogged);
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://shoping-app-926f6-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      console.log(data);
    };
    sendRequest();
  }, [cart]);

  return <div className="App">{userLogged ? <Layout /> : <Auth />}</div>;
}

export default App;
