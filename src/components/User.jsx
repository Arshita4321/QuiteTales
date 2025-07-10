import React, { useState, useEffect, useRef } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { NavLink } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock login state; replace with actual auth logic
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: 'My Profile', path: '/profile', icon: <AccountCircleOutlinedIcon /> },
    { name: 'My Stories', path: '/my-stories', icon: <AutoStoriesOutlinedIcon /> },
    { name: 'Write New Story', path: '/write', icon: <DrawOutlinedIcon /> },
    { name: 'Notifications', path: '/notifications', icon: <NotificationsOutlinedIcon /> },
    { name: 'Logout', path: '/logout', icon: <LogoutOutlinedIcon /> },
  ];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown and handle icon click
  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleIconClick}
        className="text-gray-600 hover:text-indigo-500 focus:outline-none p-2 rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-110"
      >
        {isLoggedIn ? <PersonOutlineIcon /> : <LoginOutlinedIcon />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-1 animate-dropdown-fade-in transition-all duration-300 ease-in-out z-50">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-800 ${isActive ? 'bg-indigo-100 text-indigo-800 font-semibold' : ''} transition-colors duration-300 ease-in-out flex items-center`}
            >
              <span className="mr-3 text-gray-700 hover:text-indigo-700 transition-colors duration-300 ease-in-out">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;