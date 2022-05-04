import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let firstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.addItem);
  const userLogged = useSelector((state) => state.login.isLogged);
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://shoping-app-926f6-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent successfully",
          type: "success",
        })
      );
    };
    sendRequest().catch((err) => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {userLogged ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
