import React, { useState } from 'react';
import { ArrowRight, Terminal, Zap, BarChart3, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Wobble Card Component
const WobbleCard = ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
        ...style,
      }}
      className={className}
    >
      <motion.div
        style={{
          transform: isHovering
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
          transition: "transform 0.1s ease-out",
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <motion.section 
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16"
      style={{ fontFamily: "'SF Pro Display', system-ui, sans-serif" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Content */}
      <motion.div 
        className="text-center max-w-5xl mx-auto mb-8"
        variants={itemVariants}
      >
        {/* Installation Badge */}
        <motion.div 
          className="inline-flex items-center bg-white rounded-lg px-4 py-2 mb-6 border border-gray-200 shadow-sm"
          variants={itemVariants}
        >
          <Terminal className="w-4 h-4 mr-3 text-gray-500" />
          <code className="text-sm text-gray-700">pip install vishuml</code>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4"
          variants={itemVariants}
        >
          Machine Learning <br />
          <span className='text-black'>Reimagined</span> 
        </motion.h1>
        
        {/* Subtext */}
        <motion.p 
          className="text-gray-600 text-lg mb-6"
          variants={itemVariants}
        >
          A comprehensive ML library with built-in visualization, algorithm comparison, and sklearn compatibility.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-3"
          variants={itemVariants}
        >
          <button onClick={() => window.location.href = '/docs'} className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-200 shadow-lg">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button onClick={() => window.location.href = '/docs'} className="inline-flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-gray-300 hover:bg-white transition-all duration-200">
            Documentation
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-gray-500 text-sm"
          variants={itemVariants}
        >
          Join 5,000+ developers building with VishuML • Open source & free
        </motion.div>
      </motion.div>

      {/* Featured Capabilities Section */}
      <motion.div 
        className="w-full max-w-7xl mx-auto"
        variants={itemVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          variants={itemVariants}
        >
          <h2 className="text-black text-2xl font-bold">Key Features</h2>
          <button className="text-black text-base font-medium hover:underline">
            View All
          </button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Auto Visualization */}
          <motion.div variants={cardVariants}>
            <WobbleCard className="rounded-2xl p-5 text-black" style={{ backgroundColor: '#5fcca0' }}>
              <div className="mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto Visualization</h3>
              <p className="text-sm mb-4 opacity-90">
                Built-in plots for every algorithm with zero configuration. See your data and results instantly.
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-sm opacity-80 mb-1">Setup Time</div>
                  <div className="text-base font-bold">Zero Config</div>
                </div>
                <button className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </WobbleCard>
          </motion.div>

          {/* Algorithm Comparison */}
          <motion.div variants={cardVariants}>
            <WobbleCard className="rounded-2xl p-5 text-white" style={{ backgroundColor: '#0a0a0a' }}>
              <div className="mb-3">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compare Algorithms</h3>
              <p className="text-sm mb-4 opacity-90">
                Side-by-side performance metrics and visualizations to find the best model for your data.
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-sm opacity-80 mb-1">Model Selection</div>
                  <div className="text-base font-bold">data-driven</div>
                </div>
                <button className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </WobbleCard>
          </motion.div>

          {/* sklearn Compatible */}
          <motion.div variants={cardVariants}>
            <WobbleCard className="rounded-2xl p-5 text-black" style={{ backgroundColor: '#cb9bfb' }}>
              <div className="mb-3">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">sklearn Compatible</h3>
              <p className="text-sm mb-4 opacity-90">
                Drop-in replacement with familiar API and methods. Use your existing sklearn knowledge seamlessly.
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-sm opacity-80 mb-1">Learning Curve</div>
                  <div className="text-base font-bold">Zero</div>
                </div>
                <button className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </WobbleCard>
          </motion.div>

          {/* Built from Scratch */}
          <motion.div variants={cardVariants}>
            <WobbleCard className="rounded-2xl p-5 text-black" style={{ backgroundColor: '#f9fd91' }}>
              <div className="mb-3">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Built from Scratch</h3>
              <p className="text-sm mb-4 opacity-90">
                Every algorithm implemented from the ground up with clear, educational code and extensive documentation.
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-sm opacity-80 mb-1">Understanding</div>
                  <div className="text-base font-bold">deep insights</div>
                </div>
                <button className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </WobbleCard>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @font-face {
          font-family: 'SF Pro Display';
          src: url('/public/fonts/SF-Pro.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;