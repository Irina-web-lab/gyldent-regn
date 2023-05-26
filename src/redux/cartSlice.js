import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice ({
    name: 'cart',                                     
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemtoCart: (state, action) => {
            const timeId = new Date().getTime()  
            state.cartItems.push({
                id: timeId,
                itemId: action.payload.item.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.item.price,
                totalQuantity : action.payload.quantity
            })
        },

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }

        }
})

export const getTotalQuantity = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalQuantity + total
    }, 0)
}

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
        }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemtoCart, removeItemFromCart, totalQuantity } = slice.actions;
export default slice.reducer;
