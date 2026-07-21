import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            🎓 Student Management
          </Link>
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`hover:text-teal-200 transition ${
                isActive('/') ? 'text-teal-200 border-b-2 border-white' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/students"
              className={`hover:text-teal-200 transition ${
                isActive('/students') ? 'text-teal-200 border-b-2 border-white' : ''
              }`}
            >
              Students
            </Link>
            <Link
              to="/add-student"
              className={`hover:text-teal-200 transition ${
                isActive('/add-student') ? 'text-teal-200 border-b-2 border-white' : ''
              }`}
            >
              Add Student
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;