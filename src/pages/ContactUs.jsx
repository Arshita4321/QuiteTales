import React, { useEffect, useRef } from 'react';

const ContactUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.classList.add('animate-fade-slide-up');
          entry.classList.add('animate-scale-in');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      alert('Message sent! We will get back to you soon.');
      formRef.current.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-100 to-pink-200 animate-gradient-pulse overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 bg-cover bg-center parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602584332286-c88b9d75f360?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white animate-pulse-glow bg-gradient-to-r from-teal-400 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text">Get in Touch</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 hover:border-teal-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 hover:border-teal-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 hover:border-teal-500 h-32"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-pink-500 text-white p-3 rounded-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">Email: support@quitetales.com</p>
              <p className="text-gray-600 leading-relaxed">Phone: +1-800-555-1234</p>
              <p className="text-gray-600 leading-relaxed">Address: 123 Story Lane, Literary City, LC 12345</p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-teal-300 to-purple-300 flex items-center justify-center text-gray-800 font-medium">
                Map Placeholder
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              {['Twitter', 'Facebook', 'Instagram'].map((social, index) => (
                <a
                  key={index}
                  href={`https://${social.toLowerCase()}.com/quitetales`}
                  className="text-2xl text-gray-600 hover:text-teal-500 hover:scale-110 transition-all duration-300 ease-in-out animate-bounce-slow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;