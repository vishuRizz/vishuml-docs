"use client";

import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUp, ArrowDown, FileText } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  href: string;
  section?: string;
  content: string;
}

interface SearchBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

// Search data - this would typically come from a search index
const searchData: SearchResult[] = [
  {
    title: "Linear Regression",
    href: "/docs/supervised/linear-regression",
    section: "Overview",
    content: "Linear regression fits a linear model with coefficients to minimize the residual sum of squares"
  },
  {
    title: "Linear Regression",
    href: "/docs/supervised/linear-regression",
    section: "Mathematical Background",
    content: "Linear regression assumes a linear relationship between the input features X and the target y"
  },
  {
    title: "Linear Regression",
    href: "/docs/supervised/linear-regression",
    section: "API Reference",
    content: "class LinearRegression with parameters like fit_intercept, use_gradient_descent, learning_rate"
  },
  {
    title: "Linear Regression",
    href: "/docs/supervised/linear-regression",
    section: "Basic Usage",
    content: "Simple example with numpy arrays and pandas DataFrames"
  },
  {
    title: "Linear Regression",
    href: "/docs/supervised/linear-regression",
    section: "Advanced Usage",
    content: "Gradient descent vs normal equation comparison and custom training parameters"
  },
  {
    title: "Logistic Regression",
    href: "/docs/supervised/logistic-regression",
    section: "Overview",
    content: "Logistic regression is a fundamental classification algorithm that uses the logistic function"
  },
  {
    title: "Logistic Regression",
    href: "/docs/supervised/logistic-regression",
    section: "Mathematical Background",
    content: "Logistic regression models the probability of a binary outcome using the logistic function"
  },
  {
    title: "Logistic Regression",
    href: "/docs/supervised/logistic-regression",
    section: "API Reference",
    content: "class LogisticRegression with parameters like learning_rate, max_iterations, fit_intercept"
  },
  {
    title: "Logistic Regression",
    href: "/docs/supervised/logistic-regression",
    section: "Basic Usage",
    content: "Simple example with binary classification and probability estimation"
  },
  {
    title: "Logistic Regression",
    href: "/docs/supervised/logistic-regression",
    section: "Advanced Usage",
    content: "Model comparison, interactive visualization, and custom training parameters"
  },
  {
    title: "Getting Started",
    href: "/docs",
    section: "Overview",
    content: "VishuML is a comprehensive machine learning library implementing fundamental algorithms from scratch"
  },
  {
    title: "Quick Start",
    href: "/docs/quickstart",
    section: "Basic Example",
    content: "Get started with VishuML using a simple linear regression example"
  },
  {
    title: "Installation",
    href: "/docs/installation",
    section: "PyPI Installation",
    content: "Install VishuML using pip from PyPI"
  }
];

export default function SearchBox({ isOpen, onClose }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    const timeoutId = setTimeout(() => {
      const searchTerm = query.toLowerCase();
      const filteredResults = searchData.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.section?.toLowerCase().includes(searchTerm) ||
        item.content.toLowerCase().includes(searchTerm)
      );
      
      setResults(filteredResults.slice(0, 10)); // Limit to 10 results
      setSelectedIndex(0);
      setIsSearching(false);
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      const selectedResult = results[selectedIndex];
      if (selectedResult) {
        window.location.href = selectedResult.href;
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-10 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={`${result.href}-${result.section}-${index}`}
                  href={result.href}
                  onClick={onClose}
                  className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    index === selectedIndex ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <FileText className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {result.title}
                        </span>
                        {result.section && (
                          <>
                            <span className="text-gray-300 dark:text-gray-600">•</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {result.section}
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                        {result.content}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() !== '' ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              No results found for &quot;{query}&quot;
            </div>
          ) : null}
        </div>

        {results.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center justify-between">
              <span>
                {results.length} result{results.length !== 1 ? 's' : ''}
              </span>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <ArrowDown className="h-3 w-3 mr-1" />
                  Navigate
                </span>
                <span>Enter to select</span>
                <span>Esc to close</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
