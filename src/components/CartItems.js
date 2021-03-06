import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const selector = useSelector((state) => state.addItem.allItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {selector.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              total={item.totalPrice}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
