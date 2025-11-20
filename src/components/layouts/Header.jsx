import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate("/");
  };
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h2 onClick={handleToHome} className="text-2xl font-bold text-gray-800 cursor-pointer">Redux</h2>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `text-lg font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Todo
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-lg font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/counter"
            className={({ isActive }) =>
              `text-lg font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Counter
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
