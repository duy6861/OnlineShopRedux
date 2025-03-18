import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1
      }
      else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItem.push(tempProduct)
      }

      state.cartTotalQuantity += 1
    }
  }

})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer