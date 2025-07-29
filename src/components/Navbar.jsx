import React from "react";

const NavBar = () => {
  const menuItems = [
    {
      name: "Search",
      url: "/",
    },
    {
      name: "Add Restaurant",
      url: "/add",
    },
    {
      name: "About Us",
      url: "/about",
    },
  ];

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 shadow-lg text-white">
        <div className="navbar-start">
          {/* Dropdown menu for small screens */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-pink-100 rounded-box w-52 text-pink-700"
            >
              {menuItems.map((item, index) => (
                <li key={index} className="hover:bg-pink-300 rounded">
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost normal-case text-2xl font-bold tracking-wide"
          >
            Grab Restaurant
          </a>
        </div>

        {/* Menu for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-pink-900 transition-colors duration-300"
              >
                <a href={item.url} className="font-semibold">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side buttons */}
        <div className="navbar-end flex gap-3">
          <a
            href="/register"
            className="btn btn-outline btn-primary text-white border-white hover:bg-white hover:text-pink-500 transition"
          >
            Register
          </a>
          <a
            href="/login"
            className="btn btn-primary text-pink-600 bg-white hover:bg-pink-100 border-transparent transition"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
