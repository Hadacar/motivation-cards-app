// store.js
import { configureStore } from '@reduxjs/toolkit';
import motivationCardReducer from './MotivationCardSlice';

const store = configureStore({
  reducer: {
    motivationCards: motivationCardReducer,
  },
});

export default store;
