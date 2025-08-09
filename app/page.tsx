import Link from "next/link";
import { ChevronRight, BookOpen, Code, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-blue-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">VishuML</span>
              </div>
            </div>
            <nav className="flex space-x-8">
              <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/examples" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Examples
              </Link>
              <a href="https://github.com/vishuRizz/vishuml-pip-library" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Machine Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              From Scratch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            VishuML is a comprehensive machine learning library implementing fundamental algorithms 
            from scratch in Python. Perfect for learning, teaching, and understanding how ML algorithms work under the hood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link 
              href="/examples"
              className="inline-flex items-center px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Code className="mr-2 h-5 w-5" />
              View Examples
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">sklearn-Compatible API</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Works seamlessly with pandas DataFrames and follows familiar sklearn patterns for easy adoption.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Educational Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built from scratch implementations help you understand the mathematical foundations of ML algorithms.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Comprehensive Algorithms</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Includes supervised learning, unsupervised learning, and utility functions for complete ML workflows.
            </p>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-20">
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Quick Start Example</h3>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                </svg>
              </button>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`import pandas as pd
from vishuml import LinearRegression
from vishuml.utils import train_test_split

# Load your data
df = pd.read_csv('your_data.csv')
X = df[['feature1', 'feature2', 'feature3']]
y = df['target']

# Split and train
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
score = model.score(X_test, y_test)
print(f"R² Score: {score:.4f}")`}</code>
            </pre>
          </div>
        </div>

        {/* Algorithms Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Implemented Algorithms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Linear Regression", desc: "Continuous target prediction" },
              { name: "Logistic Regression", desc: "Binary classification" },
              { name: "K-Nearest Neighbors", desc: "Classification & regression" },
              { name: "Support Vector Machine", desc: "Binary classification with kernels" },
              { name: "Decision Tree", desc: "Classification using CART" },
              { name: "Naive Bayes", desc: "Gaussian classification" },
              { name: "Perceptron", desc: "Linear binary classifier" },
              { name: "K-Means", desc: "Data clustering" }
            ].map((algo, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{algo.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{algo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
