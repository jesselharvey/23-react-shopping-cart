import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  selectCartList,
  selectSubtotal,
  removeItem,
  addQuantity,
  subQuantity,
} from "./cartSlice"
import "./cart.css"
// import { useSelector, useDispatch } from "react-redux"

//    need to multiply the quantity of items by their price
// in their individual enviroment,
// then take that number and store it in an array.

//    Let the subtotal be a new array
// made up of the reduced(meth) prices array

export function Cart() {
  const cart = useSelector(selectCartList)
  const subtotal = useSelector(selectSubtotal)
  // const item = useSelector(selectCartItem)
  const dispatch = useDispatch()
  let [active, setActive] = useState(false)
  // let [disabled, setDisabled] = useState(false)
  // console.log(subtotal)

  let handleCart = () => {
    return setActive(!active)
  }

  let cartSvg =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuMDI5IDEzaDIuOTcxbC0uMjY2IDFoLTIuOTkybC4yODctMXptLjg2My0zaDIuODEybC4yOTYtMWgtMi44MjFsLS4yODcgMXptLS41NzYgMmg0LjM4N2wuMjk3LTFoLTQuMzk2bC0uMjg4IDF6bTIuNjg0LTlsLS43NDMgMmgtMS45MjlsLTMuNDc0IDEyaC0xMS4yMzlsLTQuNjE1LTExaDE0LjgxMmwtLjU2NCAyaC0xMS4yNGwyLjkzOCA3aDguNDI4bDMuNDMyLTEyaDQuMTk0em0tMTQuNSAxNWMtLjgyOCAwLTEuNS42NzItMS41IDEuNSAwIC44MjkuNjcyIDEuNSAxLjUgMS41czEuNS0uNjcxIDEuNS0xLjVjMC0uODI4LS42NzItMS41LTEuNS0xLjV6bTUuOS03LS45IDdjLS44MjggMC0xLjUuNjcxLTEuNSAxLjVzLjY3MiAxLjUgMS41IDEuNSAxLjUtLjY3MSAxLjUtMS41YzAtLjgyOC0uNjcyLTEuNS0xLjUtMS41eiIvPjwvc3ZnPg=="

  useEffect(() => {
    console.log(active)
    // console.log(cartList)
  })
  // let disableBtn = (item) => {
  //   item.quantity == 1

  // }
  // const dispatch = useDispatch()
  // const [productItem, setProductItem] = useState()
  return (
    <div>
    <div className={"cartImgContainer " + (active === false ? '' : 'hidden')}><img id="cartImg" onClick={handleCart} src={cartSvg} /></div>
    <div className={"cartContainer " + (active === false ? 'hidden' : '')}>
    {active === true ? 
    <div className="cartImgContainer active"><img id="cartImg" onClick={handleCart} src={cartSvg} /></div>
  : ""}
     {/* <div className={"cartImgContainer " + (active === false ? 'hidden' : 'active')}><img id="cartImg" onClick={handleCart} src={cartSvg} /></div> */}
      <div id="itemContainer">
        {cart.map((item) => (
          <div className="cartItem" key={item.sku}>
            {/* <div> */}
            <img
              className="thumbImg"
              alt={item.title + " with " + item.style}
              src={item.img.thumb}
            />
            {/* </div> */}
            <div className="itemContent">
              <span>{item.title}</span>
              <span>
                {item.availableSizes[0]} | {item.style}
              </span>
              <span>Quantity {item.quantity}</span>
            </div>
            <div className="priceContent">
              {/* <div className="deleteSvg"> */}
              <img
                onClick={() => dispatch(removeItem(item))}
                className="deleteSvg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMjAuMTg4bC04LjMxNS04LjIwOSA4LjItOC4yODItMy42OTctMy42OTctOC4yMTIgOC4zMTgtOC4zMS04LjIwMy0zLjY2NiAzLjY2NiA4LjMyMSA4LjI0LTguMjA2IDguMzEzIDMuNjY2IDMuNjY2IDguMjM3LTguMzE4IDguMjg1IDguMjAzeiIvPjwvc3ZnPg=="
              />
              <span>{item.price.toFixed(2)} </span>
              <div className="btnGroup">
                <button
                  disabled={item.quantity == 1 ? true : false}
                  onClick={() => dispatch(subQuantity(item))}
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(addQuantity(item))}
                  className="btn"
                >
                  +
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        ))}
        <div className="cartFooter">
          <span>
            Subtotal ${Number(subtotal.reduce((a, b) => a + b, 0)).toFixed(2)}{" "}
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}
