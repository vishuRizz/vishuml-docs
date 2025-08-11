"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Settings, AlertCircle, LineChart, Brain, Database, Workflow } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function MetricsPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/utils" className="hover:text-gray-700 dark:hover:text-gray-200">Utilities</Link>
        <span>/</span>
        <span>Metrics</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Model Evaluation Metrics
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML provides a comprehensive set of metrics to evaluate machine learning models.
          These include metrics for classification, regression, and clustering tasks.
        </p>

        {/* Classification Metrics */}
        <section id="classification-metrics">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Classification Metrics
          </h2>

          <p className="mb-6">
            Essential metrics for evaluating classification models:
          </p>

          <CodeBlock
            title="Classification Metrics Example"
            code={`import numpy as np
from vishuml.utils import accuracy_score, confusion_matrix

# Sample predictions
y_true = np.array([0, 1, 1, 0, 1, 0])
y_pred = np.array([0, 1, 0, 0, 1, 1])

# Calculate accuracy
acc = accuracy_score(y_true, y_pred)
print(f"Accuracy: {acc:.2f}")  # 0.67

# Generate confusion matrix
cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:")
print(cm)
# array([[2, 1],
#        [1, 2]])`}
          />

          <InfoBox
            type="info"
            title="Available Metrics"
            icon={BarChart2}
          >
            <ul className="space-y-2">
              <li>• <strong>accuracy_score</strong>: Overall prediction accuracy</li>
              <li>• <strong>confusion_matrix</strong>: Detailed prediction breakdown</li>
              <li>• <strong>precision_score</strong>: Positive predictive value</li>
              <li>• <strong>recall_score</strong>: True positive rate</li>
              <li>• <strong>f1_score</strong>: Harmonic mean of precision and recall</li>
            </ul>
          </InfoBox>
        </section>

        {/* Regression Metrics */}
        <section id="regression-metrics" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Regression Metrics
          </h2>

          <p className="mb-6">
            Metrics for evaluating regression model performance:
          </p>

          <CodeBlock
            title="Regression Metrics Example"
            code={`from vishuml.utils import r2_score, mean_squared_error

# Sample predictions
y_true = np.array([3, -0.5, 2, 7])
y_pred = np.array([2.5, 0.0, 2, 8])

# Calculate R² score
r2 = r2_score(y_true, y_pred)
print(f"R² Score: {r2:.3f}")  # 0.949

# Calculate MSE
mse = mean_squared_error(y_true, y_pred)
print(f"Mean Squared Error: {mse:.3f}")  # 0.375`}
          />

          <InfoBox
            type="success"
            title="Regression Metrics"
            icon={LineChart}
          >
            <ul className="space-y-2">
              <li>• <strong>R² Score</strong>: Coefficient of determination</li>
              <li>• <strong>MSE</strong>: Mean squared error</li>
              <li>• <strong>RMSE</strong>: Root mean squared error</li>
              <li>• <strong>MAE</strong>: Mean absolute error</li>
            </ul>
          </InfoBox>
        </section>

        {/* Clustering Metrics */}
        <section id="clustering-metrics" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Clustering Metrics
          </h2>

          <p className="mb-6">
            Metrics for evaluating clustering algorithms:
          </p>

          <CodeBlock
            title="Clustering Metrics Example"
            code={`from vishuml.utils import silhouette_score, inertia_score

# Sample data and cluster assignments
X = np.array([[1, 2], [1, 4], [1, 0],
              [4, 2], [4, 4], [4, 0]])
labels = np.array([0, 0, 0, 1, 1, 1])

# Calculate silhouette score
silhouette = silhouette_score(X, labels)
print(f"Silhouette Score: {silhouette:.3f}")

# Calculate inertia (within-cluster sum of squares)
inertia = inertia_score(X, labels)
print(f"Inertia: {inertia:.3f}")`}
          />

          <InfoBox
            type="warning"
            title="Clustering Evaluation"
            icon={Brain}
          >
            <ul className="space-y-2">
              <li>• <strong>Silhouette Score</strong>: Measure of cluster separation</li>
              <li>• <strong>Inertia</strong>: Within-cluster sum of squares</li>
              <li>• <strong>Calinski-Harabasz</strong>: Ratio of between to within-cluster dispersion</li>
              <li>• <strong>Davies-Bouldin</strong>: Average similarity between clusters</li>
            </ul>
          </InfoBox>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/utils/data-splitting"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Data Splitting</span>
          </Link>
          
          <Link 
            href="/docs/utils/preprocessing"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Preprocessing</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
