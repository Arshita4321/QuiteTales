import React from "react";
import { motion } from "framer-motion";

const Collection = () => {
  const stories = [
    { id: 1, title: "Whispers of the Forest", image: "https://images.unsplash.com/photo-1666172879535-d187242d893f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "A tale of a hidden forest where whispers guide lost souls.", status: "In Progress", date: "2025-07-10" },
    { id: 2, title: "Silent Echoes", image: "https://images.unsplash.com/photo-1630822390804-dcdab00afd75?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "A journey through a silent valley echoing with memories.", status: "Completed", date: "2025-06-15" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-300 pb-2 animate-pulse">My Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: story.id * 0.1 }}
          >
            <img src={story.image} alt={story.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-indigo-600">{story.title}</h3>
              <p className="text-gray-700 mt-2 line-clamp-3">{story.description}</p>
              <span className="text-gray-500 text-sm mt-2 inline-block">
                Status: {story.status} | Started: {new Date(story.date).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collection;