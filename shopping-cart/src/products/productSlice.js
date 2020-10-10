import { createSlice } from "@reduxjs/toolkit"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
  },
  reducers: {
    asyncFetch: (state, action) => {
      // const [products, setProducts] = useState([])
      state.productList = action.payload
    },
  },
})

export const { asyncFetch } = productSlice.actions

export const getProducts = () => (dispatch) => {
  axios
    .get("http://localhost:3001/products")
    .then((resp) => dispatch(asyncFetch(resp.data)))
}

export const selectProductList = (state) => state.products.productList

export default productSlice.reducer
