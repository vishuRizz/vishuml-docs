import Link from "next/link";
import { ArrowRight, Copy, Play, CheckCircle } from "lucide-react";

export default function QuickStartPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Introduction</Link>
        <span>/</span>
        <span>Quick Start</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Quick Start Guide
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Get up and running with VishuML in minutes. This guide will walk you through the basics 
          of using VishuML for machine learning tasks.
        </p>

        {/* pandas Compatible Highlight */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                🚀 Works with pandas DataFrames (Just like sklearn!)
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                VishuML follows the same API patterns as scikit-learn, making it easy to integrate 
                into your existing ML workflows. Load CSV data with pandas and start training immediately!
              </p>
            </div>
          </div>
        </div>

        {/* Step 1: Installation */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Step 1: Installation
        </h2>
        
        <p className="mb-4">
          First, install VishuML using pip:
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-8 relative group">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
            <Copy className="h-4 w-4" />
          </button>
          <pre className="text-sm text-gray-300"><code>pip install vishuml</code></pre>
        </div>

        {/* Step 2: Basic Example */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Step 2: Your First Model
        </h2>
        
        <p className="mb-4">
          Let us start with a simple linear regression example:
        </p>

        <div className="bg-gray-900 rounded-lg p-6 mb-8 relative group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Simple Linear Regression</h3>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto"><code>{`import numpy as np
from vishuml import LinearRegression

# Create simple dataset
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Make predictions
new_data = np.array([[6], [7]])
predictions = model.predict(new_data)
print(f"Predictions: {predictions}")  # Should be close to [12, 14]

# Check model performance
score = model.score(X, y)
print(f"R² Score: {score:.4f}")  # Should be close to 1.0`}</code></pre>
        </div>

        {/* Step 3: Real Data with pandas */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Step 3: Working with Real Data
        </h2>
        
        <p className="mb-4">
          Here is how to use VishuML with real CSV data using pandas (just like sklearn):
        </p>

        <div className="bg-gray-900 rounded-lg p-6 mb-8 relative group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">pandas DataFrame Example</h3>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto"><code>{`import pandas as pd
from vishuml import LinearRegression
from vishuml.utils import train_test_split

# Load your data (sklearn-compatible workflow!)
df = pd.read_csv('your_data.csv')

# Select features and target (just like sklearn)
X = df[['feature1', 'feature2', 'feature3']]
y = df['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model (works with DataFrames!)
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate model
train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)

print(f"Training R²: {train_score:.4f}")
print(f"Testing R²: {test_score:.4f}")

# Feature importance
feature_importance = dict(zip(X.columns, model.weights))
print("\\nFeature Importance:")
for feature, coeff in feature_importance.items():
    print(f"  {feature}: {coeff:.4f}")`}</code></pre>
        </div>

        {/* Step 4: Classification */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Step 4: Classification Example
        </h2>
        
        <p className="mb-4">
          Let us try a classification task using the built-in iris dataset:
        </p>

        <div className="bg-gray-900 rounded-lg p-6 mb-8 relative group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Classification with Iris Dataset</h3>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto"><code>{`import pandas as pd
from vishuml import LogisticRegression, KNearestNeighbors
from vishuml.utils import train_test_split, accuracy_score
from vishuml import datasets as ds

# Load iris dataset
X, y = ds.load_iris()

# Create DataFrame for easier manipulation
iris_df = pd.DataFrame(X, columns=[
    'sepal_length', 'sepal_width', 
    'petal_length', 'petal_width'
])
iris_df['species'] = y

# Binary classification: setosa vs others
features = iris_df[['sepal_length', 'sepal_width', 'petal_length', 'petal_width']]
target = (iris_df['species'] == 0).astype(int)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    features, target, test_size=0.3, random_state=42
)

# Try different algorithms
models = {
    'Logistic Regression': LogisticRegression(learning_rate=0.1, max_iterations=1000),
    'K-Nearest Neighbors': KNearestNeighbors(k=3, task_type='classification')
}

for name, model in models.items():
    # Train model
    model.fit(X_train, y_train)
    
    # Evaluate
    accuracy = model.score(X_test, y_test)
    print(f"{name}: {accuracy:.4f} accuracy")`}</code></pre>
        </div>

        {/* Step 5: Clustering */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Step 5: Unsupervised Learning
        </h2>
        
        <p className="mb-4">
          VishuML also supports unsupervised learning. Here is a K-Means clustering example:
        </p>

        <div className="bg-gray-900 rounded-lg p-6 mb-8 relative group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">K-Means Clustering</h3>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto"><code>{`import numpy as np
from vishuml import KMeans

# Generate sample clustered data
np.random.seed(42)
cluster1 = np.random.randn(30, 2) + [2, 2]
cluster2 = np.random.randn(30, 2) + [-2, -2]
cluster3 = np.random.randn(30, 2) + [2, -2]
X = np.vstack([cluster1, cluster2, cluster3])

# Perform clustering
kmeans = KMeans(k=3, random_state=42)
labels = kmeans.fit_predict(X)

print(f"Cluster labels: {labels}")
print(f"Inertia (WCSS): {kmeans.inertia:.2f}")
print(f"Number of iterations: {kmeans.n_iterations}")
print(f"Cluster centers:\\n{kmeans.centroids}")

# Predict cluster for new data
new_points = np.array([[0, 0], [3, 3]])
new_labels = kmeans.predict(new_points)
print(f"New point predictions: {new_labels}")`}</code></pre>
        </div>

        {/* Available Algorithms */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Available Algorithms
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Supervised Learning</h3>
            <div className="space-y-3 text-sm">
              <div>
                <Link href="/docs/supervised/linear-regression" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  LinearRegression
                </Link>
                <p className="text-gray-600 dark:text-gray-400">Continuous target prediction</p>
              </div>
              <div>
                <Link href="/docs/supervised/logistic-regression" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  LogisticRegression
                </Link>
                <p className="text-gray-600 dark:text-gray-400">Binary classification</p>
              </div>
              <div>
                <Link href="/docs/supervised/knn" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  KNearestNeighbors
                </Link>
                <p className="text-gray-600 dark:text-gray-400">Classification & regression</p>
              </div>
              <div>
                <Link href="/docs/supervised/svm" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  SupportVectorMachine
                </Link>
                <p className="text-gray-600 dark:text-gray-400">Binary classification with kernels</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Unsupervised & Utils</h3>
            <div className="space-y-3 text-sm">
              <div>
                <Link href="/docs/unsupervised/kmeans" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  KMeans
                </Link>
                <p className="text-gray-600 dark:text-gray-400">Data clustering</p>
              </div>
              <div>
                <Link href="/docs/utils/data-splitting" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  train_test_split
                </Link>
                <p className="text-gray-600 dark:text-gray-400">Data splitting utilities</p>
              </div>
              <div>
                <Link href="/docs/utils/metrics" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Evaluation Metrics
                </Link>
                <p className="text-gray-600 dark:text-gray-400">accuracy_score, r2_score, MSE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Next Steps
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Ready to dive deeper?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/docs/supervised/linear-regression"
              className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <Play className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Explore Algorithms</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Detailed algorithm documentation</div>
              </div>
            </Link>
            <Link 
              href="/docs/examples/basic"
              className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <Play className="h-4 w-4 text-green-600 dark:text-green-400 mr-3" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">More Examples</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Real-world usage examples</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/installation"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Installation</span>
          </Link>
          
          <Link 
            href="/docs/supervised/linear-regression"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Linear Regression</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
