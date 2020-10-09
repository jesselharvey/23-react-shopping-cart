import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../cart/cartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
