import { createSlice } from "@reduxjs/toolkit"
// import { useEffect } from 'react'

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    subtotal: [],
  },
  reducers: {
    addItem: (state, action) => {
      //how do I add key pair to object?
      const product = { ...action.payload }

      state.subtotal.push(product.price)

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
      state.subtotal.push(-action.payload.price * action.payload.quantity)

      state.cartList = state.cartList.filter(
        (item) => item.sku !== action.payload.sku
      )
    },
    addQuantity: (state, action) => {
      const product = { ...action.payload }

      state.subtotal.push(product.price)

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
      }
    },
    subQuantity: (state, action) => {
      const product = { ...action.payload }

      state.subtotal.push(-product.price)

      if (state.cartList.find((item) => item.sku === product.sku)) {
        state.cartList = state.cartList.map((item) => {
          if (item.sku === product.sku) {
            if (item.quantity === 1) {
              return item
            }
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }
          return item
        })
      }
    },
  },
})

export const {
  addItem,
  removeItem,
  addQuantity,
  subQuantity,
} = cartSlice.actions

// export const selectItem = state => state.productItem

export const selectCartList = (state) => state.cart.cartList
export const selectSubtotal = (state) => state.cart.subtotal
// console.log(selectSubtotal)
// export const selectCartItem = (state) => state.cart.cartList.item

export default cartSlice.reducer
