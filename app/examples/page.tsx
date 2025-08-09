import Link from "next/link";
import { Code, Download, Play, BookOpen } from "lucide-react";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-blue-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">VishuML</span>
              </Link>
            </div>
            <nav className="flex space-x-8">
              <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/examples" className="text-blue-600 dark:text-blue-400 font-medium">
                Examples
              </Link>
              <a href="https://github.com/vishuRizz/vishuml" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            VishuML Examples
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore real-world examples and tutorials to get the most out of VishuML. 
            From basic usage to advanced techniques, these examples will help you master machine learning from scratch.
          </p>
        </div>

        {/* Quick Start Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Quick Start Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Play className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Linear Regression Basics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn the fundamentals of linear regression with a simple house price prediction example.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 mb-4">
                <code className="text-sm text-gray-300">
                  {`from vishuml import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)`}
                </code>
              </div>
              <Link href="/docs/supervised/linear-regression" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                View Tutorial <Play className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Classification with Iris</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build a flower classification model using the classic iris dataset with multiple algorithms.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 mb-4">
                <code className="text-sm text-gray-300">
                  {`from vishuml import LogisticRegression
X, y = ds.load_iris()
model.fit(X, y)`}
                </code>
              </div>
              <Link href="/docs/examples/datasets" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                View Tutorial <Play className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">K-Means Clustering</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover hidden patterns in your data using unsupervised learning with K-Means clustering.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 mb-4">
                <code className="text-sm text-gray-300">
                  {`from vishuml import KMeans
kmeans = KMeans(k=3)
labels = kmeans.fit_predict(X)`}
                </code>
              </div>
              <Link href="/docs/unsupervised/kmeans" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                View Tutorial <Play className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Algorithm Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Algorithms by Category</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Supervised Learning */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Supervised Learning</h3>
              <div className="space-y-4">
                {[
                  { name: "Linear Regression", desc: "Predict continuous values", href: "/docs/supervised/linear-regression" },
                  { name: "Logistic Regression", desc: "Binary classification", href: "/docs/supervised/logistic-regression" },
                  { name: "K-Nearest Neighbors", desc: "Classification & regression", href: "/docs/supervised/knn" },
                  { name: "Support Vector Machine", desc: "Linear & RBF kernels", href: "/docs/supervised/svm" },
                  { name: "Decision Tree", desc: "CART algorithm", href: "/docs/supervised/decision-tree" },
                  { name: "Naive Bayes", desc: "Gaussian classifier", href: "/docs/supervised/naive-bayes" },
                  { name: "Perceptron", desc: "Linear binary classifier", href: "/docs/supervised/perceptron" }
                ].map((item, index) => (
                  <Link key={index} href={item.href} className="block p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                      <Play className="h-4 w-4 text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Unsupervised Learning & Utils */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Unsupervised Learning & Utilities</h3>
              <div className="space-y-4">
                <Link href="/docs/unsupervised/kmeans" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">K-Means Clustering</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Data clustering algorithm</p>
                    </div>
                    <Play className="h-4 w-4 text-gray-400" />
                  </div>
                </Link>
                
                <div className="pt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Utility Functions</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Data Splitting", desc: "train_test_split", href: "/docs/utils/data-splitting" },
                      { name: "Evaluation Metrics", desc: "accuracy, R², MSE", href: "/docs/utils/metrics" },
                      { name: "Preprocessing", desc: "Normalization, scaling", href: "/docs/utils/preprocessing" },
                      { name: "Distance Functions", desc: "Euclidean, Manhattan", href: "/docs/utils/distances" }
                    ].map((item, index) => (
                      <Link key={index} href={item.href} className="block p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                          </div>
                          <Play className="h-3 w-3 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jupyter Notebooks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Jupyter Notebook Examples</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-8">
            <div className="flex items-start">
              <Download className="h-8 w-8 text-orange-600 dark:text-orange-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Interactive Notebooks Available
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Download and run these Jupyter notebooks to see VishuML in action with real datasets and detailed explanations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "linear_regression_example.ipynb",
                    "logistic_regression_example.ipynb", 
                    "knn_example.ipynb",
                    "svm_example.ipynb",
                    "decision_tree_example.ipynb",
                    "naive_bayes_example.ipynb",
                    "perceptron_example.ipynb",
                    "kmeans_example.ipynb"
                  ].map((notebook, index) => (
                    <div key={index} className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <Code className="h-4 w-4 text-orange-600 dark:text-orange-400 mr-3" />
                      <span className="text-sm font-mono text-gray-900 dark:text-white">{notebook}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a 
                    href="https://github.com/vishuRizz/vishuml/tree/main/examples"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download All Notebooks
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section>
          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Install VishuML and start building machine learning models from scratch. 
              Follow our comprehensive documentation and examples to master ML fundamentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/docs/installation"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Install VishuML
              </Link>
              <Link 
                href="/docs/quickstart"
                className="inline-flex items-center px-6 py-3 border border-blue-300 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Quick Start Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
