import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MdEmail,
  MdPerson,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdCode,
} from "react-icons/md";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Show registration success popup
    setShowRegisterPopup(true);
    
    // Navigate to dashboard after a short delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl flex overflow-hidden min-h-[500px]">
        {/* Left Side - Image and Logo */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-orange-100 to-blue-100 p-8 relative">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center w-full">
            <img
              src="/register.png"
              alt="Sign up illustration"
              className="w-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign up</h2>
          <p className="mb-6 text-gray-600 text-sm">
            If you already have an account register
            <br />
            You can{" "}
            <Link
              to="/login"
              className="text-red-500 font-semibold hover:underline"
            >
              Login here !
            </Link>
          </p>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full py-2.5 pl-10 pr-4 border-0 border-b-2 border-gray-200 focus:border-red-500 focus:outline-none focus:ring-0 bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
                />
                <MdEmail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your User name"
                  className="w-full py-2.5 pl-10 pr-4 border-0 border-b-2 border-gray-200 focus:border-red-500 focus:outline-none focus:ring-0 bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
                />
                <MdPerson className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full py-2.5 pl-10 pr-10 border-0 border-b-2 border-gray-200 focus:border-red-500 focus:outline-none focus:ring-0 bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
                />
                <MdLock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                >
                  {showPassword ? (
                    <MdVisibility className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <MdVisibilityOff className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your Password"
                  className="w-full py-2.5 pl-10 pr-10 border-0 border-b-2 border-gray-200 focus:border-red-500 focus:outline-none focus:ring-0 bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
                />
                <MdLock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                >
                  {showConfirm ? (
                    <MdVisibility className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <MdVisibilityOff className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-base shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      
      {/* Registration Success Popup */}
      {showRegisterPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 shadow-2xl max-w-sm mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Registration Successful!</h3>
              <p className="text-gray-300 text-sm">Welcome! Your account has been successfully created.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
