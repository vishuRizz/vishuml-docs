import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeDemo = () => {
  const [copied, setCopied] = useState(false);

  const codeExample = `import pandas as pd
from vishuml import LinearRegression, compare_algorithms
from vishuml.utils import train_test_split

# Load your data
df = pd.read_csv('your_data.csv')
X = df[['feature1', 'feature2', 'feature3']]
y = df['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model with auto-visualization
model = LinearRegression()
model.fit(X_train, y_train, visualize=True)  # Auto plots training progress

# Make predictions with confidence intervals
predictions = model.predict(X_test, return_confidence=True)

# Compare with other algorithms automatically
comparison = compare_algorithms(
    X_train, y_train, X_test, y_test,
    algorithms=['LinearRegression', 'RandomForest', 'SVM'],
    plot_results=True  # Automatic comparison charts
)

print(f"Best Algorithm: {comparison.best_model}")
print(f"R² Score: {comparison.best_score:.4f}")`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">See It In Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of VishuML with auto-visualization and algorithm comparison built right in.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">main.py</span>
              <button 
                onClick={handleCopy}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 mr-1" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm leading-relaxed">
                <code className="text-gray-300">
                  <span className="text-blue-400">import</span> <span className="text-white">pandas</span> <span className="text-blue-400">as</span> <span className="text-white">pd</span>{'\n'}
                  <span className="text-blue-400">from</span> <span className="text-white">vishuml</span> <span className="text-blue-400">import</span> <span className="text-white">LinearRegression, compare_algorithms</span>{'\n'}
                  <span className="text-blue-400">from</span> <span className="text-white">vishuml.utils</span> <span className="text-blue-400">import</span> <span className="text-white">train_test_split</span>{'\n\n'}

                  <span className="text-green-400"># Load your data</span>{'\n'}
                  <span className="text-white">df = pd.read_csv(</span><span className="text-yellow-300">&apos;your_data.csv&apos;</span><span className="text-white">)</span>{'\n'}
                  <span className="text-white">X = df[[</span><span className="text-yellow-300">&apos;feature1&apos;</span><span className="text-white">, </span><span className="text-yellow-300">&apos;feature2&apos;</span><span className="text-white">, </span><span className="text-yellow-300">&apos;feature3&apos;</span><span className="text-white">]]</span>{'\n'}
                  <span className="text-white">y = df[</span><span className="text-yellow-300">&apos;target&apos;</span><span className="text-white">]</span>{'\n\n'}

                  <span className="text-green-400"># Split data</span>{'\n'}
                  <span className="text-white">X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=</span><span className="text-purple-400">0.2</span><span className="text-white">)</span>{'\n\n'}

                  <span className="text-green-400"># Train model with auto-visualization</span>{'\n'}
                  <span className="text-white">model = LinearRegression()</span>{'\n'}
                  <span className="text-white">model.fit(X_train, y_train, visualize=</span><span className="text-purple-400">True</span><span className="text-white">)  </span><span className="text-green-400"># Auto plots training progress</span>{'\n\n'}

                  <span className="text-green-400"># Make predictions with confidence intervals</span>{'\n'}
                  <span className="text-white">predictions = model.predict(X_test, return_confidence=</span><span className="text-purple-400">True</span><span className="text-white">)</span>{'\n\n'}

                  <span className="text-green-400"># Compare with other algorithms automatically</span>{'\n'}
                  <span className="text-white">comparison = compare_algorithms(</span>{'\n'}
                  <span className="text-white">    X_train, y_train, X_test, y_test,</span>{'\n'}
                  <span className="text-white">    algorithms=[</span><span className="text-yellow-300">&apos;LinearRegression&apos;</span><span className="text-white">, </span><span className="text-yellow-300">&apos;RandomForest&apos;</span><span className="text-white">, </span><span className="text-yellow-300">&apos;SVM&apos;</span><span className="text-white">],</span>{'\n'}
                  <span className="text-white">    plot_results=</span><span className="text-purple-400">True</span>  <span className="text-green-400"># Automatic comparison charts</span>{'\n'}
                  <span className="text-white">)</span>{'\n\n'}

                  <span className="text-blue-400">print</span><span className="text-white">(</span><span className="text-yellow-300">f&quot;Best Algorithm: </span><span className="text-white">comparison.best_model</span><span className="text-yellow-300">&quot;</span><span className="text-white">)</span>{'\n'}
                  <span className="text-blue-400">print</span><span className="text-white">(</span><span className="text-yellow-300">f&quot;R² Score: </span><span className="text-white">comparison.best_score:.4f</span><span className="text-yellow-300">&quot;</span><span className="text-white">)</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;