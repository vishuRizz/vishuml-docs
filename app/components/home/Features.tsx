import React from 'react';
import { BarChart3, Zap, Eye, GitCompare, Layers, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Auto Visualization",
      description: "Every algorithm comes with built-in plotting capabilities. Visualize training progress, decision boundaries, feature importance, and more without writing extra code."
    },
    {
      icon: <GitCompare className="w-6 h-6" />,
      title: "Algorithm Comparison",
      description: "Compare multiple algorithms side-by-side with detailed metrics, performance charts, and statistical significance tests. Find the best model for your data instantly."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Model Interpretability",
      description: "Built-in SHAP values, feature importance plots, and decision tree visualization. Understand exactly how your models make predictions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Efficient NumPy implementations with optional GPU acceleration. Fast training and inference for large datasets without compromising accuracy."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "sklearn Compatible",
      description: "Drop-in replacement for sklearn with the same familiar API. Migrate your existing projects seamlessly while gaining powerful new features."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Educational Focus",
      description: "Clear, well-documented implementations that help you understand the math behind ML algorithms. Perfect for learning and teaching."
    }
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Why Choose VishuML?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for modern machine learning workflows with powerful features that go beyond traditional libraries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">25+</div>
              <div className="text-gray-600 font-medium">Algorithms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-600 font-medium">From Scratch</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">10x</div>
              <div className="text-gray-600 font-medium">Faster Insights</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">Free</div>
              <div className="text-gray-600 font-medium">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;