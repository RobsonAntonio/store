import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState ={
  cartItems: [],
  cartTotalQuantity:0,
  cartTotalAmount:0,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addToCart(state, action){
      const itemIndex = state.cartItems.findIndex((item) =>item.id === action.payload.id);

      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Somando ${state.cartItems[itemIndex].name} a quantidade no carrinho`)
      }else{
        const tempProduct = {...action.payload, cartQuantaty:1}
        state.cartItems.push(tempProduct)
        toast.success(` ${action.payload.name} adicionando ao carrinho`)


      }
    }
  }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;