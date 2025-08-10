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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      setIsSubmitting(true);
      const res = await fetch(`/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Login failed');
      }
      const data = await res.json();
      if (rememberMe && data.token) {
        localStorage.setItem('auth_token', data.token);
      }
      setShowLoginPopup(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1200);
    } catch (error) {
      alert(error.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl flex overflow-hidden min-h-[300px]">
        {/* Left Side - Image and Logo */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-orange-100 to-blue-100 p-8 relative">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center w-full">
            <img
              src="/register.png"
              alt="Sign in illustration"
              className="w-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign in</h2>
          <p className="mb-6 text-gray-600 text-sm">
            If you don't have an account register
            <br />
            You can{" "}
            <Link
              to="/signup"
              className="text-red-500 font-semibold hover:underline"
            >
              register here !
            </Link>
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full py-2.5 pl-10 pr-4 border-0 border-b-2 border-gray-200 focus:border-red-500 focus:outline-none focus:ring-0 bg-transparent text-gray-800 placeholder-gray-400 transition-colors duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MdEmail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                Forgot Password ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-6 py-3 rounded-full text-white font-semibold text-base shadow-lg transition-all duration-300 transform ${isSubmitting ? 'bg-red-400' : 'bg-red-500 hover:bg-red-600 hover:scale-105'}`}
            >
              {isSubmitting ? 'Signing in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Login Success Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 shadow-2xl max-w-sm mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Login Successful!</h3>
              <p className="text-gray-300 text-sm">Welcome back! You have been successfully logged in.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
