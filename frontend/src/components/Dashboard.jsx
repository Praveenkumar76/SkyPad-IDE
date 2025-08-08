import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import Footer from './Footer';
import { dashboardData } from '../data/dashboardData';
import { 
  MdCalendarToday,
  MdEmail,
  MdMonitor,
  MdPieChart,
  MdCheckCircle,
  MdDownload,
  MdEmojiEvents,
  MdSearch
} from 'react-icons/md';

const Dashboard = () => {
  return (<>
    <div className="min-h-screen bg-gradient-to-br from-black via-violet-900/20 to-black relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none watermark-pulse">
        <span className="text-9xl font-bold text-violet-400">SKYPAD</span>
      </div>
      
      <div className="relative z-10">
        {/* Main Content Area */}
        <div className="p-6">
          {/* Welcome Header, Search, and Profile */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Welcome Lokiiii!</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white/10 backdrop-blur-md text-white placeholder-gray-300 px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-violet-400 w-64"
                />
                <MdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
              </div>
              
              {/* Dashboard Navbar Component */}
              <DashboardNavbar />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Leader Board */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <MdEmojiEvents className="text-yellow-400 w-5 h-5" />
                <h3 className="text-white font-semibold">Leader Board</h3>
              </div>
              
              <div className="space-y-4">
                {dashboardData.leaderboard.map(({ rank, name, league }) => (
                  <div key={rank} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={
                          `w-10 h-10 rounded-full flex items-center justify-center ` +
                          (rank === 1
                            ? 'bg-yellow-500'
                            : rank === 2
                            ? 'bg-gray-400'
                            : 'bg-orange-600')
                        }
                      >
                        <span className="text-white font-bold">{rank}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{name}</p>
                        <p className="text-gray-300 text-sm">{league}</p>
                      </div>
                    </div>
                    <div className={rank === 1 ? 'text-yellow-400' : rank === 2 ? 'text-gray-400' : 'text-orange-400'}>
                      <span className="text-2xl">{rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Quiz Competition */
            }
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <MdCalendarToday className="text-red-400 w-5 h-5" />
                <h3 className="text-white font-semibold">{dashboardData.upcomingQuiz.title}</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdCalendarToday className="text-white w-8 h-8" />
                </div>
                <p className="text-white font-medium mb-4">{dashboardData.upcomingQuiz.date}</p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  {dashboardData.upcomingQuiz.cta}
                </button>
              </div>
            </div>

            {/* Recent Tests */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <MdEmail className="text-blue-400 w-5 h-5" />
                <h3 className="text-white font-semibold">Recent Tests</h3>
              </div>
              
              <div className="space-y-4">
                {dashboardData.recentTests.map((test, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">{test.title}</h4>
                      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${test.percent >= 50 ? 'border-green-500' : 'border-red-500'}`}>
                        <span className={`${test.percent >= 50 ? 'text-green-500' : 'text-red-500'} font-bold text-sm`}>{test.percent}%</span>
                      </div>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                      Resume
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-6">Performance Metrics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column - Overall Stats */}
                <div className="space-y-6">
                  {/* Problems Completed */}
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <MdMonitor className="text-blue-400 w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {dashboardData.performance.problemsCompleted}
                    </div>
                    <div className="text-gray-300 text-sm">Problems Completed</div>
                  </div>
                  
                  {/* Overall Average */}
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <MdPieChart className="text-green-400 w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      %{dashboardData.performance.overallAverage}
                    </div>
                    <div className="text-gray-300 text-sm">Overall Average</div>
                  </div>
                </div>
                
                {/* Right Column - Question Breakdown */}
                <div className="space-y-4">
                  {/* Easy Questions */}
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-400 text-xs font-medium">EASY</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                          <MdCheckCircle className="text-white w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{dashboardData.performance.breakdown.easy}</div>
                          <div className="text-gray-300 text-xs">Questions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Medium Questions */}
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400 text-xs font-medium">MEDIUM</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                          <MdCheckCircle className="text-white w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{dashboardData.performance.breakdown.medium}</div>
                          <div className="text-gray-300 text-xs">Questions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hard Questions */}
                  <div className="flex items-center space-x-3">
                    <div className="text-red-400 text-xs font-medium">HARD</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                          <MdCheckCircle className="text-white w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{dashboardData.performance.breakdown.hard}</div>
                          <div className="text-gray-300 text-xs">Questions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Incomplete Questions */}
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-400 text-xs font-medium">Incomplete</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                          <MdDownload className="text-white w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{dashboardData.performance.incompleteQuestions}</div>
                          <div className="text-gray-300 text-xs">Questions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>);
};

export default Dashboard;
