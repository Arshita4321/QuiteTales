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
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
          <a href='/'>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <MenuBookOutlinedIcon/>
              </div>
               <span className="text-xl font-bold">QuiteTales</span>
            </div>
            </a>
            <p class="text-slate-400 mb-6">A quiet little corner of the internet where stories breathe, hearts connect, and imaginations run wild.</p>
            <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><InstagramIcon/></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><FacebookIcon/></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><XIcon/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><LinkedInIcon/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><YouTubeIcon/></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="/premium" className="hover:text-white transition-colors">Premium</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-4">Get the latest updates on new stories and features.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
              <ArrowForwardOutlinedIcon/>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm text-center">© 2025 Story Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;