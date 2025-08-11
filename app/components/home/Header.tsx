import React from 'react';
import { Github, BookOpen, Code2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-black">VishuML</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors font-medium">
              Features
            </a>
            <a href="#algorithms" className="text-gray-600 hover:text-black transition-colors font-medium">
              Algorithms
            </a>
            <a href="/docs" className="text-gray-600 hover:text-black transition-colors font-medium">
              Documentation
            </a>
            <a href="#examples" className="text-gray-600 hover:text-black transition-colors font-medium">
              Examples
            </a>
            <a 
              href="https://github.com/vishuRizz/vishuml-pip-library" 
              className="flex items-center text-gray-600 hover:text-black transition-colors font-medium"
            >
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={() => window.location.href = '/docs'} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;