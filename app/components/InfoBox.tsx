import { LucideIcon } from 'lucide-react';

interface InfoBoxProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
}

const styles = {
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-900 dark:text-blue-100',
    text: 'text-blue-800 dark:text-blue-200'
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    title: 'text-green-900 dark:text-green-100',
    text: 'text-green-800 dark:text-green-200'
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
    title: 'text-yellow-900 dark:text-yellow-100',
    text: 'text-yellow-800 dark:text-yellow-200'
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-900 dark:text-red-100',
    text: 'text-red-800 dark:text-red-200'
  }
};

export default function InfoBox({ type, title, children, icon: Icon }: InfoBoxProps) {
  const style = styles[type];
  
  return (
    <div className={`${style.bg} border ${style.border} rounded-lg p-6`}>
      <div className="flex items-start">
        <Icon className={`h-5 w-5 ${style.icon} mt-0.5 mr-3 flex-shrink-0`} />
        <div>
          <h3 className={`text-lg font-medium ${style.title} mb-2`}>
            {title}
          </h3>
          <div className={style.text}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
