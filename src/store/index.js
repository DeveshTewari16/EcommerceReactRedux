
import { createSlice, configureStore } from '@reduxjs/toolkit';


const cartInitialState = {
    item: [],
    totalAmount: 0,
    isToggle: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers:
    {   
        toggle:(state)=>{
            state.isToggle=!state.isToggle
        },
         addToCart: (state, action) => {
            state.item.concat(action.payload.item);
            state.totalAmount = state.totalAmount + action.payload.quantity//check here error
        },
        removefromCart: (state, item) => {

            if (state.totalAmount === 1) {
                state.item.filter(item => state.id !== item.id)
            }
        },
        increaseCartByOne: (state) => {
            state.totalAmount++;
        },
        decreaseCartByOne: (state) => {
            state.totalAmount--;
            if (state.totalAmount === 1) {
                state.totalAmount--;
                state.item.filter(item => state.id !== item.id)
            }
        }
    }
});

const store = configureStore({
    reducer: { cartReducer: cartSlice.reducer }
})

export const cartActions = cartSlice.actions;

export default store;