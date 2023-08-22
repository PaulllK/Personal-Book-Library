import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeSearchTerm, fetchBooks } from '../../../store';
import BooksList from '../../generic/BooksList';

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const { data, searchTerm } = useSelector((state) => {
    return state.books;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div>
      <header className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="flex items-center">
          {/*<img src="../../../assets/images/istockphoto-1270155083-612x612.jpg" alt="Logo" className="w-12 h-12" />*/}
          {/* You can also use text instead of an image */}
          <h1 className="text-2xl ml-2 font-semibold">Personal Book Library</h1>
        </div>
        <div className="flex items-center">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search for a book"
              className="w-full bg-gray-700 text-white rounded-lg pl-12 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.2-5.2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-4">John Doe</p>
          {/*<img src="https://www.kindpng.com/picc/m/616-6169709_library-logo-of-a-person-holding-a-book.png" alt="Profile">*/}
          <img
            src="https://www.kindpng.com/picc/m/616-6169709_library-logo-of-a-person-holding-a-book.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
      <BooksList />
    </div>
  );
}
