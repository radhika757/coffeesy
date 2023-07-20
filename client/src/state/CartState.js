import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: { id: 0, name: "", price: 0, quantity: 0, total: 0, img: "" },
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: [] }, // value is the array of items
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload.id;
      //   const { name } = action.payload.name;
      //   const { price } = action.payload.price;
      //    const { img } = action.payload.img;
      const existingItem = state.value.find((item) => item.id === id);
      //   console.log(existingItem);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.unshift({ ...action.payload, quantity: 1 }); // adding a new item
      }
      //   console.log(state.value.name);
      // console.log(action.payload);
      //   state.value.unshift(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
