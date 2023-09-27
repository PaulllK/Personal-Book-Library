import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../thunks/fetchBooks';

const mockUsers = ['John Doe', 'Mark Zuckerberg', 'Mike Tyson', 'Elon Musk', 'Andrew Tate', 'Margot Robbie'];
const randomIndex = Math.floor(Math.random() * mockUsers.length);

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
    ratings: localStorage.getItem('ratings') === null ? {} : JSON.parse(localStorage.getItem('ratings')),
    loggedInUser: mockUsers[randomIndex],
  },
  reducers: {
    changeBookIDs(state, action) {
      state.bookIDs = action.payload;
    },
    changeRatings(state, action) {
      state.ratings = action.payload;
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

export const { changeBookIDs, changeRatings } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
