import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState ={
  cartItems:  [],
  cartTotalQuantity:0,
  cartTotalAmount:0,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addToCart(state, action){
      const itemIndex = state.cartItems.findIndex((item: { id: any; }) =>item.id === action.payload.id);

      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Somando ${state.cartItems[itemIndex].name} a quantidade no carrinho`)
      }else{
        const tempProduct = {...action.payload, cartQuantity:1}
        state.cartItems.push(tempProduct)
        toast.success(` ${action.payload.name} adicionando ao carrinho`)
      }
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action){
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
    
    state.cartItems = nextCartItems;
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    toast.error(` ${action.payload.name} removido do carrinho`)
    }

    ,  decreaseCart(state, action){
    const itemIndex = state.cartItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    )
    if(state.cartItems[itemIndex].cartQuantity > 1){
      state.cartItems[itemIndex].cartQuantity -= 1;
      toast.info(`Tirando ${action.payload.name} da quantidade do carrinho`)
    }else if(state.cartItems[itemIndex].cartQuantity === 1){
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
    
      state.cartItems = nextCartItems;
      toast.error(` ${action.payload.name} removido do carrinho`)
    }
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    getTotals(state, action){
      let {total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem)=>{
          const {price,cartQuantity} = cartItem;
          const itemTotal = price *cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total:0,
          quantity:0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;


    }
  }

})

export const {addToCart, removeFromCart, decreaseCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;