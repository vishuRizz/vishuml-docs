import React, { useState } from 'react';
import { Brain, Target, Layers, BarChart3 } from 'lucide-react';

const Algorithms = () => {
  const [activeCategory, setActiveCategory] = useState('supervised');

  const categories = [
    {
      id: 'supervised',
      name: 'Supervised Learning',
      icon: <Target className="w-5 h-5" />,
      algorithms: [
        { name: 'Linear Regression', desc: 'Predict continuous values with linear relationships', features: ['Auto plotting', 'Confidence intervals', 'Feature importance'] },
        { name: 'Logistic Regression', desc: 'Binary and multi-class classification', features: ['Decision boundaries', 'Probability plots', 'ROC curves'] },
        { name: 'Decision Tree', desc: 'Interpretable tree-based classification', features: ['Tree visualization', 'Feature splits', 'Pruning options'] },
        { name: 'Random Forest', desc: 'Ensemble of decision trees for robust predictions', features: ['Feature importance', 'OOB scoring', 'Tree depth analysis'] },
        { name: 'Support Vector Machine', desc: 'Powerful classification with kernel tricks', features: ['Kernel visualization', 'Support vectors', 'Margin plots'] },
        { name: 'Naive Bayes', desc: 'Probabilistic classifier based on Bayes theorem', features: ['Probability distributions', 'Feature likelihood', 'Prior visualization'] }
      ]
    },
    {
      id: 'unsupervised',
      name: 'Unsupervised Learning',
      icon: <Brain className="w-5 h-5" />,
      algorithms: [
        { name: 'K-Means Clustering', desc: 'Group data into distinct clusters', features: ['Cluster visualization', 'Elbow method', 'Silhouette analysis'] },
        { name: 'Hierarchical Clustering', desc: 'Build cluster hierarchies with dendrograms', features: ['Dendrogram plots', 'Distance matrices', 'Cluster linkage'] },
        { name: 'DBSCAN', desc: 'Density-based clustering for irregular shapes', features: ['Noise detection', 'Density plots', 'Core point analysis'] },
        { name: 'PCA', desc: 'Dimensionality reduction and feature extraction', features: ['Explained variance', 'Component visualization', 'Biplot analysis'] },
        { name: 't-SNE', desc: 'Non-linear dimensionality reduction for visualization', features: ['2D/3D plots', 'Perplexity tuning', 'Convergence tracking'] }
      ]
    },
    {
      id: 'neural',
      name: 'Neural Networks',
      icon: <Layers className="w-5 h-5" />,
      algorithms: [
        { name: 'Perceptron', desc: 'Simple linear classifier neural network', features: ['Weight visualization', 'Learning curves', 'Decision boundary'] },
        { name: 'Multi-Layer Perceptron', desc: 'Deep neural network for complex patterns', features: ['Architecture plots', 'Loss tracking', 'Gradient visualization'] },
        { name: 'Convolutional Neural Network', desc: 'Image processing and computer vision', features: ['Filter visualization', 'Feature maps', 'Activation tracking'] }
      ]
    },
    {
      id: 'utils',
      name: 'Utilities & Metrics',
      icon: <BarChart3 className="w-5 h-5" />,
      algorithms: [
        { name: 'Cross Validation', desc: 'Robust model evaluation techniques', features: ['K-fold validation', 'Stratified splits', 'Performance metrics'] },
        { name: 'Feature Selection', desc: 'Automatic feature importance and selection', features: ['Correlation heatmaps', 'Univariate tests', 'Recursive elimination'] },
        { name: 'Hyperparameter Tuning', desc: 'Grid and random search optimization', features: ['Search visualization', 'Performance surfaces', 'Best params tracking'] },
        { name: 'Model Comparison', desc: 'Side-by-side algorithm comparison', features: ['Performance charts', 'Statistical tests', 'Ranking tables'] }
      ]
    }
  ];

  return (
    <section id="algorithms" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Complete Algorithm Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 25 machine learning algorithms implemented from scratch with powerful visualization and comparison tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Algorithms Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {categories
            .find(cat => cat.id === activeCategory)
            ?.algorithms.map((algorithm, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-black">
                    {algorithm.name}
                  </h3>
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Ready
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {algorithm.desc}
                </p>
                
                <div>
                  <h4 className="font-semibold text-black mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {algorithm.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-semibold text-black mb-4">More Algorithms Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We&apos;re continuously adding new algorithms and features. Next up: Transformer models, 
              Advanced ensemble methods, and Reinforcement learning algorithms.
            </p>
            <div className="flex justify-center">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                Request an Algorithm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Algorithms;