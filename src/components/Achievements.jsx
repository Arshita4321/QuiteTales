import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-purple-600 mb-4 border-b-2 border-purple-300 pb-2 animate-pulse">My Achievements</h2>
      <div className="space-y-4">
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-700">Stories Written: 2</p>
        </motion.div>
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-gray-700">Contests Won: 3</p>
        </motion.div>
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-gray-700">Total Votes: 145</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;