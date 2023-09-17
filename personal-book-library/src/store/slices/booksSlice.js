import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../thunks/fetchBooks';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
    bookIDs: {
      reading: [],
      wantToRead: [],
      finished: [],
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    changeBookIDs(state, action) {
      state.bookIDs = action.payload;
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

export const { changeSearchTerm, changeBookIDs } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
