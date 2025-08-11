"use client"
import Link from "next/link";
import { ArrowRight, Copy, CheckCircle, AlertTriangle } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <span>Getting Started</span>
      </nav>

      {/* Main content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Getting Started with VishuML
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML is a comprehensive machine learning library implementing fundamental algorithms from scratch in Python. 
          This library provides educational implementations of popular ML algorithms without relying on external ML frameworks like scikit-learn.
        </p>

        {/* Features section */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">Features</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                🎯 sklearn-compatible API
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Works seamlessly with pandas DataFrames and CSV data! VishuML follows the familiar sklearn patterns you already know and love.
              </p>
            </div>
          </div>
        </div>

        <p className="mb-6">VishuML implements the following machine learning algorithms:</p>

        {/* Algorithms sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Supervised Learning</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>Linear Regression</strong> - For continuous target prediction</li>
              <li>• <strong>Logistic Regression</strong> - For binary classification</li>
              <li>• <strong>K-Nearest Neighbors (KNN)</strong> - For classification and regression</li>
              <li>• <strong>Support Vector Machine (SVM)</strong> - For binary classification with linear and RBF kernels</li>
              <li>• <strong>Decision Tree</strong> - For classification using CART algorithm</li>
              <li>• <strong>Naive Bayes</strong> - Gaussian Naive Bayes for classification</li>
              <li>• <strong>Perceptron</strong> - Linear binary classifier</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Unsupervised Learning & Utilities</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>• <strong>K-Means Clustering</strong> - For data clustering</li>
            </ul>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Utilities</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Data splitting (train/test split)</li>
              <li>• Evaluation metrics (accuracy, R², MSE)</li>
              <li>• Distance functions</li>
              <li>• Data normalization</li>
              <li>• Confusion matrix</li>
            </ul>
          </div>
        </div>

        {/* Installation */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">Installation</h2>
        
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">From PyPI (when published)</h3>
        <div className="bg-gray-900 rounded-lg p-4 mb-6 relative group">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
            <Copy className="h-4 w-4" />
          </button>
          <pre className="text-sm text-gray-300"><code>pip install vishuml</code></pre>
        </div>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">From Source</h3>
        <div className="bg-gray-900 rounded-lg p-4 mb-8 relative group">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
            <Copy className="h-4 w-4" />
          </button>
          <pre className="text-sm text-gray-300"><code>{`git clone https://github.com/vishuRizz/vishuml.git
cd vishuml
pip install -e .`}</code></pre>
        </div>

        {/* Quick Start */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">Quick Start</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                🚀 Works with pandas DataFrames (Just like sklearn!)
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                You can use VishuML exactly like sklearn - load your CSV data into pandas and start training models immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-8 relative group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">pandas DataFrame Example</h3>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto"><code>{`import pandas as pd
from vishuml import LinearRegression, LogisticRegression
from vishuml.utils import train_test_split, r2_score, accuracy_score

# Load your CSV data (just like sklearn!)
df = pd.read_csv('your_data.csv')
X = df[['feature1', 'feature2', 'feature3']]  # Select features
y = df['target']                               # Select target

# Train-test split (works with DataFrames!)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model (accepts DataFrames!)
model = LinearRegression()
model.fit(X_train, y_train)  # DataFrame input!

# Make predictions (works with DataFrames!)
predictions = model.predict(X_test)
score = model.score(X_test, y_test)
print(f"R² Score: {score:.4f}")

# Classification Example with real data
from vishuml import datasets as ds
X, y = ds.load_iris()

# Convert to DataFrame for realistic workflow
iris_df = pd.DataFrame(X, columns=['sepal_length', 'sepal_width', 'petal_length', 'petal_width'])
iris_df['species'] = y

# sklearn-like feature selection
features = iris_df[['sepal_length', 'sepal_width', 'petal_length', 'petal_width']]
target = (iris_df['species'] == 0).astype(int)  # Binary classification

X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.3)

classifier = LogisticRegression()
classifier.fit(X_train, y_train)  # DataFrame input!
accuracy = classifier.score(X_test, y_test)
print(f"Accuracy: {accuracy:.4f}")`}</code></pre>
        </div>

        {/* Hint boxes like in the image */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                This is a basic hint Title
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Head over to the <Link href="/docs/quickstart" className="underline hover:no-underline">Desktop Kit Docs</Link> to get the scoop on what is in the download and how to use icons. Also we can add more words.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-red-900 dark:text-red-100 mb-2">
                This is a alarming hint Title
              </h3>
              <p className="text-red-800 dark:text-red-200 mb-3">
                You can also put all the Lineicons files and folders inside a folder. That way you will have to add the folder name before the lineicons.css file when linking it.
              </p>
              <p className="text-red-800 dark:text-red-200">
                You can also put all the Lineicons files and folders inside a folder.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="mr-2">←</span>
            <span>Prev.</span>
            <span className="ml-2">Loading CSS Locally</span>
          </div>
          
          <Link 
            href="/docs/installation"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Using CDN</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Table of contents */}
      <aside className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden xl:block w-64">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">On This Page</h3>
          <nav className="space-y-2">
            <a href="#features" className="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Features</a>
            <a href="#usage" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Usage</a>
            <a href="#examples" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Examples</a>
          </nav>
          
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Questions?</h4>
            <div className="space-y-2">
              <a href="#faq" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">FAQ</a>
              <a href="#privacy" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Privacy Policy</a>
            </div>
          </div>
          
          <button className="mt-8 flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <span className="mr-2">Scroll To Top</span>
            <ArrowRight className="h-4 w-4 transform -rotate-90" />
          </button>
        </div>
      </aside>
    </div>
  );
}
