import React from 'react';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="mb-6 sm:mb-0">
            <a href="/">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <MenuBookOutlinedIcon />
                </div>
                <span className="text-lg sm:text-xl font-bold">QuiteTales</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6">A quiet little corner of the internet where stories breathe, hearts connect, and imaginations run wild.</p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><InstagramIcon fontSize="small" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FacebookIcon fontSize="small" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><XIcon fontSize="small" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><LinkedInIcon fontSize="small" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><YouTubeIcon fontSize="small" /></a>
            </div>
          </div>
          <div className="mb-6 sm:mb-0">
            <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-6">Explore</h4>
            <ul className="space-y-2 sm:space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors text-sm sm:text-base">Features</a></li>
              <li><a href="/premium" className="hover:text-white transition-colors text-sm sm:text-base">Premium</a></li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-6">Support</h4>
            <ul className="space-y-2 sm:space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors text-sm sm:text-base">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm sm:text-base mb-2 sm:mb-4">Get the latest updates on new stories and features.</p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-1 sm:px-4 sm:py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 sm:mb-0 text-sm sm:text-base"
              />
              <button className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-r-lg hover:bg-blue-700 text-sm sm:text-base">
                <ArrowForwardOutlinedIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-6 sm:mt-12 pt-4 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs sm:text-sm text-center">© 2025 Story Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;