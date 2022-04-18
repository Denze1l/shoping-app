import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "addItem",
  initialState: {
    allItems: [],
    numberOfItems: 0,
    showItem: false,
  },
  reducers: {
    addToList(state, action) {
      const newItem = action.payload;
      const isNew = state.allItems.find((item) => item.id === newItem.id);

      if (isNew) {
        isNew.quantity++;
        isNew.totalPrice += newItem.price;
        state.numberOfItems++;
      } else {
        state.allItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.numberOfItems++;
      }
    },
    removeElement(state, action) {
      let id = action.payload;
      console.log(action.payload);
      const checkList = state.allItems.find((item) => item.id === id);
      if (checkList.quantity === 1) {
        state.allItems = state.allItems.filter((item) => item.id !== id);
      } else {
        checkList.quantity--;
        checkList.totalPrice -= checkList.price;
      }
      state.numberOfItems--;
    },
    showCart(state) {
      state.showItem = !state.showItem;
    },
  },
});

export const cardActions = cardSlice.actions;
export default cardSlice;
