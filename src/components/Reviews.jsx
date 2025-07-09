import React from 'react';

const Reviews = () => {
  const reviews = [
    { name: "Aisha Patel", text: "QuiteTales transformed my writing journey—amazing community and support!", rating: 5 },
    { name: "Rajesh Kumar", text: "The variety of stories is incredible. Highly recommend!", rating: 4 },
    { name: "Sneha Desai", text: "A perfect place for readers and writers to connect.", rating: 5 },
    { name: "Rajesh Kumar", text: "The variety of stories is incredible. Highly recommend!", rating: 4 },
    { name: "Sneha Desai", text: "A perfect place for readers and writers to connect.", rating: 3 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text animate-on-scroll">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white/90 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.822 1.417 8.285L12 18.599l-7.416 4.677 1.417-8.285-6.001-5.822 8.332-1.151z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-2">{review.text}</p>
            <p className="text-gray-800 font-medium">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;