"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Settings, AlertCircle, LineChart, Brain, Database, Workflow } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function DataSplittingPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/utils" className="hover:text-gray-700 dark:hover:text-gray-200">Utilities</Link>
        <span>/</span>
        <span>Data Splitting</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Data Splitting Utilities
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML provides robust data splitting utilities to help you properly evaluate your machine learning models.
          These utilities ensure proper separation of training and testing data while maintaining data distribution.
        </p>

        {/* Train Test Split */}
        <section id="train-test-split">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Train Test Split
          </h2>

          <p className="mb-6">
            The <code>train_test_split</code> function splits arrays or matrices into random train and test subsets:
          </p>

          <CodeBlock
            title="Train Test Split Example"
            code={`import numpy as np
from vishuml.utils import train_test_split

# Create sample data
X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
y = np.array([0, 1, 0, 1])

# Split data (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2,
    random_state=42  # For reproducibility
)

# Works with pandas too
import pandas as pd
df = pd.DataFrame({'feature1': [1, 2, 3, 4], 'feature2': [5, 6, 7, 8]})
target = pd.Series([0, 1, 0, 1])

X_train, X_test, y_train, y_test = train_test_split(df, target, test_size=0.2)`}
          />

          <InfoBox
            type="info"
            title="Key Features"
            icon={Settings}
          >
            <ul className="space-y-2">
              <li>• Supports numpy arrays and pandas DataFrames</li>
              <li>• Maintains sample distribution</li>
              <li>• Optional random state for reproducibility</li>
              <li>• Automatic handling of multi-dimensional data</li>
            </ul>
          </InfoBox>
        </section>

        {/* Cross Validation */}
        <section id="cross-validation" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Cross Validation
          </h2>

          <p className="mb-6">
            Cross validation helps assess model performance more robustly by using multiple train-test splits:
          </p>

          <CodeBlock
            title="Cross Validation Example"
            code={`from vishuml.utils import cross_validate

# Create model and data
model = LinearRegression()
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Perform 5-fold cross validation
scores = cross_validate(
    model, X, y,
    cv=5,  # Number of folds
    scoring='r2'  # Metric to use
)

print(f"Cross-validation scores: {scores}")
print(f"Mean CV score: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})")`}
          />

          <InfoBox
            type="warning"
            title="Important Considerations"
            icon={AlertCircle}
          >
            <ul className="space-y-2">
              <li>• Choose appropriate number of folds (typically 5 or 10)</li>
              <li>• Consider data size when selecting folds</li>
              <li>• Use stratified CV for imbalanced classification</li>
              <li>• Be aware of computational costs</li>
            </ul>
          </InfoBox>
        </section>

        {/* Stratified Split */}
        <section id="stratified-split" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Stratified Split
          </h2>

          <p className="mb-6">
            Stratified splitting maintains the percentage of samples for each class in the splits:
          </p>

          <CodeBlock
            title="Stratified Split Example"
            code={`from vishuml.utils import stratified_split

# Imbalanced classification data
X = np.random.randn(100, 2)
y = np.array([0] * 90 + [1] * 10)  # Imbalanced classes

# Stratified split preserves class distribution
X_train, X_test, y_train, y_test = stratified_split(
    X, y,
    test_size=0.2,
    random_state=42
)

# Check class distribution
print("Training set distribution:", np.bincount(y_train) / len(y_train))
print("Test set distribution:", np.bincount(y_test) / len(y_test))`}
          />

          <InfoBox
            type="success"
            title="When to Use"
            icon={Brain}
          >
            <ul className="space-y-2">
              <li>• Classification with imbalanced classes</li>
              <li>• Small dataset with rare classes</li>
              <li>• When preserving class distribution is critical</li>
              <li>• Multi-class classification problems</li>
            </ul>
          </InfoBox>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/utils"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Utilities</span>
          </Link>
          
          <Link 
            href="/docs/utils/metrics"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Metrics</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
