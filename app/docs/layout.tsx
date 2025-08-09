"use client";

import { useState } from "react";
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
  Search
} from "lucide-react";

const navigation = [
  {
    title: "Introduction",
    icon: BookOpen,
    items: [
      { title: "Getting Started", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quickstart" },
    ]
  },
  {
    title: "Supervised Learning",
    icon: Layers,
    items: [
      { title: "Linear Regression", href: "/docs/supervised/linear-regression" },
      { title: "Logistic Regression", href: "/docs/supervised/logistic-regression" },
      { title: "K-Nearest Neighbors", href: "/docs/supervised/knn" },
      { title: "Support Vector Machine", href: "/docs/supervised/svm" },
      { title: "Decision Tree", href: "/docs/supervised/decision-tree" },
      { title: "Naive Bayes", href: "/docs/supervised/naive-bayes" },
      { title: "Perceptron", href: "/docs/supervised/perceptron" },
    ]
  },
  {
    title: "Unsupervised Learning",
    icon: Code,
    items: [
      { title: "K-Means Clustering", href: "/docs/unsupervised/kmeans" },
    ]
  },
  {
    title: "Utilities",
    icon: FileText,
    items: [
      { title: "Data Splitting", href: "/docs/utils/data-splitting" },
      { title: "Metrics", href: "/docs/utils/metrics" },
      { title: "Preprocessing", href: "/docs/utils/preprocessing" },
      { title: "Distance Functions", href: "/docs/utils/distances" },
    ]
  },
  {
    title: "Examples",
    icon: Code,
    items: [
      { title: "Basic Usage", href: "/docs/examples/basic" },
      { title: "Real Datasets", href: "/docs/examples/datasets" },
      { title: "Comparison Guide", href: "/docs/examples/comparison" },
      { title: "Performance Tips", href: "/docs/examples/performance" },
    ]
  }
];

interface SidebarItemProps {
  item: typeof navigation[0];
  isExpanded: boolean;
  onToggle: () => void;
  currentPath: string;
}

function SidebarItem({ item, isExpanded, onToggle, currentPath }: SidebarItemProps) {
  const Icon = item.icon;
  
  return (
    <div className="mb-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
      >
        <div className="flex items-center">
          <Icon className="w-4 h-4 mr-2" />
          {item.title}
        </div>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      {isExpanded && (
        <div className="ml-6 mt-1 space-y-1">
          {item.items.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                currentPath === subItem.href
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "Introduction": true,
    "Supervised Learning": false,
    "Unsupervised Learning": false,
    "Utilities": false,
    "Examples": false,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleItem = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
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
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <a
                href="https://github.com/vishuRizz/vishuml"
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
          fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4 pt-20 lg:pt-4 h-full overflow-y-auto">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <SidebarItem
                  key={item.title}
                  item={item}
                  isExpanded={expandedItems[item.title]}
                  onToggle={() => toggleItem(item.title)}
                  currentPath={pathname}
                />
              ))}
            </nav>
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
        <main className="flex-1 lg:pl-4 max-w-none">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
