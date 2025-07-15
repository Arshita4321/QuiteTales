import React, { useState } from 'react';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import User from './User';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <NavLink to="/" className="text-indigo-700 rounded-lg flex items-center justify-center">
              {({ isActive }) => (
                <div className={`w-8 h-8 ${isActive ? 'text-indigo-900' : 'text-indigo-700'} rounded-lg flex items-center justify-center`}>
                  <MenuBookOutlinedIcon />
                </div>
              )}
            </NavLink>
            <NavLink to="/" className={({ isActive }) => `text-xl sm:text-2xl font-bold ${isActive ? 'text-indigo-900' : 'text-indigo-800'}`}>
              QuiteTales
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-500 focus:outline-none p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium">Browse</a>
              <NavLink
                to="/premium"
                className={({ isActive }) => `text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium ${isActive ? 'text-indigo-700' : ''}`}
              >
                {({ isActive }) => (
                  <Button variant="outlined" color="secondary" className={isActive ? 'border-indigo-700' : ''}>
                    Try Premium
                  </Button>
                )}
              </NavLink>
              <a href="/about" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium">About</a>
              <a href="/community" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium">Community</a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 w-40 sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-gray-800 placeholder-gray-500"
                />
              </div>
              <User />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 shadow-md p-4 rounded-lg mt-2`}>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium">Browse</a>
            <NavLink
              to="/premium"
              className={({ isActive }) => `text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium ${isActive ? 'text-indigo-700' : ''}`}
            >
              {({ isActive }) => (
                <Button variant="outlined" color="secondary" className={isActive ? 'border-indigo-700' : ''} size="small">
                  Try Premium
                </Button>
              )}
            </NavLink>
            <a href="/about" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium">About</a>
            <a href="/community" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium">Community</a>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-gray-800 placeholder-gray-500"
              />
            </div>
            <User />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;