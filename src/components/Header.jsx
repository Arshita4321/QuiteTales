import React from 'react';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import User from './User';

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <NavLink to="/" className="text-indigo-700 rounded-lg flex items-center justify-center">
              {({ isActive }) => (
                <div className={`w-8 h-8 ${isActive ? 'text-indigo-900' : 'text-indigo-700'} rounded-lg flex items-center justify-center`}>
                  <MenuBookOutlinedIcon />
                </div>
              )}
            </NavLink>
            <NavLink to="/" className={({ isActive }) => `text-2xl font-bold ${isActive ? 'text-indigo-900' : 'text-indigo-800'}`}>
              QuiteTales
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium mr-3">Browse</a>
            <NavLink
              to="/premium"
              className={({ isActive }) => `text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium mr-3 ${isActive ? 'text-indigo-700' : ''}`}
            >
              {({ isActive }) => (
                <Button variant="outlined" color="secondary" className={isActive ? 'border-indigo-700' : ''}>
                  Try Premium
                </Button>
              )}
            </NavLink>
            <a href="/about" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium ml-3">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium ml-3">Community</a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-gray-800 placeholder-gray-500"
              />
            </div>
            <User />
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-indigo-500 focus:outline-none p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;