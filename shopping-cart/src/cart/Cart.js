import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeItem, selectCartList, selectCartItem } from "./cartSlice"
// import { useSelector, useDispatch } from "react-redux"

export function Cart() {
  const cart = useSelector(selectCartList)
  const item = useSelector(selectCartItem)
  const dispatch = useDispatch()
  
  useEffect(() => {
    console.log(cart)
    // console.log(cartList)
  })
  // const dispatch = useDispatch()
  // const [productItem, setProductItem] = useState()
  return (
    <div>
      <span>CartImgHere</span>
      {cart.map((item) => (
        <li onClick={() => dispatch(removeItem(item.sku))} key={item.sku}>{item.title}</li>
      ))}
    </div>
  )
}
