import React, { useState, useEffect } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const form = document.querySelector('.login-form');
    form.classList.add('animate-fade-in');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div
        className="bg-white shadow-2xl rounded-lg p-4 max-w-6xl w-full login-form flex flex-col md:flex-row items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-4 sm:my-6 md:my-8 lg:my-12"
      >
        {/* Form Section */}
        <div className="w-full md:w-2/5 p-4 space-y-4 md:mr-6 lg:mr-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-800 mb-2 md:mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <form className="space-y-2 sm:space-y-3">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-1 sm:p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-1 sm:p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-1 sm:p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-1 sm:p-2 rounded-md hover:bg-indigo-700 transition"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className="text-center mt-2 sm:mt-3">
            <p className="text-xs sm:text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span
                className="text-indigo-600 cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </span>
            </p>
          </div>
          <div className="text-center mt-2 sm:mt-3">
            <p className="text-xs sm:text-sm text-gray-700">or continue with</p>
            <button className="w-full bg-white border border-gray-300 text-gray-700 p-1 sm:p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.1-1.93 3.32-4.78 3.32-8.14z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.34-1.36-.34-2.09s.12-1.43.34-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-39 sm:h-52 md:h-84 lg:h-110 bg-gray-200 rounded-lg overflow-hidden mt-4 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1586280275954-d3ad7821af3e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cute books"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;