import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const fetchBooks = createAsyncThunk('books/fetch', async (searchTerm) => {
  const response = await axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&key=AIzaSyDgYRi1MZMb2cevjcfmBOfwmKd__COKWP0'
  );
  //await testPause(3000);

  if (Array.isArray(response.data.items)) {
    return response.data.items;
  }

  // our data state should always be an array
  return [];
});

// // for loading spinners testing
// const testPause = async (duration) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };

export { fetchBooks };
