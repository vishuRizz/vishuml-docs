import React from 'react';
import { Github, Twitter, Mail, BookOpen, Code2, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">V</span>
              </div>
              <span className="ml-3 text-2xl font-bold">VishuML</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The next-generation machine learning library with powerful visualization 
              and comparison tools built from scratch.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/vishuRizz/vishuml-pip-library" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@vishuml.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#algorithms" className="text-gray-400 hover:text-white transition-colors">
                  Algorithms
                </a>
              </li>
              <li>
                <a href="#docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#examples" className="text-gray-400 hover:text-white transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Code2 className="w-4 h-4 mr-2" />
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Installation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <code className="text-green-400 text-sm">pip install vishuml</code>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Install VishuML with a single command and start building better ML models today.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
              View Installation Guide
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 VishuML. Built with ❤️ for the ML community.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;