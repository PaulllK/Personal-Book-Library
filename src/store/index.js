import { booksReducer } from './slices/booksSlice';
import { changeBookIDs, changeRatings } from './slices/booksSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

setupListeners(store.dispatch);

export { changeBookIDs, changeRatings };
export * from './thunks/fetchBooks';
