import Link from "next/link";
import { ArrowRight, Copy, Download, Terminal, Package } from "lucide-react";

export default function InstallationPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Introduction</Link>
        <span>/</span>
        <span>Installation</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Installation
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Get VishuML up and running in your Python environment. Choose the installation method that works best for your needs.
        </p>

        {/* Requirements */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Package className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Requirements</h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Python more than 3.7</li>
                <li>• NumPy more than 1.19.0</li>
                <li>• pandas (optional, for DataFrame support)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PyPI Installation */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          From PyPI (Recommended)
        </h2>
        
        <p className="mb-6">
          The easiest way to install VishuML is using pip from the Python Package Index (PyPI):
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-6 relative group">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Terminal className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Terminal</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300"><code>pip install vishuml</code></pre>
        </div>

        <p className="mb-8">
          This will install VishuML and its required dependencies automatically.
        </p>

        {/* Source Installation */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          From Source
        </h2>
        
        <p className="mb-6">
          For the latest development version or to contribute to the project, you can install from source:
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-6 relative group">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Terminal className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Terminal</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300"><code>{`git clone https://github.com/vishuRizz/vishuml.git
cd vishuml
pip install -e .`}</code></pre>
        </div>

        <p className="mb-8">
          The <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">-e</code> flag installs in editable mode, 
          so changes to the source code will be reflected immediately.
        </p>

        {/* Development Installation */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Development Installation
        </h2>
        
        <p className="mb-6">
          If you plan to contribute to VishuML or run tests, install with development dependencies:
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-6 relative group">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Terminal className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Terminal</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300"><code>{`git clone https://github.com/vishuRizz/vishuml.git
cd vishuml
pip install -e ".[dev]"`}</code></pre>
        </div>

        {/* Virtual Environment */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Using Virtual Environments
        </h2>
        
        <p className="mb-6">
          We recommend using a virtual environment to avoid conflicts with other packages:
        </p>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Using venv</h3>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 relative group">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
            <Copy className="h-4 w-4" />
          </button>
          <pre className="text-sm text-gray-300"><code>{`# Create virtual environment
python -m venv vishuml-env

# Activate (Linux/Mac)
source vishuml-env/bin/activate

# Activate (Windows)
vishuml-env\\Scripts\\activate

# Install VishuML
pip install vishuml`}</code></pre>
        </div>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Using conda</h3>
        <div className="bg-gray-900 rounded-lg p-4 mb-8 relative group">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
            <Copy className="h-4 w-4" />
          </button>
          <pre className="text-sm text-gray-300"><code>{`# Create conda environment
conda create -n vishuml-env python=3.9

# Activate environment
conda activate vishuml-env

# Install VishuML
pip install vishuml`}</code></pre>
        </div>

        {/* Verification */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Verify Installation
        </h2>
        
        <p className="mb-6">
          Test your installation by importing VishuML and checking the version:
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-8 relative group">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Python</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300"><code>{`import vishuml
print(f"VishuML version: {vishuml.__version__}")

# Quick test
from vishuml import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

model = LinearRegression()
model.fit(X, y)
print(f"Test prediction: {model.predict([[5]])}")  # Should be close to [10]`}</code></pre>
        </div>

        {/* Troubleshooting */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Troubleshooting
        </h2>

        <div className="space-y-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-900 dark:text-yellow-100 mb-2">
              ImportError: No module named 'numpy'
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 mb-3">
              NumPy is a required dependency. Install it separately if needed:
            </p>
            <div className="bg-gray-900 rounded-sm p-2">
              <code className="text-sm text-gray-300">pip install numpy</code>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-900 dark:text-yellow-100 mb-2">
              Permission denied errors
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 mb-3">
              Use the --user flag to install in your user directory:
            </p>
            <div className="bg-gray-900 rounded-sm p-2">
              <code className="text-sm text-gray-300">pip install --user vishuml</code>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Getting Started</span>
          </Link>
          
          <Link 
            href="/docs/quickstart"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Quick Start</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
