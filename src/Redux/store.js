import { configureStore } from '@reduxjs/toolkit';

import tokenSlice from '../Redux/token'



export const store = configureStore({
  reducer: {
    
    tokenData:tokenSlice 
  },
});