import React from 'react';

const Card = ({ type, title, image }) => {
  return (
    <div className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden">
      {type === 'story' && image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 break-words text-center" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;