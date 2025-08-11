"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Settings, AlertCircle, LineChart, Brain, Database, Workflow } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function UtilitiesPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <span>Utilities</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Data Preprocessing Utilities
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML provides a comprehensive set of data preprocessing utilities to help you prepare your data
          for machine learning tasks. These utilities include missing value handling, outlier detection,
          feature scaling, encoding, dimensionality reduction, and feature generation.
        </p>

        {/* Overview Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <InfoBox
            type="info"
            title="Data Cleaning"
            icon={Database}
          >
            <ul className="space-y-1">
              <li>• Handle missing values</li>
              <li>• Detect and remove outliers</li>
              <li>• Validate data types</li>
              <li>• Convert between formats</li>
            </ul>
          </InfoBox>

          <InfoBox
            type="success"
            title="Feature Engineering"
            icon={Workflow}
          >
            <ul className="space-y-1">
              <li>• Generate interaction features</li>
              <li>• Create polynomial features</li>
              <li>• Scale and normalize data</li>
              <li>• Encode categorical variables</li>
            </ul>
          </InfoBox>
        </div>

        {/* Missing Values */}
        <section id="missing-values">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Handling Missing Values
          </h2>

          <p className="mb-6">
            The <code>handle_missing_values</code> function provides multiple strategies for dealing with missing data:
          </p>

          <CodeBlock
            title="Missing Values Example"
            code={`import pandas as pd
import numpy as np
from vishuml.utils import handle_missing_values

# Create sample data with missing values
df = pd.DataFrame({
    'A': [1, np.nan, 3, np.nan, 5],
    'B': [np.nan, 2, 3, 4, 5]
})

# Fill with mean values
df_mean = handle_missing_values(df, strategy='mean')

# Fill with forward fill
df_ffill = handle_missing_values(df, strategy='forward')

# Fill with interpolation
df_interp = handle_missing_values(df, strategy='interpolate')

# Fill with a constant value
df_const = handle_missing_values(df, strategy='constant', fill_value=0)`}
          />

          <InfoBox
            type="info"
            title="Available Strategies"
            icon={Settings}
          >
            <ul className="space-y-2">
              <li>• <strong>mean</strong>: Replace with column mean</li>
              <li>• <strong>median</strong>: Replace with column median</li>
              <li>• <strong>mode</strong>: Replace with most frequent value</li>
              <li>• <strong>constant</strong>: Replace with specified value</li>
              <li>• <strong>interpolate</strong>: Linear interpolation</li>
              <li>• <strong>forward</strong>: Forward fill (copy last valid value)</li>
              <li>• <strong>backward</strong>: Backward fill (copy next valid value)</li>
            </ul>
          </InfoBox>
        </section>

        {/* Outlier Detection */}
        <section id="outliers" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Outlier Detection
          </h2>

          <p className="mb-6">
            The <code>detect_outliers</code> function helps identify outliers using various statistical methods:
          </p>

          <CodeBlock
            title="Outlier Detection Example"
            code={`import numpy as np
from vishuml.utils import detect_outliers

# Create sample data with outliers
X = np.array([[1], [2], [2.5], [100], [3], [4], [200]])

# Detect outliers using Z-score method
mask_zscore = detect_outliers(X, method='zscore', threshold=3.0)

# Detect outliers using IQR method
mask_iqr = detect_outliers(X, method='iqr', threshold=1.5)

# Remove outliers
X_clean = X[mask_zscore]  # or X[mask_iqr]`}
          />

          <InfoBox
            type="warning"
            title="Detection Methods"
            icon={AlertCircle}
          >
            <ul className="space-y-2">
              <li>• <strong>zscore</strong>: Identifies values beyond Z standard deviations</li>
              <li>• <strong>iqr</strong>: Uses interquartile range method</li>
              <li>• <strong>isolation_forest</strong>: Uses Isolation Forest algorithm (requires scikit-learn)</li>
            </ul>
          </InfoBox>
        </section>

        {/* Feature Scaling */}
        <section id="scaling" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Feature Scaling
          </h2>

          <p className="mb-6">
            The <code>scale_features</code> function provides various methods to scale your features:
          </p>

          <CodeBlock
            title="Feature Scaling Example"
            code={`import numpy as np
from vishuml.utils import scale_features

# Sample data
X = np.array([[1, -1, 2], [2, 0, 0], [0, 1, -1]])

# Standardization (zero mean, unit variance)
X_standard = scale_features(X, method='standard')

# Min-max scaling to [0, 1]
X_minmax = scale_features(X, method='minmax')

# Robust scaling using quartiles
X_robust = scale_features(X, method='robust')

# Scale by maximum absolute value
X_maxabs = scale_features(X, method='maxabs')`}
          />

          <InfoBox
            type="success"
            title="Scaling Methods"
            icon={Settings}
          >
            <ul className="space-y-2">
              <li>• <strong>standard</strong>: Zero mean and unit variance</li>
              <li>• <strong>minmax</strong>: Scale to specific range (default [0,1])</li>
              <li>• <strong>robust</strong>: Scale using statistics that are robust to outliers</li>
              <li>• <strong>maxabs</strong>: Scale by maximum absolute value</li>
            </ul>
          </InfoBox>
        </section>

        {/* Categorical Encoding */}
        <section id="encoding" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Categorical Encoding
          </h2>

          <p className="mb-6">
            The <code>encode_categorical</code> function provides multiple methods for encoding categorical variables:
          </p>

          <CodeBlock
            title="Categorical Encoding Example"
            code={`import pandas as pd
from vishuml.utils import encode_categorical

# Sample categorical data
df = pd.DataFrame({
    'color': ['red', 'blue', 'red', 'green'],
    'size': ['S', 'M', 'L', 'M']
})

# One-hot encoding
df_onehot = encode_categorical(df, method='onehot')

# Label encoding
df_label = encode_categorical(df, method='label')

# Frequency encoding
df_freq = encode_categorical(df, method='frequency')`}
          />

          <InfoBox
            type="info"
            title="Encoding Methods"
            icon={Brain}
          >
            <ul className="space-y-2">
              <li>• <strong>onehot</strong>: Create binary columns for each category</li>
              <li>• <strong>label</strong>: Convert categories to integer labels</li>
              <li>• <strong>ordinal</strong>: Like label but preserves order</li>
              <li>• <strong>frequency</strong>: Replace categories with their frequencies</li>
            </ul>
          </InfoBox>
        </section>

        {/* Dimensionality Reduction */}
        <section id="dimensionality" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Dimensionality Reduction
          </h2>

          <p className="mb-6">
            The <code>reduce_dimensionality</code> function implements various dimensionality reduction techniques:
          </p>

          <CodeBlock
            title="Dimensionality Reduction Example"
            code={`import numpy as np
from vishuml.utils import reduce_dimensionality

# Create high-dimensional data
X = np.random.rand(100, 20)  # 100 samples, 20 features

# Reduce to 2D using PCA
X_pca = reduce_dimensionality(X, method='pca', n_components=2)

# Reduce using t-SNE
X_tsne = reduce_dimensionality(X, method='tsne', n_components=2)

# Reduce using UMAP
X_umap = reduce_dimensionality(X, method='umap', n_components=2)`}
          />

          <InfoBox
            type="success"
            title="Reduction Methods"
            icon={BarChart2}
          >
            <ul className="space-y-2">
              <li>• <strong>PCA</strong>: Linear dimensionality reduction</li>
              <li>• <strong>t-SNE</strong>: Non-linear reduction, preserves local structure</li>
              <li>• <strong>UMAP</strong>: Faster alternative to t-SNE, preserves global structure</li>
            </ul>
          </InfoBox>
        </section>

        {/* Feature Generation */}
        <section id="generation" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Feature Generation
          </h2>

          <p className="mb-6">
            The <code>generate_features</code> function helps create new features through interactions and transformations:
          </p>

          <CodeBlock
            title="Feature Generation Example"
            code={`import pandas as pd
from vishuml.utils import generate_features

# Sample data
df = pd.DataFrame({
    'x': [1, 2, 3],
    'y': [4, 5, 6]
})

# Generate interaction and polynomial features
df_new = generate_features(df,
    interactions=True,  # Create x*y features
    polynomials=True,  # Create x², y² features
    degree=2  # Maximum polynomial degree
)

print(df_new.columns)
# ['x', 'y', 'x_y', 'x^2', 'y^2']`}
          />

          <InfoBox
            type="info"
            title="Generation Options"
            icon={Settings}
          >
            <ul className="space-y-2">
              <li>• <strong>Interactions</strong>: Products between feature pairs</li>
              <li>• <strong>Polynomials</strong>: Powers of individual features</li>
              <li>• <strong>Custom degree</strong>: Control maximum polynomial degree</li>
              <li>• <strong>Automatic naming</strong>: Generated features are clearly labeled</li>
            </ul>
          </InfoBox>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/quickstart"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Quickstart</span>
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
