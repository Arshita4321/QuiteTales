import React, { useState } from 'react';

const BrowseMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Genres', onClick: () => console.log('Genres clicked') },
    { name: 'Authors', onClick: () => console.log('Authors clicked') },
    { name: 'New Releases', onClick: () => console.log('New Releases clicked') },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 font-medium focus:outline-none"
      >
        Browse
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 animate-slide-down">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100 focus:outline-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// CSS Animation (inlined for simplicity)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slide-down {
    animation: slideDown 0.2s ease-out;
  }
`, styleSheet.cssRules.length);

export default BrowseMenu;