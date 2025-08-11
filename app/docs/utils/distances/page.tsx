"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Settings, AlertCircle, LineChart, Brain, Database, Workflow } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import InfoBox from "@/app/components/InfoBox";

export default function DistancesPage() {
  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/docs" className="hover:text-gray-700 dark:hover:text-gray-200">Docs</Link>
        <span>/</span>
        <Link href="/docs/utils" className="hover:text-gray-700 dark:hover:text-gray-200">Utilities</Link>
        <span>/</span>
        <span>Distance Functions</span>
      </nav>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Distance Functions
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          VishuML provides various distance metrics for measuring similarity between data points.
          These functions are essential for algorithms like K-Nearest Neighbors and clustering.
        </p>

        {/* Euclidean Distance */}
        <section id="euclidean">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Euclidean Distance
          </h2>

          <p className="mb-6">
            The Euclidean distance is the straight-line distance between two points in Euclidean space:
          </p>

          <CodeBlock
            title="Euclidean Distance Example"
            code={`import numpy as np
from vishuml.utils import euclidean_distance

# Two points in 2D space
x1 = np.array([1, 2])
x2 = np.array([4, 6])

# Calculate distance
distance = euclidean_distance(x1, x2)
print(f"Euclidean distance: {distance}")  # 5.0

# Works with higher dimensions too
x3 = np.array([1, 2, 3, 4])
x4 = np.array([2, 3, 4, 5])
distance_4d = euclidean_distance(x3, x4)
print(f"4D distance: {distance_4d}")  # 2.0`}
          />

          <InfoBox
            type="info"
            title="Key Properties"
            icon={Settings}
          >
            <ul className="space-y-2">
              <li>• Most common distance metric</li>
              <li>• Preserves distances under rotation</li>
              <li>• Sensitive to scale differences</li>
              <li>• Computationally efficient</li>
            </ul>
          </InfoBox>
        </section>

        {/* Manhattan Distance */}
        <section id="manhattan" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Manhattan Distance
          </h2>

          <p className="mb-6">
            The Manhattan distance (L1 norm) measures the sum of absolute differences between coordinates:
          </p>

          <CodeBlock
            title="Manhattan Distance Example"
            code={`from vishuml.utils import manhattan_distance

# Two points in 2D space
x1 = np.array([1, 2])
x2 = np.array([4, 6])

# Calculate Manhattan distance
distance = manhattan_distance(x1, x2)
print(f"Manhattan distance: {distance}")  # 7.0

# Compare with Euclidean
eucl_dist = euclidean_distance(x1, x2)
print(f"Manhattan: {distance}, Euclidean: {eucl_dist}")
# Manhattan is always >= Euclidean`}
          />

          <InfoBox
            type="success"
            title="Use Cases"
            icon={Brain}
          >
            <ul className="space-y-2">
              <li>• Grid-based navigation problems</li>
              <li>• Feature spaces with discrete values</li>
              <li>• When diagonal movement is not allowed</li>
              <li>• Text similarity with word frequencies</li>
            </ul>
          </InfoBox>
        </section>

        {/* Cosine Similarity */}
        <section id="cosine" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Cosine Similarity
          </h2>

          <p className="mb-6">
            Cosine similarity measures the cosine of the angle between two vectors:
          </p>

          <CodeBlock
            title="Cosine Similarity Example"
            code={`from vishuml.utils import cosine_similarity

# Two document vectors (word frequencies)
doc1 = np.array([1, 1, 0, 0])  # "hello world"
doc2 = np.array([1, 1, 1, 0])  # "hello world program"

# Calculate similarity
similarity = cosine_similarity(doc1, doc2)
print(f"Cosine similarity: {similarity:.3f}")  # 0.816

# Perfect similarity
print(cosine_similarity(doc1, doc1))  # 1.0

# Orthogonal vectors
v1 = np.array([1, 0])
v2 = np.array([0, 1])
print(cosine_similarity(v1, v2))  # 0.0`}
          />

          <InfoBox
            type="warning"
            title="Important Notes"
            icon={AlertCircle}
          >
            <ul className="space-y-2">
              <li>• Measures orientation, not magnitude</li>
              <li>• Range: [-1, 1] or [0, 1] for non-negative data</li>
              <li>• Popular for text similarity</li>
              <li>• Handles high-dimensional sparse data well</li>
            </ul>
          </InfoBox>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/docs/utils/preprocessing"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="mr-2">Prev.</span>
            <span>Preprocessing</span>
          </Link>
          
          <Link 
            href="/docs/examples/basic"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">Examples</span>
            <span className="mr-2">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
