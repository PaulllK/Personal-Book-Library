import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeSearchTerm, fetchBooks } from '../../../store';

function SearchBar({ isVisible }) {
  const dispatch = useDispatch();

  const { data, searchTerm } = useSelector((state) => {
    return state.books;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div
      className={`flex items-center absolute mt-0.5 ${
        isVisible ? 'opacity-100 transition ease-in-out duration-300' : 'opacity-0 hidden'
      }`}
    >
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search for a book"
          className="w-full bg-gray-700 text-white rounded-md shadow-2xl pl-12 py-2 focus:outline-none focus:ring focus:border-blue-300"
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
