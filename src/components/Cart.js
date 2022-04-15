import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cardActions } from "../store/card-slice";
const Cart = () => {
  const quantity = useSelector((state) => state.addItem.numberOfItems);

  const dispatch = useDispatch();
  const showCard = () => {
    dispatch(cardActions.showCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCard}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
