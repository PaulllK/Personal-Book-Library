import { NavLink } from 'react-router-dom';

function CustomNavbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <NavLink className="text-white hover:text-gray-300" to="/">
              Main page
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white hover:text-gray-300" activeClassName="text-blue-300" to="/library">
              Library page
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
