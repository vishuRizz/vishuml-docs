import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language = 'python', title, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors"
            title={copied ? "Copied!" : "Copy code"}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
      <div className="relative">
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
            title={copied ? "Copied!" : "Copy code"}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        )}
        <pre className={`p-4 text-sm text-gray-300 overflow-x-auto ${showLineNumbers ? 'line-numbers' : ''}`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
