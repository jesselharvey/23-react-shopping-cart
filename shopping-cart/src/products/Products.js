import React, { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addItem } from "../cart/cartSlice"
import "./Products.css"

export function ProductList() {
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((resp) => {
      let productList = resp.data
      setProducts(productList)
    })
  }, [])
  let installation = (price, installments) => {
    return (price / installments).toFixed(2)
  }
  return (
    <div id="productContainer">
      {products.map((item) => {
        return (
          <div
            onClick={() => dispatch(addItem(item))}
            key={item.sku}
            className="productItem"
          >
            <img alt="" className="itemImg" src={item.img.normal} />
            <span>{item.title}</span>
            <span>${item.price.toFixed(2)} or,</span>
            {item.installments === 0 ? (
              <span>No installments available for this product</span>
            ) : (
              <span>
                {item.installments} installments for $
                {installation(item.price, item.installments)}
              </span>
            )}
            <button>Add to cart</button>
          </div>
        )
      })}
    </div>
  )
}
