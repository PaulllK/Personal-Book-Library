import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchBooks = createAsyncThunk('books/fetch', async () => {
  const response = await axios.get('http://localhost:3005/books');

  // to be deleted after testing !!!
  //await pause(3000);

  return response.data;
});

// to be deleted after testing !!!
const pause = async (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchBooks };
