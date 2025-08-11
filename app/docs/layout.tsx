"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  Code, 
  Layers, 
  FileText,
  Menu,
  X,
  Search,
  BarChart2,
  Brain,
  GitBranch,
  Database,
  LineChart,
  Network,
  Workflow,
  Settings,
  Box
} from "lucide-react";
import ScrollSpyNav from "@/app/components/ScrollSpyNav";
import SearchBox from "@/app/components/SearchBox";

const navigation = [
  {
    title: "Introduction",
    icon: BookOpen,
    items: [
      { 
        title: "Getting Started",
        href: "/docs",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "features", title: "Features" },
          { id: "installation", title: "Installation" },
          { id: "quick-start", title: "Quick Start" }
        ]
      },
      { 
        title: "Installation",
        href: "/docs/installation",
        sections: [
          { id: "requirements", title: "Requirements" },
          { id: "pip-install", title: "PyPI Installation" },
          { id: "source-install", title: "Source Installation" },
          { id: "development", title: "Development Setup" }
        ]
      },
      { 
        title: "Quick Start",
        href: "/docs/quickstart",
        sections: [
          { id: "basic-example", title: "Basic Example" },
          { id: "pandas-usage", title: "Using with pandas" },
          { id: "real-data", title: "Real Dataset Example" },
          { id: "next-steps", title: "Next Steps" }
        ]
      }
    ]
  },
  {
    title: "Supervised Learning",
    icon: Brain,
    items: [
      {
        title: "Linear Regression",
        href: "/docs/supervised/linear-regression",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "mathematical-background", title: "Mathematical Background" },
          { id: "api-reference", title: "API Reference" },
          { id: "basic-usage", title: "Basic Usage" },
          { id: "advanced-usage", title: "Advanced Usage" },
          { id: "methods", title: "Methods" },
          { id: "best-practices", title: "Best Practices" }
        ]
      },
      {
        title: "Logistic Regression",
        href: "/docs/supervised/logistic-regression",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "mathematical-background", title: "Mathematical Background" },
          { id: "api-reference", title: "API Reference" },
          { id: "basic-usage", title: "Basic Usage" },
          { id: "advanced-usage", title: "Advanced Usage" },
          { id: "methods", title: "Methods" },
          { id: "tips-best-practices", title: "Tips & Best Practices" }
        ]
      },
      {
        title: "K-Nearest Neighbors",
        href: "/docs/supervised/knn",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "algorithm", title: "Algorithm Details" },
          { id: "api-reference", title: "API Reference" },
          { id: "classification", title: "Classification" },
          { id: "regression", title: "Regression" },
          { id: "distance-metrics", title: "Distance Metrics" }
        ]
      },
      {
        title: "Support Vector Machine",
        href: "/docs/supervised/svm",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "mathematical-background", title: "Mathematical Background" },
          { id: "kernels", title: "Kernel Functions" },
          { id: "api-reference", title: "API Reference" },
          { id: "basic-usage", title: "Basic Usage" },
          { id: "visualization", title: "Visualization" }
        ]
      },
      {
        title: "Decision Tree",
        href: "/docs/supervised/decision-tree",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "cart-algorithm", title: "CART Algorithm" },
          { id: "api-reference", title: "API Reference" },
          { id: "basic-usage", title: "Basic Usage" },
          { id: "visualization", title: "Tree Visualization" }
        ]
      },
      {
        title: "Naive Bayes",
        href: "/docs/supervised/naive-bayes",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "gaussian-nb", title: "Gaussian Naive Bayes" },
          { id: "api-reference", title: "API Reference" },
          { id: "basic-usage", title: "Basic Usage" },
          { id: "text-classification", title: "Text Classification" }
        ]
      },
      {
        title: "Perceptron",
        href: "/docs/supervised/perceptron",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "algorithm", title: "Algorithm Details" },
          { id: "api-reference", title: "API Reference" },
          { id: "basic-usage", title: "Basic Usage" },
          { id: "visualization", title: "Visualization" }
        ]
      }
    ]
  },
  {
    title: "Unsupervised Learning",
    icon: Network,
    items: [
      {
        title: "K-Means Clustering",
        href: "/docs/unsupervised/kmeans",
        sections: [
          { id: "overview", title: "Overview" },
          { id: "algorithm", title: "Algorithm Details" },
          { id: "initialization", title: "Initialization Methods" },
          { id: "api-reference", title: "API Reference" },
          { id: "basic-usage", title: "Basic Usage" },
          { id: "visualization", title: "Visualization" }
        ]
      }
    ]
  },
  {
    title: "Utilities",
    icon: Settings,
    items: [
      {
        title: "Data Splitting",
        href: "/docs/utils/data-splitting",
        sections: [
          { id: "train-test-split", title: "Train Test Split" },
          { id: "cross-validation", title: "Cross Validation" },
          { id: "stratified-split", title: "Stratified Split" }
        ]
      },
      {
        title: "Metrics",
        href: "/docs/utils/metrics",
        sections: [
          { id: "classification-metrics", title: "Classification Metrics" },
          { id: "regression-metrics", title: "Regression Metrics" },
          { id: "clustering-metrics", title: "Clustering Metrics" }
        ]
      },
      {
        title: "Preprocessing",
        href: "/docs/utils/preprocessing",
        sections: [
          { id: "normalization", title: "Normalization" },
          { id: "standardization", title: "Standardization" },
          { id: "encoding", title: "Categorical Encoding" }
        ]
      },
      {
        title: "Distance Functions",
        href: "/docs/utils/distances",
        sections: [
          { id: "euclidean", title: "Euclidean Distance" },
          { id: "manhattan", title: "Manhattan Distance" },
          { id: "cosine", title: "Cosine Similarity" }
        ]
      }
    ]
  },
  {
    title: "Examples",
    icon: Code,
    items: [
      {
        title: "Basic Usage",
        href: "/docs/examples/basic",
        sections: [
          { id: "regression", title: "Regression Examples" },
          { id: "classification", title: "Classification Examples" },
          { id: "clustering", title: "Clustering Examples" }
        ]
      },
      {
        title: "Real Datasets",
        href: "/docs/examples/datasets",
        sections: [
          { id: "iris", title: "Iris Dataset" },
          { id: "housing", title: "Housing Dataset" },
          { id: "wine", title: "Wine Dataset" }
        ]
      },
      {
        title: "Comparison Guide",
        href: "/docs/examples/comparison",
        sections: [
          { id: "regression-comparison", title: "Regression Models" },
          { id: "classification-comparison", title: "Classification Models" },
          { id: "performance", title: "Performance Comparison" }
        ]
      }
    ]
  }
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-40 lg:left-64">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side */}
            <div className="flex items-center">
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              
              <Link href="/" className="flex items-center ml-4 lg:ml-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">VishuML</span>
              </Link>
              
              <nav className="hidden lg:flex ml-8 space-x-8">
                <span className="text-sm text-gray-500 dark:text-gray-400">Docs</span>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="relative hidden md:flex items-center w-64 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              >
                <Search className="h-4 w-4 mr-2" />
                <span>Search docs...</span>
                <span className="ml-auto text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">⌘K</span>
              </button>
              
              <button
                onClick={() => setSearchOpen(true)}
                className="md:hidden p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <a
                href="https://github.com/vishuRizz/vishuml-pip-library"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4 pt-20 lg:pt-4 h-full flex flex-col">
            <ScrollSpyNav items={navigation} />
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:pl-64 max-w-none">
          <div className="px-4 sm:px-6 lg:px-8 py-8 pt-24">
            {children}
          </div>
        </main>
      </div>

      {/* Search Modal */}
      <SearchBox isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}