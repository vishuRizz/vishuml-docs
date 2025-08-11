"use client"
import Link from "next/link";
import { ArrowRight, BarChart3, Settings, AlertCircle, LineChart, Play } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function LinearRegressionPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/supervised" className="hover:text-gray-700 dark:hover:text-gray-200">Supervised Learning</Link>
        <span>/</span>
        <span>Linear Regression</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Linear Regression
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Linear regression fits a linear model with coefficients to minimize the residual sum of squares 
          between the observed targets and the targets predicted by the linear approximation.
        </p>

        {/* Overview */}
        <section id="overview">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
          <InfoBox
            type="info"
            title="When to use Linear Regression"
            icon={BarChart3}
          >
            <ul className="space-y-1">
              <li>• Predicting continuous target values</li>
              <li>• Understanding linear relationships between features and target</li>
              <li>• When you need interpretable coefficients</li>
              <li>• As a baseline model for regression tasks</li>
            </ul>
          </InfoBox>

          <InfoBox
            type="success"
            title="Interactive Visualization"
            icon={LineChart}
          >
            <p className="mb-3">
              VishuML provides powerful visualization tools to help you understand the learning process.
            </p>
            <Link 
              href="/docs/supervised/linear-regression/visualization"
              className="inline-flex items-center text-green-700 dark:text-green-300 hover:underline"
            >
              <Play className="h-4 w-4 mr-1" />
              View Visualization Guide
            </Link>
          </InfoBox>
        </div>
        </section>

        {/* Mathematical Background */}
        <section id="mathematical-background">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Mathematical Background
          </h2>
        
        <p className="mb-6">
          Linear regression assumes a linear relationship between the input features X and the target y:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <div className="text-center">
            <code className="text-lg">y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ + ε</code>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>Where:</p>
            <ul className="mt-2 space-y-1">
              <li>• <strong>y</strong>: target variable</li>
              <li>• <strong>x₁, x₂, ..., xₚ</strong>: input features</li>
              <li>• <strong>β₀</strong>: intercept term</li>
              <li>• <strong>β₁, β₂, ..., βₚ</strong>: coefficients</li>
              <li>• <strong>ε</strong>: error term</li>
            </ul>
          </div>
        </div>

        <p className="mb-8">
          The goal is to find the coefficients that minimize the sum of squared residuals (ordinary least squares).
        </p>
        </section>

        {/* API Reference */}
        <section id="api-reference">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            API Reference
          </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            class LinearRegression
          </h3>
          
          <CodeBlock
            title="LinearRegression Class"
            code={`LinearRegression(
    fit_intercept=True,
    use_gradient_descent=False,
    learning_rate=0.01,
    max_iterations=1000,
    tolerance=1e-8,
    normalize=True,
    patience=5
)`}
          />

          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Parameters</h4>
          <div className="space-y-4 text-sm">
            <div>
              <strong className="text-gray-900 dark:text-white">fit_intercept</strong> <em className="text-gray-500">bool, default=True</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Whether to calculate the intercept for this model.</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">use_gradient_descent</strong> <em className="text-gray-500">bool, default=False</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">When True, fits using gradient descent; when False, uses normal equation.</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">learning_rate</strong> <em className="text-gray-500">float, default=0.01</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Learning rate for gradient descent (only used when use_gradient_descent=True).</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">max_iterations</strong> <em className="text-gray-500">int, default=1000</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Maximum number of iterations for gradient descent.</p>
            </div>
          </div>
        </div>
        </section>

        {/* Basic Usage */}
        <section id="basic-usage">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Basic Usage
          </h2>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Simple Example</h3>
        <CodeBlock
          title="Simple Example"
          code={`import numpy as np
from vishuml import LinearRegression
from vishuml.utils import train_test_split, r2_score

# Generate sample data
np.random.seed(42)
X = np.random.randn(100, 3)
true_coeffs = [1.5, -2.0, 1.0]
y = X @ true_coeffs + np.random.randn(100) * 0.1

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate model
r2 = model.score(X_test, y_test)
print(f"R² Score: {r2:.4f}")
print(f"Coefficients: {model.weights}")
print(f"Intercept: {model.intercept:.4f}")`}
        />

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Using pandas DataFrames</h3>
        <CodeBlock
          title="Using pandas DataFrames"
          code={`import pandas as pd
from vishuml import LinearRegression
from vishuml.utils import train_test_split

# Load data (sklearn-compatible!)
df = pd.read_csv('housing_data.csv')
X = df[['sqft', 'bedrooms', 'bathrooms', 'age']]
y = df['price']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)  # Works with DataFrames!

# Evaluate
score = model.score(X_test, y_test)
print(f"Model R² Score: {score:.4f}")

# Feature importance (coefficients)
feature_importance = dict(zip(X.columns, model.weights))
print("Feature Importance:")
for feature, coeff in feature_importance.items():
    print(f"  {feature}: {coeff:.4f}")`}
        />
        </section>

        {/* Advanced Usage */}
        <section id="advanced-usage">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Advanced Usage
          </h2>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Gradient Descent vs Normal Equation</h3>
        <CodeBlock
          title="Gradient Descent vs Normal Equation"
          code={`from vishuml.linear_regression import compare_methods

# Compare both methods
results = compare_methods(
    X_train, y_train,
    X_test=X_test, y_test=y_test,
    learning_rate=0.01,
    max_iterations=1000,
    return_report=True
)

print(results)  # Detailed comparison report`}
        />

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Custom Training Parameters</h3>
        <CodeBlock
          title="Custom Training Parameters"
          code={`# Using gradient descent with custom parameters
model_gd = LinearRegression(
    use_gradient_descent=True,
    learning_rate=0.01,
    max_iterations=5000,
    tolerance=1e-10,
    normalize=True,
    patience=10
)

model_gd.fit(X_train, y_train)

# Check convergence
print(f"Converged: {model_gd._converged}")
print(f"Effective learning rate: {model_gd._effective_learning_rate}")
print(f"Training iterations: {len(model_gd._fit_history)}")`}
        />
        </section>

        {/* Methods */}
        <section id="methods">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Methods
          </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              fit(X, y)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Fit linear model to training data.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: array-like or DataFrame, training features<br />
              <code>y</code>: array-like or Series, training targets<br /><br />
              <strong>Returns:</strong> self
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              predict(X)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Predict using the linear model.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: array-like or DataFrame, samples to predict<br /><br />
              <strong>Returns:</strong> ndarray, predicted values
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              score(X, y)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Return the coefficient of determination R² of the prediction.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: array-like or DataFrame, test samples<br />
              <code>y</code>: array-like or Series, true values<br /><br />
              <strong>Returns:</strong> float, R² score
            </div>
          </div>
        </div>
        </section>

        {/* Tips and Warnings */}
        <section id="best-practices">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Tips & Best Practices
          </h2>

        <div className="space-y-6 mb-8">
          <InfoBox
            type="success"
            title="Performance Tips"
            icon={Settings}
          >
            <ul className="space-y-1">
              <li>• Use normal equation (default) for small datasets (&lt; 10,000 samples)</li>
              <li>• Use gradient descent for large datasets or when memory is limited</li>
              <li>• Feature scaling improves gradient descent convergence</li>
              <li>• Check for multicollinearity in your features</li>
            </ul>
          </InfoBox>

          <InfoBox
            type="warning"
            title="Common Issues"
            icon={AlertCircle}
          >
            <ul className="space-y-1">
              <li>• Linear regression assumes linear relationships - check with scatter plots</li>
              <li>• Outliers can significantly affect results</li>
              <li>• High multicollinearity can make coefficients unstable</li>
              <li>• Feature scaling is important for gradient descent</li>
            </ul>
          </InfoBox>
        </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/quickstart"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Quick Start</span>
          </Link>
          
          <Link 
            href="/docs/supervised/logistic-regression"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Logistic Regression</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
