import React, { useEffect, useState } from 'react';
import { MdPlayArrow, MdSettings, MdCode, MdLanguage, MdDownload, MdFileCopy } from 'react-icons/md';
import io from 'socket.io-client';

const languageTemplates = {
  javascript: '// JavaScript code here\nconsole.log("Hello, World!");',
  python: '# Python code here\nprint("Hello, World!")',
  cpp: '// C++ code here\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
  java: '// Java code here\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
  c: '// C code here\n#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
};

const languageOptions = [
  { id: 'javascript', name: 'JavaScript', icon: '⚡' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'cpp', name: 'C++', icon: '⚙️' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'c', name: 'C', icon: '🔧' },
];

const CodeEditor = () => {
  const [code, setCode] = useState(languageTemplates.javascript);
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState('vs-dark');
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // WebSocket connection setup
  useEffect(() => {
    // --- THIS IS THE FIX ---
    // Use the environment variable for the server URL, which points to your single, unified backend.
    // It defaults to localhost:5000 for local development.
    const socketUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    
    const newSocket = io(socketUrl, {
      transports: ['websocket', 'polling'] // Recommended for robust connections
    });

    setSocket(newSocket);
    
    newSocket.on('connect', () => {
      setIsConnected(true);
      setOutput('✅ Connected to code execution server!');
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
      setOutput('❌ Disconnected from server. Please check your connection.');
    });

    newSocket.on('run-result', (result) => {
      setIsRunning(false);
      if (result.success) {
        setOutput(`✅ Execution successful!\n\nOutput:\n${result.output}`);
      } else {
        setOutput(`❌ Execution failed!\n\nError:\n${result.output}`);
      }
    });

    newSocket.on('initial-code', (initialData) => {
      if (initialData.code && initialData.language) {
        setCode(initialData.code);
        setLanguage(initialData.language);
      }
    });

    newSocket.on('code-update', (data) => {
      // Check to prevent setting state unnecessarily if the code is the same
      if (data.code !== code) {
        setCode(data.code);
        setLanguage(data.language);
      }
    });

    return () => {
      newSocket.close();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Emit code changes to other connected users
  useEffect(() => {
    if (socket && isConnected) {
      socket.emit('code-change', { code, language });
    }
  }, [code, language, socket, isConnected]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    const newCode = languageTemplates[newLanguage];
    setCode(newCode);
  };

  const handleRunCode = () => {
    if (!socket || !isConnected) {
      setOutput('Error: Not connected to backend. Please wait or refresh.');
      return;
    }
    setIsRunning(true);
    setOutput('Running code...');
    socket.emit('run-code', { code, language });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here to confirm the copy
  };

  const handleDownloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${languageOptions.find(l => l.id === language)?.id || 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900/30 to-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none watermark-pulse">
        <span className="text-9xl font-bold text-violet-400/30">CODE</span>
      </div>
      
      <div className="relative z-10">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                <MdCode className="text-white w-7 h-7" />
              </div>
              <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 text-3xl font-bold">
                  SkyPad Code Editor
                </h1>
                <p className="text-gray-300">Write, run, and collaborate on code</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full transition-colors ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                <span className={`text-sm ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 hover:from-violet-500/30 hover:to-purple-500/30 transition-all duration-300 flex items-center space-x-2"
              >
                <MdSettings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Language Selection and Controls */}
          <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-fuchsia-900/20 backdrop-blur-md rounded-xl p-6 border border-violet-500/30 shadow-lg shadow-violet-500/10 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <MdLanguage className="text-violet-400 w-5 h-5" />
                  <span className="text-violet-300 font-medium">Language:</span>
                </div>
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-violet-900/50 text-white px-4 py-2 rounded-lg border border-violet-500/30 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.icon} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCopyCode}
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-4 py-2 rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <MdFileCopy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
                <button
                  onClick={handleDownloadCode}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-4 py-2 rounded-lg border border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <MdDownload className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning || !isConnected}
                  className="bg-gradient-to-r from-violet-500 via-purple-600 to-fuchsia-600 text-white px-6 py-2 rounded-lg font-medium hover:from-violet-600 hover:via-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-lg shadow-violet-500/30 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MdPlayArrow className="w-5 h-5" />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-fuchsia-900/20 backdrop-blur-md rounded-xl p-6 border border-violet-500/30 shadow-lg shadow-violet-500/10 mb-6">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 font-semibold mb-4">Editor Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-violet-300 text-sm font-medium mb-2">Font Size</label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-violet-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <span className="text-white text-sm">{fontSize}px</span>
                </div>
                <div>
                  <label className="block text-violet-300 text-sm font-medium mb-2">Theme</label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="bg-violet-900/50 text-white px-4 py-2 rounded-lg border border-violet-500/30 focus:outline-none focus:border-violet-400 w-full"
                  >
                    <option value="vs-dark">Dark Theme</option>
                    <option value="vs">Light Theme</option>
                    <option value="hc-black">High Contrast</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Main Editor Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-fuchsia-900/20 backdrop-blur-md rounded-xl border border-violet-500/30 shadow-lg shadow-violet-500/10 overflow-hidden">
              <div className="bg-violet-900/50 px-4 py-3 border-b border-violet-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-violet-300 text-sm ml-3">{language.toUpperCase()} Editor</span>
                </div>
              </div>
              <div className="h-[600px] w-full bg-gray-900">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-transparent text-gray-300 font-mono resize-none border-none outline-none p-4"
                  style={{ fontSize: `${fontSize}px` }}
                  placeholder="Start coding here..."
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-fuchsia-900/20 backdrop-blur-md rounded-xl p-6 border border-violet-500/30 shadow-lg shadow-violet-500/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 font-semibold">Output</h3>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 h-[550px] overflow-auto border border-gray-700">
                <pre className="text-sm font-mono whitespace-pre-wrap text-gray-300">
                  {output || 'No output yet. Click "Run Code" to execute your program.'}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;