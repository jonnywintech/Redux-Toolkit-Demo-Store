import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';



const initialState = {
    cartItems: cartItems,
    amount: 3,
    total: 0,
    isLoading: true,
};
// immer js dozvoljava direktno modifikovanje stejta bez pravlejnje novog u reduceru
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        clearCart: (state)=> {
            state.cartItems = [];
        },
    }
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;