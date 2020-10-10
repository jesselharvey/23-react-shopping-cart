import { createSlice } from "@reduxjs/toolkit"
// import { useEffect } from 'react'

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
  },
  reducers: {
    addItem: (state, action) => {
      //how do I add key pair to object?
      const product = { ...action.payload }

      if (state.cartList.find((item) => item.sku === product.sku)) {
        state.cartList = state.cartList.map((item) => {
          if (item.sku === product.sku) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
      } else {
        product.quantity = 1
        state.cartList.push(product)
      }
    },
    removeItem: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.sku !== action.payload
      )
    },
  },
})
console.log(cartSlice)

export const { addItem, removeItem } = cartSlice.actions

// export const selectItem = state => state.productItem

export const selectCartList = (state) => state.cart.cartList
export const selectCartItem = (state) => state.cart.cartList.item

export default cartSlice.reducer
