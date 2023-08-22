import SearchBar from '../SearchBar';

function MainPageHeader() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <h1 className="text-2xl ml-2 font-semibold">Personal Book Library</h1>
      </div>
      <SearchBar />
      <div className="flex items-center">
        <p className="mr-4">John Doe</p>
        <img
          src="https://www.kindpng.com/picc/m/616-6169709_library-logo-of-a-person-holding-a-book.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}

export default MainPageHeader;
