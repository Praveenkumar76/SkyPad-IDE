import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const cardHover = "transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20";

const Hero = ({ navigate }) => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 lg:px-0">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-900/20 to-black"></div>
          {/* Background watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none watermark-pulse">
            <span className="text-9xl font-bold text-violet-400">SKYPAD</span>
          </div>
          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto text-center">
            {/* Pre-headline */}
            <p
              className="text-violet-400 tracking-wider text-sm md:text-base mb-4 uppercase fade-in-up fade-in-up-delay-1"
              style={{ fontFamily: "var(--font-climate)" }}
            >
              For Aspirants
            </p>
            {/* Main headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap w-full flex justify-center fade-in-up fade-in-up-delay-2">
              <span
                style={{ fontFamily: "var(--font-zen)" }}
                className="text-white block"
              >
                Create . Compete . Collaborate
              </span>
            </h1>
            {/* Subtitle */}
            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto fade-in-up fade-in-up-delay-3"
              style={{ fontFamily: "var(--font-bitcount)" }}
            >
              A coding space to learn, grow, and connect with others through
              real-world programming experiences.
            </p>
            {/* CTA Button */}
            <div className="flex justify-center w-full fade-in-up fade-in-up-delay-3">
              <button
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25 button-glow"
                onClick={() => navigate && navigate("/signup")}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-violet-900/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">About</span>
                <span className="text-violet-400"> Us</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                We're passionate about creating the ultimate development
                experience. Our team of experts has built SKYPAD-IDE to
                revolutionize how developers write, debug, and deploy their
                code.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className={`bg-violet-900/20 p-6 rounded-lg border border-violet-500/20 ${cardHover}`}
              >
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Innovation
                </h3>
                <p className="text-gray-300">
                  Cutting-edge features that push the boundaries of what's
                  possible in development.
                </p>
              </div>
              <div
                className={`bg-violet-900/20 p-6 rounded-lg border border-violet-500/20 ${cardHover}`}
              >
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Performance
                </h3>
                <p className="text-gray-300">
                  Lightning-fast performance that keeps up with your development
                  speed.
                </p>
              </div>
              <div
                className={`bg-violet-900/20 p-6 rounded-lg border border-violet-500/20 ${cardHover}`}
              >
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Security
                </h3>
                <p className="text-gray-300">
                  Enterprise-grade security to protect your code and
                  intellectual property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Powerful</span>
                <span className="text-violet-400"> Features</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Everything you need to build, debug, and deploy your
                applications with confidence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`space-y-6`}>
                <div className={`flex items-start space-x-4 ${cardHover}`}>
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Intelligent Code Completion
                    </h3>
                    <p className="text-gray-300">
                      AI-powered suggestions that understand your codebase and
                      context.
                    </p>
                  </div>
                </div>
                <div className={`flex items-start space-x-4 ${cardHover}`}>
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Real-time Collaboration
                    </h3>
                    <p className="text-gray-300">
                      Work together with your team in real-time with live
                      editing and chat.
                    </p>
                  </div>
                </div>
                <div className={`flex items-start space-x-4 ${cardHover}`}>
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Advanced Debugging
                    </h3>
                    <p className="text-gray-300">
                      Powerful debugging tools with breakpoints, watch
                      expressions, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`space-y-6`}>
                <div className={`flex items-start space-x-4 ${cardHover}`}>
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Git Integration
                    </h3>
                    <p className="text-gray-300">
                      Seamless Git workflow with visual diff, staging, and
                      commit tools.
                    </p>
                  </div>
                </div>
                <div className={`flex items-start space-x-4 ${cardHover}`}>
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Multi-language Support
                    </h3>
                    <p className="text-gray-300">
                      Support for 50+ programming languages with syntax
                      highlighting.
                    </p>
                  </div>
                </div>
                <div className={`flex items-start space-x-4 ${cardHover}`}>
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Cloud Deployment
                    </h3>
                    <p className="text-gray-300">
                      Deploy directly to cloud platforms with one-click
                      deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-violet-900/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">System</span>
                <span className="text-violet-400"> Requirements</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Ensure your system meets our requirements for optimal
                performance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className={`bg-violet-900/20 p-6 rounded-lg border border-violet-500/20 ${cardHover}`}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Minimum Requirements
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• OS: Windows 10, macOS 10.14, or Linux</li>
                  <li>• RAM: 4GB</li>
                  <li>• Storage: 2GB free space</li>
                  <li>• Processor: Dual-core 2.0 GHz</li>
                </ul>
              </div>
              <div
                className={`bg-violet-900/20 p-6 rounded-lg border border-violet-500/20 ${cardHover}`}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Recommended
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• OS: Windows 11, macOS 12, or Linux</li>
                  <li>• RAM: 8GB or more</li>
                  <li>• Storage: 5GB free space</li>
                  <li>• Processor: Quad-core 3.0 GHz</li>
                </ul>
              </div>
              <div
                className={`bg-violet-900/20 p-6 rounded-lg border border-violet-500/20 ${cardHover}`}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Network
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Internet: Broadband connection</li>
                  <li>• Speed: 10 Mbps minimum</li>
                  <li>• Latency: &lt; 100ms for collaboration</li>
                  <li>• Browser: Chrome, Firefox, Safari</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );

};

export default Hero; 