import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  let total = 0;
  let showcard = useSelector((state) => state.addItem.showItem);
  let totalItems = useSelector((state) => state.addItem.allItems);
  let arrQantity = totalItems.map((item) => item.totalPrice);
  if (arrQantity.length >= 1) {
    total = arrQantity.reduce((prev, curr) => prev + curr);
  }

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showcard && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total} </h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
