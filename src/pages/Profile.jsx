import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import Achievements from "../components/Achievements";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-white">
      <Header />
      <div className="pt-20 pb-10 flex-grow">
        <div className="container mx-auto px-6">
          {/* Banner and Profile Picture */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-48 bg-indigo-600 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1677617349067-26ba7b2cab91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Banner"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <label htmlFor="imageUpload" className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-gray-200">
                <AddIcon />
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 mt-16">
            {/* Left Section (Collection/Achievements) */}
            <div className="w-full lg:w-1/2">
              {/* Navbar */}
              <div className="flex space-x-4 mb-6">
                <motion.button
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "collection" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("collection")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Collection
                </motion.button>
                <motion.button
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "achievements" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("achievements")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Achievements
                </motion.button>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeTab === "collection" && <Collection />}
                {activeTab === "achievements" && <Achievements />}
              </motion.div>
            </div>

            {/* Right Section (About) */}
            <motion.div
              className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4 border-b-2 border-green-300 pb-2 animate-pulse">About Me</h2>
              <p className="text-gray-700 mb-4">
                I’m inspired by the quiet moments that spark creativity—nature, music, and heartfelt stories. Writing is my way to connect and inspire others!
              </p>
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Social Media</h3>
              <div className="flex space-x-4 text-6xl text-indigo-600 hover:text-blue-500">
                <FacebookIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;