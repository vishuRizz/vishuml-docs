"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Settings, AlertCircle, LineChart, Brain, Database, Workflow, Zap, Target } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function PreprocessingPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/utils" className="hover:text-gray-700 dark:hover:text-gray-200">Utilities</Link>
        <span>/</span>
        <span>Preprocessing</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Advanced Data Preprocessing
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML provides enterprise-grade preprocessing utilities that handle the most complex data analysis scenarios.
          From automated data profiling to advanced feature engineering, our tools transform raw data into ML-ready datasets.
        </p>

        {/* Data Analysis Overview */}
        <section id="data-analysis">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Automated Data Analysis
          </h2>

          <p className="mb-6">
            Start with comprehensive data profiling to understand your dataset before preprocessing:
          </p>

          <CodeBlock
            title="Complete Data Analysis Pipeline"
            code={`import pandas as pd
import numpy as np
from vishuml.utils import analyze_dataset, generate_preprocessing_report

# Load your messy dataset
df = pd.read_csv('messy_data.csv')

# Comprehensive data analysis
analysis = analyze_dataset(df, target_column='target')

print("=== DATA ANALYSIS REPORT ===")
print(f"Dataset shape: {analysis['shape']}")
print(f"Missing values: {analysis['missing_summary']}")
print(f"Data types: {analysis['dtypes']}")
print(f"Outlier summary: {analysis['outlier_summary']}")
print(f"Correlation insights: {analysis['correlation_insights']}")

# Generate preprocessing recommendations
recommendations = generate_preprocessing_report(analysis)
print("\\n=== PREPROCESSING RECOMMENDATIONS ===")
for rec in recommendations:
    print(f"• {rec}")`}
          />

          <InfoBox
            type="info"
            title="What the Analysis Reveals"
            icon={Database}
          >
            <ul className="space-y-2">
              <li>• Missing value patterns and strategies</li>
              <li>• Outlier detection across all features</li>
              <li>• Feature correlation analysis</li>
              <li>• Data type inconsistencies</li>
              <li>• Distribution analysis for scaling decisions</li>
              <li>• Categorical encoding recommendations</li>
            </ul>
          </InfoBox>
        </section>

        {/* Missing Values */}
        <section id="missing-values" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Advanced Missing Value Handling
          </h2>

          <p className="mb-6">
            Handle missing values with sophisticated strategies that preserve data integrity:
          </p>

          <CodeBlock
            title="Advanced Missing Value Strategies"
            code={`from vishuml.utils import handle_missing_values, impute_missing_advanced

# Complex missing value scenarios
df = pd.DataFrame({
    'age': [25, np.nan, 30, np.nan, 35],
    'salary': [50000, 60000, np.nan, 70000, np.nan],
    'department': ['IT', 'HR', 'IT', np.nan, 'Finance'],
    'experience': [2, np.nan, 5, 3, np.nan]
})

# Strategy 1: Advanced imputation with correlations
df_imputed = impute_missing_advanced(
    df,
    strategy='correlation_based',
    correlation_threshold=0.3,
    use_ml_imputation=True
)

# Strategy 2: Multiple imputation for uncertainty
df_multiple = impute_missing_advanced(
    df,
    strategy='multiple_imputation',
    n_imputations=5,
    random_state=42
)

# Strategy 3: Domain-specific imputation
df_domain = impute_missing_advanced(
    df,
    strategy='domain_knowledge',
    rules={
        'age': {'method': 'median', 'group_by': 'department'},
        'salary': {'method': 'regression', 'features': ['age', 'experience']},
        'experience': {'method': 'forward_fill'}
    }
)

print("Original missing values:", df.isnull().sum().sum())
print("After imputation:", df_imputed.isnull().sum().sum())`}
          />

          <InfoBox
            type="warning"
            title="Advanced Imputation Strategies"
            icon={Settings}
          >
            <ul className="space-y-2">
              <li>• <strong>Correlation-based</strong>: Uses feature relationships</li>
              <li>• <strong>Multiple imputation</strong>: Handles uncertainty</li>
              <li>• <strong>ML-based imputation</strong>: Uses predictive models</li>
              <li>• <strong>Domain knowledge</strong>: Custom business rules</li>
              <li>• <strong>Time-series aware</strong>: For temporal data</li>
            </ul>
          </InfoBox>
        </section>

        {/* Outlier Detection */}
        <section id="outliers" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Intelligent Outlier Detection
          </h2>

          <p className="mb-6">
            Detect and handle outliers using multiple sophisticated algorithms:
          </p>

          <CodeBlock
            title="Multi-Method Outlier Detection"
            code={`from vishuml.utils import detect_outliers_advanced, analyze_outlier_patterns

# Complex dataset with different outlier types
X = np.random.randn(1000, 5)
# Add different types of outliers
X[0:10, 0] = 10  # Global outliers
X[10:20, 1] = -8  # Local outliers
X[20:30, 2:4] = np.random.randn(10, 2) * 5  # Multivariate outliers

# Comprehensive outlier analysis
outlier_analysis = analyze_outlier_patterns(X)

print("=== OUTLIER ANALYSIS ===")
print(f"Global outliers: {outlier_analysis['global_outliers']}")
print(f"Local outliers: {outlier_analysis['local_outliers']}")
print(f"Multivariate outliers: {outlier_analysis['multivariate_outliers']}")

# Multi-method detection
outliers_zscore = detect_outliers_advanced(X, method='zscore', threshold=3)
outliers_iqr = detect_outliers_advanced(X, method='iqr', threshold=1.5)
outliers_isolation = detect_outliers_advanced(X, method='isolation_forest')
outliers_lof = detect_outliers_advanced(X, method='local_outlier_factor')

# Ensemble outlier detection
ensemble_outliers = detect_outliers_advanced(
    X, 
    method='ensemble',
    methods=['zscore', 'iqr', 'isolation_forest'],
    voting_threshold=2  # At least 2 methods must flag as outlier
)

print(f"\\nEnsemble outliers detected: {np.sum(ensemble_outliers)}")`}
          />

          <InfoBox
            type="success"
            title="Advanced Detection Methods"
            icon={Target}
          >
            <ul className="space-y-2">
              <li>• <strong>Ensemble methods</strong>: Combine multiple algorithms</li>
              <li>• <strong>Local Outlier Factor</strong>: Density-based detection</li>
              <li>• <strong>One-Class SVM</strong>: Novelty detection</li>
              <li>• <strong>DBSCAN</strong>: Clustering-based outliers</li>
              <li>• <strong>Contextual outliers</strong>: Domain-aware detection</li>
            </ul>
          </InfoBox>
        </section>

        {/* Feature Engineering */}
        <section id="feature-engineering" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Automated Feature Engineering
          </h2>

          <p className="mb-6">
            Generate sophisticated features automatically with domain-aware engineering:
          </p>

          <CodeBlock
            title="Advanced Feature Engineering"
            code={`from vishuml.utils import engineer_features_advanced, create_time_features

# Complex dataset with mixed types
df = pd.DataFrame({
    'date': pd.date_range('2023-01-01', periods=1000, freq='D'),
    'amount': np.random.randn(1000) * 1000 + 5000,
    'category': np.random.choice(['A', 'B', 'C'], 1000),
    'user_id': np.random.randint(1, 101, 1000),
    'location': np.random.choice(['NY', 'CA', 'TX'], 1000)
})

# Advanced feature engineering
df_engineered = engineer_features_advanced(
    df,
    target_column='amount',
    feature_types={
        'temporal': ['date'],
        'categorical': ['category', 'location'],
        'numerical': ['amount'],
        'id': ['user_id']
    },
    engineering_options={
        'temporal_features': True,
        'aggregation_features': True,
        'interaction_features': True,
        'polynomial_features': True,
        'statistical_features': True,
        'domain_features': True
    }
)

print("Original features:", df.shape[1])
print("Engineered features:", df_engineered.shape[1])

# Time-based feature engineering
time_features = create_time_features(
    df['date'],
    features=['hour', 'day_of_week', 'month', 'quarter', 'is_weekend', 'is_holiday']
)

# User behavior features
user_features = engineer_features_advanced(
    df,
    group_by='user_id',
    aggregations=['mean', 'std', 'count', 'last', 'first'],
    time_windows=['7d', '30d', '90d']
)

print("\\nGenerated features:")
print(f"• Time features: {time_features.shape[1]}")
print(f"• User behavior features: {user_features.shape[1]}")`}
          />

          <InfoBox
            type="info"
            title="Feature Engineering Capabilities"
            icon={Zap}
          >
            <ul className="space-y-2">
              <li>• <strong>Temporal features</strong>: Time-based patterns</li>
              <li>• <strong>Aggregation features</strong>: Group-wise statistics</li>
              <li>• <strong>Interaction features</strong>: Feature combinations</li>
              <li>• <strong>Domain features</strong>: Business-specific logic</li>
              <li>• <strong>Statistical features</strong>: Rolling statistics</li>
              <li>• <strong>Embedding features</strong>: Categorical embeddings</li>
            </ul>
          </InfoBox>
        </section>

        {/* Scaling and Normalization */}
        <section id="scaling" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Intelligent Feature Scaling
          </h2>

          <p className="mb-6">
            Choose the right scaling method based on your data distribution and model requirements:
          </p>

          <CodeBlock
            title="Advanced Scaling Strategies"
            code={`from vishuml.utils import scale_features_advanced, auto_scale_features

# Mixed distribution data
X = np.column_stack([
    np.random.normal(0, 1, 1000),  # Normal distribution
    np.random.exponential(1, 1000),  # Exponential distribution
    np.random.lognormal(0, 1, 1000),  # Log-normal distribution
    np.random.uniform(0, 10, 1000)  # Uniform distribution
])

# Automatic scaling based on data distribution
X_auto_scaled = auto_scale_features(
    X,
    method='auto',
    handle_outliers=True,
    preserve_sparsity=True
)

# Advanced scaling with custom strategies
X_advanced_scaled = scale_features_advanced(
    X,
    strategies={
        0: 'robust',  # For normal distribution
        1: 'log_transform',  # For exponential
        2: 'box_cox',  # For log-normal
        3: 'minmax'  # For uniform
    },
    outlier_handling='winsorize',
    outlier_percentile=0.05
)

# Compare scaling methods
from vishuml.utils import compare_scaling_methods
comparison = compare_scaling_methods(
    X,
    methods=['standard', 'robust', 'minmax', 'auto'],
    target_variable=y  # If available
)

print("\\nScaling comparison:")
for method, score in comparison.items():
    print(f"{method}: {score:.3f}")`}
          />

          <InfoBox
            type="warning"
            title="Scaling Best Practices"
            icon={AlertCircle}
          >
            <ul className="space-y-2">
              <li>• <strong>Robust scaling</strong>: For data with outliers</li>
              <li>• <strong>Log transformation</strong>: For skewed distributions</li>
              <li>• <strong>Box-Cox</strong>: For positive skewed data</li>
              <li>• <strong>Quantile scaling</strong>: For non-linear relationships</li>
              <li>• <strong>Auto-scaling</strong>: Let the algorithm decide</li>
            </ul>
          </InfoBox>
        </section>

        {/* Complete Pipeline */}
        <section id="complete-pipeline" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Complete Preprocessing Pipeline
          </h2>

          <p className="mb-6">
            Put it all together with a comprehensive preprocessing pipeline:
          </p>

          <CodeBlock
            title="End-to-End Preprocessing Pipeline"
            code={`from vishuml.utils import PreprocessingPipeline

# Create a complete preprocessing pipeline
pipeline = PreprocessingPipeline(
    steps=[
        ('analysis', 'auto_analyze'),
        ('missing_values', 'advanced_imputation'),
        ('outliers', 'ensemble_detection'),
        ('feature_engineering', 'comprehensive'),
        ('scaling', 'auto_scale'),
        ('encoding', 'auto_encode'),
        ('feature_selection', 'auto_select')
    ],
    config={
        'target_column': 'target',
        'categorical_threshold': 0.1,
        'correlation_threshold': 0.95,
        'feature_importance_threshold': 0.01
    }
)

# Fit and transform your data
X_processed, y_processed = pipeline.fit_transform(X_raw, y_raw)

# Get preprocessing report
report = pipeline.get_report()
print("\\n=== PREPROCESSING REPORT ===")
print(f"Original shape: {report['original_shape']}")
print(f"Final shape: {report['final_shape']}")
print(f"Features removed: {report['features_removed']}")
print(f"Features added: {report['features_added']}")
print(f"Missing values handled: {report['missing_handled']}")
print(f"Outliers detected: {report['outliers_detected']}")

# Save pipeline for future use
pipeline.save('my_preprocessing_pipeline.pkl')

# Load and use on new data
new_pipeline = PreprocessingPipeline.load('my_preprocessing_pipeline.pkl')
X_new_processed = new_pipeline.transform(X_new)`}
          />

          <InfoBox
            type="success"
            title="Pipeline Benefits"
            icon={Workflow}
          >
            <ul className="space-y-2">
              <li>• <strong>Reproducible</strong>: Same transformations every time</li>
              <li>• <strong>Automated</strong>: Minimal manual intervention</li>
              <li>• <strong>Optimized</strong>: Best practices built-in</li>
              <li>• <strong>Scalable</strong>: Handle large datasets efficiently</li>
              <li>• <strong>Documented</strong>: Complete audit trail</li>
            </ul>
          </InfoBox>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/utils/metrics"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Metrics</span>
          </Link>
          
          <Link 
            href="/docs/utils/distances"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Distance Functions</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
