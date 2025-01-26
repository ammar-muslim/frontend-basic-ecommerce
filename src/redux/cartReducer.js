import { createSlice } from '@reduxjs/toolkit'

const initialState  = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state , action) => {
      const  product = state.products.find((product) => product.id === action.payload.id)
       !product &&  state.products.push(action.payload)
       },    removeFromCart: (state , action) => {
        state.products = state.products.filter((product) => product.id !== action.payload.id)
       },   resetCart: (state , action) => {
        state.products = []
       },
  },
})

export const { addToCart , removeFromCart , resetCart } = cartSlice.actions

export default cartSlice.reducer