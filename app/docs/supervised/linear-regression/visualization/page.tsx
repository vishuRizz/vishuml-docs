"use client"
import Link from "next/link";
import { ArrowRight, Play, BarChart2, Settings, AlertCircle, LineChart } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function LinearRegressionVisualizationPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/supervised" className="hover:text-gray-700 dark:hover:text-gray-200">Supervised Learning</Link>
        <span>/</span>
        <Link href="/docs/supervised/linear-regression" className="hover:text-gray-700 dark:hover:text-gray-200">Linear Regression</Link>
        <span>/</span>
        <span>Visualization</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Linear Regression Visualization
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML provides powerful visualization tools to help you understand how linear regression works 
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
            <li>• Watch the regression line evolve during training</li>
            <li>• Compare different learning rates</li>
            <li>• Visualize loss curves</li>
            <li>• See the final equation and coefficients</li>
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
from vishuml import LinearRegression

# Generate sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train model
model = LinearRegression(use_gradient_descent=True)
model.fit(X, y)

# Create visualization
viz = model.visualize_lr(X, y, animation_interval=200)

# The visualization includes:
# - Scatter plot with evolving regression line
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
            <li>1. <strong>Scatter Plot</strong>: Shows data points and animated regression line</li>
            <li>2. <strong>Loss Curve</strong>: Displays MSE loss over iterations</li>
            <li>3. <strong>Equation Display</strong>: Shows final model coefficients</li>
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
            <li>• Too high: May cause divergence or oscillation</li>
            <li>• Too low: Slow convergence</li>
            <li>• Just right: Quick convergence to optimal solution</li>
            <li>• Use visualization to find the sweet spot for your data</li>
          </ul>
        </InfoBox>

        {/* Customizing Visualizations */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Customizing Visualizations
        </h2>

        <p className="mb-6">
          The visualization tools offer various customization options:
        </p>

        <CodeBlock
          title="Customization Options"
          code={`# Customize visualization
viz = model.visualize_lr(
    X, y,
    # Animation settings
    animation_interval=200,  # milliseconds between frames
    n_iterations_display=5,  # number of iterations to show
    
    # Plot style
    figsize=(15, 10),
    style='whitegrid',
    palette='husl',
    
    # Save animation
    save_animation=True,
    animation_path='regression_animation.gif'
)

# Access plot components
fig = viz['figure']
axes = viz['axes']
animation = viz['animation']

# Further customize plots
axes['scatter'].set_title('Custom Title')
axes['loss'].set_ylabel('Custom Y Label')
axes['equation'].text.set_fontsize(14)`}
        />

        <InfoBox
          type="info"
          title="Visualization Parameters"
          icon={Settings}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Animation Settings</h4>
              <ul className="space-y-1">
                <li>• animation_interval: Frame delay in milliseconds</li>
                <li>• n_iterations_display: Number of iterations to show</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Style Options</h4>
              <ul className="space-y-1">
                <li>• style: Seaborn plot style ('whitegrid', 'darkgrid', etc.)</li>
                <li>• palette: Color palette for plots</li>
                <li>• figsize: Figure size as (width, height) tuple</li>
              </ul>
            </div>
          </div>
        </InfoBox>

        {/* Multiple Features */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">
          Visualizing Multiple Features
        </h2>

        <p className="mb-6">
          When working with multiple features, the visualization shows the projection on the first feature:
        </p>

        <CodeBlock
          title="Multiple Features Example"
          code={`# Multiple features example
X_multi = np.array([
    [1, 0.5],
    [2, 1.0],
    [3, 1.5],
    [4, 2.0],
    [5, 2.5]
])
y_multi = np.array([2, 4, 6, 8, 10])

model = LinearRegression(use_gradient_descent=True)
model.fit(X_multi, y_multi)

# Visualize (will show projection on first feature)
viz = model.visualize_lr(X_multi, y_multi)

# The equation will show coefficients for all features
# but the plot shows the relationship with X₁`}
        />

        <InfoBox
          type="warning"
          title="Multiple Features Note"
          icon={AlertCircle}
        >
          <p>
            When visualizing models with multiple features, the scatter plot shows the relationship 
            between the first feature (X₁) and the target, while the equation displays coefficients 
            for all features. This provides a simplified view of the model's behavior while still 
            showing the complete model parameters.
          </p>
        </InfoBox>

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
