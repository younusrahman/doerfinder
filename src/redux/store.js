import { configureStore } from '@reduxjs/toolkit';
import CurrentUserSlice from './slices/CurrentUserSlice';
import ModalSlice from './slices/ModalSlice';




export const store = configureStore({
  reducer: {
    Modal : ModalSlice,
    CurrentUser : CurrentUserSlice
  },
});
