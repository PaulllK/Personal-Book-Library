import SearchBar from '../SearchBar';
import { LuSearch } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function MainPageHeader() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  const { loggedInUser } = useSelector((state) => {
    return state.books;
  });

  return (
    <header>
      <div className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="hidden phone:flex items-center">
          <h1 className="text-2xl ml-2 font-semibold">Personal Book Library</h1>
        </div>
        <div className="flex w-full justify-between phone:w-auto phone:justify-start">
          <button
            onClick={toggleSearchBar}
            className="text-white px-4 py-2 mr-2 rounded hover:bg-gray-600 transition flex items-center"
          >
            <LuSearch />
          </button>
          <div className="flex items-center">
            <p className="mr-4">{loggedInUser}</p>
            <img
              src="https://www.kindpng.com/picc/m/616-6169709_library-logo-of-a-person-holding-a-book.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex phone:justify-end">
        <SearchBar isVisible={isVisible} />
      </div>
    </header>
  );
}

export default MainPageHeader;
