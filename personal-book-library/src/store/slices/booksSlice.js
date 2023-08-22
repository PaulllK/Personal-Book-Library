import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../thunks/fetchBooks';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
    searchTerm: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { changeSearchTerm } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
