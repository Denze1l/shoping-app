import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  let totalItems = useSelector((state) => state.addItem.allItems);
  let arrQantity = totalItems.map((item) => item.totalPrice);
  console.log(arrQantity.length);
  if (arrQantity.length >= 1) {
    total = arrQantity.reduce((prev, curr) => prev + curr);
  }

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total} </h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
