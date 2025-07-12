import React, { useEffect } from 'react';
import FAQs from '../components/FAQs';
import Reviews from '../components/Reviews';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.classList.add('animate-fade-up');
          entry.classList.add('animate-scale-up');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-100 to-indigo-200 animate-gradient-flow overflow-hidden">
      <Header/>
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 bg-cover bg-center parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white animate-pulse-slow bg-gradient-to-r from-rose-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">About Us</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Our Story */}
          <div className="bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              QuiteTales was born from a love for stories, founded to connect authors and readers worldwide. Our journey started with a dream to create a vibrant community where every tale finds its voice, blending creativity with technology.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll delay-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to empower storytellers with innovative tools and a platform to shine. Our mission is to inspire creativity and ensure every story reaches its destined audience with impact.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll delay-400">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To build a global literary ecosystem where imagination knows no bounds, connecting diverse voices and fostering a lifelong love for reading and writing.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text animate-on-scroll">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Founder', 'Lead Designer', 'Content Curator'].map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll delay-100" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white font-semibold">{role[0]}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800 text-center">{role}</h3>
                <p className="text-gray-600 text-center mt-2">Passionate about shaping QuiteTales.</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <FAQs />

        {/* Reviews Section */}
        <Reviews />
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;