import { booksReducer } from './slices/booksSlice';
import { changeBookIDs } from './slices/booksSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

setupListeners(store.dispatch);

export { changeBookIDs };
export * from './thunks/fetchBooks';
