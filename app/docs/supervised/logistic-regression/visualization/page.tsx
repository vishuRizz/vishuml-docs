"use client";

import Link from "next/link";
import { ArrowRight, Play, BarChart2, Settings, AlertCircle, LineChart } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function LogisticRegressionVisualizationPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/supervised" className="hover:text-gray-700 dark:hover:text-gray-200">Supervised Learning</Link>
        <span>/</span>
        <Link href="/docs/supervised/logistic-regression" className="hover:text-gray-700 dark:hover:text-gray-200">Logistic Regression</Link>
        <span>/</span>
        <span>Visualization</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Logistic Regression Visualization
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML provides powerful visualization tools to help you understand how logistic regression works 
          and how different parameters affect the model's performance.
        </p>

        <InfoBox
          type="info"
          title="Interactive Visualizations"
          icon={LineChart}
        >
          <p>
            The visualization tools allow you to:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Watch the decision boundary evolve during training</li>
            <li>• Compare different learning rates</li>
            <li>• Visualize loss curves</li>
            <li>• See probability distributions</li>
          </ul>
        </InfoBox>

        {/* Basic Visualization */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Basic Visualization
        </h2>

        <p className="mb-6">
          Use the visualize_lr method to create interactive plots showing the model's learning process:
        </p>

        <CodeBlock
          title="Basic Visualization Example"
          code={`import numpy as np
from vishuml import LogisticRegression

# Generate sample data
X = np.array([
    [1, 1], [2, 2], [2, 1], [3, 3],
    [1, 2], [4, 3], [5, 4], [4, 5]
])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

# Create and train model
model = LogisticRegression(learning_rate=0.1)

# Create visualization
viz = model.visualize_lr(
    X, y,
    animation_interval=200,
    save_animation=True,
    animation_path='logistic_animation.gif'
)

# The visualization includes:
# - Decision boundary evolution
# - Loss curve
# - Final equation`}
        />

        <InfoBox
          type="success"
          title="Visualization Features"
          icon={BarChart2}
        >
          <p className="mb-3">
            The visualization includes three main components:
          </p>
          <ul className="space-y-2">
            <li>1. <strong>Decision Boundary Plot</strong>: Shows data points and animated decision boundary</li>
            <li>2. <strong>Loss Curve</strong>: Displays binary cross-entropy loss over iterations</li>
            <li>3. <strong>Equation Display</strong>: Shows final model coefficients and logistic function</li>
          </ul>
        </InfoBox>

        {/* Comparing Learning Rates */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Comparing Learning Rates
        </h2>

        <p className="mb-6">
          Compare how different learning rates affect the model's convergence:
        </p>

        <CodeBlock
          title="Learning Rate Comparison"
          code={`# Compare different learning rates
learning_rates = [0.001, 0.01, 0.1, 0.5]
comparison = model.visualize_lr(
    X, y,
    compare_lr=True,
    learning_rates=learning_rates,
    animation_interval=200
)

# Access comparison results
results = comparison['results']
for lr, result in results.items():
    print(f"Learning rate {lr}:")
    print(f"  Converged: {result['converged']}")
    print(f"  Final loss: {result['history'][-1]['loss']:.6f}")`}
        />

        <InfoBox
          type="warning"
          title="Learning Rate Selection"
          icon={Settings}
        >
          <ul className="space-y-2">
            <li>• Too high: May cause oscillation or divergence</li>
            <li>• Too low: Slow convergence and potential underfitting</li>
            <li>• Just right: Quick convergence to optimal decision boundary</li>
            <li>• Use visualization to find the sweet spot for your data</li>
          </ul>
        </InfoBox>

        {/* Model Comparison */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Model Comparison
        </h2>

        <p className="mb-6">
          Compare different logistic regression configurations:
        </p>

        <CodeBlock
          title="Model Comparison"
          code={`from vishuml.logistic_regression import compare_methods

# Define models to compare
models = [
    {'name': 'Default', 'params': {}},
    {'name': 'High LR', 'params': {'learning_rate': 0.1}},
    {'name': 'Low LR', 'params': {'learning_rate': 0.001}},
    {'name': 'No Intercept', 'params': {'fit_intercept': False}},
    {'name': 'No Normalization', 'params': {'normalize': False}}
]

# Compare models
results = compare_methods(
    X_train, y_train,
    X_test=X_test,
    y_test=y_test,
    models=models,
    return_report=True
)

print(results)  # Prints detailed comparison report`}
        />

        <InfoBox
          type="info"
          title="Comparison Metrics"
          icon={BarChart2}
        >
          <p className="mb-3">
            The comparison report includes:
          </p>
          <ul className="space-y-2">
            <li>• Training and test accuracy</li>
            <li>• Binary cross-entropy loss</li>
            <li>• Convergence status</li>
            <li>• Number of iterations</li>
            <li>• Effective learning rates</li>
          </ul>
        </InfoBox>

        {/* Multiple Features */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Visualizing Multiple Features
        </h2>

        <p className="mb-6">
          When working with multiple features, the visualization shows the projection on the first two features:
        </p>

        <CodeBlock
          title="Multiple Features Example"
          code={`# Multiple features example
X_multi = np.array([
    [1, 2, 0.5],
    [2, 3, 1.0],
    [3, 2, 1.5],
    [4, 5, 2.0],
    [1, 3, 0.8],
    [2, 4, 1.2],
    [3, 5, 1.8],
    [4, 2, 1.6]
])
y_multi = np.array([0, 0, 0, 0, 1, 1, 1, 1])

model = LogisticRegression()

# Visualize (will show projection on first two features)
viz = model.visualize_lr(X_multi, y_multi)

# The equation will show coefficients for all features
# but the plot shows the decision boundary in X₁-X₂ space`}
        />

        <InfoBox
          type="warning"
          title="Multiple Features Note"
          icon={AlertCircle}
        >
          <p>
            When visualizing models with multiple features, the decision boundary plot shows the 
            projection onto the first two features (X₁ and X₂), while using mean values for other 
            features. This provides an intuitive view of the decision boundary while still using 
            all features for prediction.
          </p>
        </InfoBox>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/supervised/logistic-regression"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Logistic Regression</span>
          </Link>
          
          <Link 
            href="/docs/supervised/knn"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">K-Nearest Neighbors</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
