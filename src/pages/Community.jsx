import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContestSection from "../components/ContestSection";
import ConversationForum from "../components/ConversationForum";

const Community = () => {
  const [activeSection, setActiveSection] = useState("contests");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-20 pb-10 flex-grow">
        <div className="container mx-auto px-6">
          {/* Toggle Buttons with Animation */}
          <div className="flex justify-center mb-8 space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-xl font-semibold px-6 py-3 rounded-full ${
                activeSection === "contests" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              } transition-all duration-300`}
              onClick={() => setActiveSection("contests")}
            >
              Contests
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-xl font-semibold px-6 py-3 rounded-full ${
                activeSection === "forum" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              } transition-all duration-300`}
              onClick={() => setActiveSection("forum")}
            >
              Conversation Forum
            </motion.div>
          </div>

          {/* Animated Section Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === "contests" ? <ContestSection /> : <ConversationForum />}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;