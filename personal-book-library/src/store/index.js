import { booksReducer } from './slices/booksSlice';
import { changeSearchTerm } from './slices/booksSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

setupListeners(store.dispatch);

export { changeSearchTerm };
export * from './thunks/fetchBooks';
