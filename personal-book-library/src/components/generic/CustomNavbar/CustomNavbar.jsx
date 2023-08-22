import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:text-gray-300" to="/">
              Main page
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="library">
              Library page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
