import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from 'js-cookie';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", value: "Home" },
    { path: "/about", value: "About Us" },
    { path: "/user/dashboard", value: "Dashboard" },
    { path: "/contact", value: "Contact" },
    { path: "/admin", value: "Admin" },
    // { path: "/admin/login", value: "Admin" },
    { path: "/user/signup", value: "Logout" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    Cookies.remove('token'); // remove the cookie
    navigate('/user/signup'); // navigate to the logout path
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 text-lg sm:text-xl shadow-lg relative bg-white text-gray-800 transition duration-500">
      <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
        <h1 className="text-3xl font-bold">Logo</h1>
        <button className="sm:hidden text-xl focus:outline-none ml-4" onClick={toggleDropdown}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
      <nav className="hidden sm:flex flex-row space-x-6 mb-4 sm:mb-0">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:text-indigo-500 transition duration-300"
            onClick={link.value === 'Logout' ? handleLogout : null}
          >
            {link.value}
          </Link>
        ))}
      </nav>
      {dropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t sm:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-900 hover:text-indigo-500 transition duration-300"
                  onClick={() => {
                    if (link.value === 'Logout') {
                      handleLogout();
                    }
                    setDropdownOpen(false);
                  }}
                >
                  {link.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
