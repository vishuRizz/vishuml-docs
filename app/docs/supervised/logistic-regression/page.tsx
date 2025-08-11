"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Settings, AlertCircle, LineChart, Play, Zap, Brain } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function LogisticRegressionPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/supervised" className="hover:text-gray-700 dark:hover:text-gray-200">Supervised Learning</Link>
        <span>/</span>
        <span>Logistic Regression</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Logistic Regression
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Logistic regression is a fundamental classification algorithm that uses the logistic function 
          to model the probability of binary outcomes. VishuML's implementation includes advanced features 
          like visualization, model comparison, and enhanced training capabilities.
        </p>

        {/* Overview */}
        <section id="overview">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
          <InfoBox
            type="info"
            title="When to use Logistic Regression"
            icon={BarChart3}
          >
            <ul className="space-y-1">
              <li>• Binary classification tasks</li>
              <li>• Probability estimation</li>
              <li>• When you need interpretable coefficients</li>
              <li>• As a baseline for classification</li>
              <li>• Medical diagnosis, spam detection, etc.</li>
            </ul>
          </InfoBox>

          <InfoBox
            type="success"
            title="Advanced Features"
            icon={Zap}
          >
            <ul className="space-y-1">
              <li>• Interactive visualizations</li>
              <li>• Model comparison tools</li>
              <li>• Feature normalization</li>
              <li>• Early stopping</li>
              <li>• Learning rate auto-tuning</li>
            </ul>
          </InfoBox>
        </div>
        </section>

        {/* Mathematical Background */}
        <section id="mathematical-background">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Mathematical Background
          </h2>
        
        <p className="mb-6">
          Logistic regression models the probability of a binary outcome using the logistic function:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <div className="text-center">
            <code className="text-lg">P(y=1|x) = σ(β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ)</code>
            <br />
            <code className="text-lg">where σ(z) = 1 / (1 + e⁻ᶻ)</code>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>Where:</p>
            <ul className="mt-2 space-y-1">
              <li>• <strong>P(y=1|x)</strong>: Probability of class 1 given features x</li>
              <li>• <strong>σ(z)</strong>: Sigmoid/logistic function</li>
              <li>• <strong>β₀</strong>: Intercept term</li>
              <li>• <strong>β₁, β₂, ..., βₚ</strong>: Feature coefficients</li>
            </ul>
          </div>
        </div>

        <p className="mb-8">
          The model uses gradient descent to minimize the binary cross-entropy loss function:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <div className="text-center">
            <code className="text-lg">L = -[y log(ŷ) + (1-y) log(1-ŷ)]</code>
          </div>
        </div>
        </section>

        {/* API Reference */}
        <section id="api-reference">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            API Reference
          </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            class LogisticRegression
          </h3>
          
          <CodeBlock
            title="LogisticRegression Class"
            code={`LogisticRegression(
    learning_rate=0.01,
    max_iterations=1000,
    fit_intercept=True,
    tolerance=1e-8,
    normalize=True,
    patience=5
)`}
          />

          <h4 className="font-medium text-gray-900 dark:text-white mb-3 mt-6">Parameters</h4>
          <div className="space-y-4 text-sm">
            <div>
              <strong className="text-gray-900 dark:text-white">learning_rate</strong> <em className="text-gray-500">float, default=0.01</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Learning rate for gradient descent optimization. Auto-tuned if invalid.</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">max_iterations</strong> <em className="text-gray-500">int, default=1000</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Maximum number of gradient descent iterations.</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">fit_intercept</strong> <em className="text-gray-500">bool, default=True</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Whether to calculate the intercept for this model.</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">tolerance</strong> <em className="text-gray-500">float, default=1e-8</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Early stopping tolerance for gradient descent.</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">normalize</strong> <em className="text-gray-500">bool, default=True</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Whether to normalize features for better convergence.</p>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">patience</strong> <em className="text-gray-500">int, default=5</em>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Number of iterations to wait for improvement before early stopping.</p>
            </div>
          </div>
        </div>
        </section>

        {/* Basic Usage */}
        <section id="basic-usage">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Basic Usage
          </h2>

        <CodeBlock
          title="Simple Example"
          code={`import numpy as np
from vishuml import LogisticRegression
from vishuml.utils import train_test_split

# Generate sample data
X = np.array([[1, 2], [2, 3], [3, 4], [4, 5], [1, 1], [2, 2], [3, 3], [4, 4]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create and train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)
probabilities = model.predict_proba(X_test)

# Evaluate model
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy:.4f}")
print(f"Probabilities:\\n{probabilities}")

# Check training details
print(f"Converged: {model._converged}")
print(f"Effective learning rate: {model._effective_learning_rate}")
print(f"Training iterations: {len(model._fit_history)}")`}
        />

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 mt-8">Using pandas DataFrames</h3>
        <CodeBlock
          title="Using pandas DataFrames"
          code={`import pandas as pd
from vishuml import LogisticRegression
from vishuml.utils import train_test_split

# Load data (sklearn-compatible!)
df = pd.read_csv('customer_data.csv')
X = df[['age', 'income', 'purchase_history']]
y = df['will_purchase']  # Binary target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model with custom parameters
model = LogisticRegression(
    learning_rate=0.01,
    normalize=True,
    patience=10
)
model.fit(X_train, y_train)  # Works with DataFrames!

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Model Accuracy: {accuracy:.4f}")

# Feature importance (coefficients)
feature_importance = dict(zip(X.columns, model.weights))
print("\\nFeature Importance:")
for feature, coeff in feature_importance.items():
    print(f"  {feature}: {coeff:.4f}")

# Get model parameters
params = model.get_params()
print(f"\\nModel converged: {params['converged']}")
print(f"Effective learning rate: {params['effective_learning_rate']:.6f}")`}
        />
        </section>

        {/* Advanced Usage */}
        <section id="advanced-usage">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
            Advanced Usage
          </h2>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Model Comparison</h3>
        <CodeBlock
          title="Comparing Different Configurations"
          code={`from vishuml.logistic_regression import compare_methods

# Define models to compare
models = [
    {'name': 'Default', 'params': {}},
    {'name': 'High LR', 'params': {'learning_rate': 0.1}},
    {'name': 'Low LR', 'params': {'learning_rate': 0.001}},
    {'name': 'No Intercept', 'params': {'fit_intercept': False}},
    {'name': 'No Normalization', 'params': {'normalize': False}},
    {'name': 'High Patience', 'params': {'patience': 20}}
]

# Compare models
results = compare_methods(
    X_train, y_train,
    X_test=X_test,
    y_test=y_test,
    models=models,
    return_report=True
)

print(results)  # Detailed comparison report`}
        />

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 mt-8">Interactive Visualization</h3>
        <CodeBlock
          title="Visualization Example"
          code={`# Create interactive visualization
viz = model.visualize_lr(
    X_train, y_train,
    animation_interval=200,
    save_animation=True,
    animation_path='logistic_animation.gif'
)

# The visualization includes:
# - Decision boundary evolution
# - Loss curve
# - Final equation

# Compare learning rates
comparison = model.visualize_lr(
    X_train, y_train,
    compare_lr=True,
    learning_rates=[0.001, 0.01, 0.1, 0.5]
)

# Access comparison results
results = comparison['results']
for lr, result in results.items():
    print(f"Learning rate {lr}:")
    print(f"  Converged: {result['converged']}")
    print(f"  Final loss: {result['history'][-1]['loss']:.6f}")`}
        />

        <InfoBox
          type="info"
          title="Visualization Features"
          icon={LineChart}
        >
          <p className="mb-3">
            The visualization tools provide:
          </p>
          <ul className="space-y-2">
            <li>• <strong>Decision Boundary Animation</strong>: Watch the boundary evolve during training</li>
            <li>• <strong>Loss Curve</strong>: Monitor binary cross-entropy loss over iterations</li>
            <li>• <strong>Learning Rate Comparison</strong>: Compare different learning rates</li>
            <li>• <strong>Model Equation</strong>: Display final coefficients and intercept</li>
            <li>• <strong>Multiple Features Support</strong>: 2D projection for high-dimensional data</li>
          </ul>
        </InfoBox>

        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 mt-8">Custom Training Parameters</h3>
        <CodeBlock
          title="Advanced Training Setup"
          code={`# Using advanced parameters
model = LogisticRegression(
    learning_rate=0.01,
    max_iterations=5000,
    tolerance=1e-10,
    normalize=True,
    patience=10
)

model.fit(X_train, y_train)

# Check convergence details
print(f"Converged: {model._converged}")
print(f"Effective learning rate: {model._effective_learning_rate}")
print(f"Training iterations: {len(model._fit_history)}")

# Analyze training history
history = model._fit_history
final_loss = history[-1]['loss']
initial_loss = history[0]['loss']
print(f"Loss reduction: {initial_loss:.6f} → {final_loss:.6f}")

# Get detailed parameters
params = model.get_params()
print("\\nModel Parameters:")
for param, value in params.items():
    if param not in ['weights', 'intercept']:
        print(f"  {param}: {value}")`}
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
              Fit logistic regression model to training data using gradient descent.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: array-like or DataFrame, training features<br />
              <code>y</code>: array-like or Series, binary target (0/1)<br /><br />
              <strong>Returns:</strong> self<br /><br />
              <strong>Features:</strong><br />
              • Automatic feature normalization<br />
              • Learning rate auto-tuning<br />
              • Early stopping with patience<br />
              • Training history tracking
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              predict(X)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Predict class labels for samples in X.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: array-like or DataFrame, samples to predict<br /><br />
              <strong>Returns:</strong> ndarray, predicted class labels (0/1)<br /><br />
              <strong>Threshold:</strong> Uses 0.5 as decision threshold
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              predict_proba(X)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Predict class probabilities for samples in X.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: array-like or DataFrame, samples to predict<br /><br />
              <strong>Returns:</strong> ndarray, predicted probabilities [0-1]<br /><br />
              <strong>Note:</strong> Returns raw sigmoid outputs
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              score(X, y)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Return the mean accuracy on the given test data and labels.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: array-like or DataFrame, test samples<br />
              <code>y</code>: array-like or Series, true labels<br /><br />
              <strong>Returns:</strong> float, mean accuracy
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              visualize_lr(X, y, **kwargs)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Create interactive visualizations of the model's learning process.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Parameters:</strong><br />
              <code>X</code>: Features matrix<br />
              <code>y</code>: Target vector<br />
              <code>compare_lr</code>: Compare learning rates<br />
              <code>learning_rates</code>: List of learning rates to compare<br />
              <code>animation_interval</code>: Frame delay in milliseconds<br />
              <code>save_animation</code>: Save as GIF<br /><br />
              <strong>Returns:</strong> dict with figure, animation, and axes
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              get_params()
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get all parameters and training information.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <strong>Returns:</strong> dict with all model parameters<br /><br />
              <strong>Includes:</strong><br />
              • Model parameters (learning_rate, max_iterations, etc.)<br />
              • Training results (weights, intercept)<br />
              • Convergence info (converged, effective_learning_rate)
            </div>
          </div>
        </div>
        </section>

        {/* Tips and Warnings */}
        <section id="tips-best-practices">
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
              <li>• Use feature normalization for better convergence</li>
              <li>• Start with default learning rate and adjust based on convergence</li>
              <li>• Monitor loss curve for convergence issues</li>
              <li>• Use early stopping to prevent overfitting</li>
              <li>• Check convergence status after training</li>
              <li>• Compare different configurations using compare_methods</li>
            </ul>
          </InfoBox>

          <InfoBox
            type="warning"
            title="Common Issues"
            icon={AlertCircle}
          >
            <ul className="space-y-1">
              <li>• Class imbalance can affect model performance</li>
              <li>• High multicollinearity can make coefficients unstable</li>
              <li>• Learning rate too high can cause divergence</li>
              <li>• Non-normalized features can slow convergence</li>
              <li>• Insufficient patience can cause premature stopping</li>
            </ul>
          </InfoBox>

          <InfoBox
            type="info"
            title="Advanced Features"
            icon={Brain}
          >
            <ul className="space-y-1">
              <li>• Automatic learning rate tuning for stability</li>
              <li>• Gradient clipping to prevent explosion</li>
              <li>• Training history tracking for analysis</li>
              <li>• Interactive visualizations for understanding</li>
              <li>• Model comparison tools for optimization</li>
            </ul>
          </InfoBox>
        </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/supervised/linear-regression"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Linear Regression</span>
          </Link>
          
          <Link 
            href="/docs/supervised/logistic-regression/visualization"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Visualization Guide</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
