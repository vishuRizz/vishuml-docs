"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon, ChevronDown, ChevronRight, ArrowUp } from 'lucide-react';

interface NavItem {
  title: string;
  href?: string;
  icon?: LucideIcon;
  sections?: {
    id: string;
    title: string;
  }[];
  items?: {
    title: string;
    href: string;
    sections?: {
      id: string;
      title: string;
    }[];
  }[];
}

interface ScrollSpyNavProps {
  items: NavItem[];
}

export default function ScrollSpyNav({ items }: ScrollSpyNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Introduction']));
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px'
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Auto-expand the section containing the current page
  useEffect(() => {
    const currentSection = items.find(item => 
      item.href === pathname || item.items?.some(subItem => subItem.href === pathname)
    );
    
    if (currentSection && !expandedSections.has(currentSection.title)) {
      setExpandedSections(prev => new Set([...prev, currentSection.title]));
    }
  }, [pathname, items, expandedSections]);

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item, index) => {
      const isCurrentPage = item.href === pathname;
      const hasCurrentSubPage = item.items?.some(subItem => subItem.href === pathname);
      const Icon = item.icon;
      const isExpanded = expandedSections.has(item.title);

      return (
        <div key={index} className="mb-2">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex items-center py-1.5 px-2 rounded-md transition-colors text-sm ${
                isCurrentPage
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {Icon && <Icon className="w-3 h-3 mr-2" />}
              {item.title}
            </Link>
          ) : (
            <div className="flex items-center justify-between py-1.5 px-2 text-sm font-medium text-gray-900 dark:text-white">
              <div className="flex items-center">
                {Icon && <Icon className="w-3 h-3 mr-2" />}
                {item.title}
              </div>
              {item.items && (
                <button
                  onClick={() => {
                    const newExpanded = new Set(expandedSections);
                    if (isExpanded) {
                      newExpanded.delete(item.title);
                    } else {
                      newExpanded.add(item.title);
                    }
                    setExpandedSections(newExpanded);
                  }}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                </button>
              )}
            </div>
          )}

          {isCurrentPage && item.sections && (
            <div className="ml-4 mt-1 space-y-0.5 border-l border-gray-200 dark:border-gray-700">
              {item.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className={`block pl-3 py-0.5 text-xs transition-colors cursor-pointer ${
                    activeSection === section.id
                      ? 'text-blue-700 dark:text-blue-300 border-l-2 border-blue-500 dark:border-blue-400 -ml-px'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
          )}

          {item.items && (isExpanded || hasCurrentSubPage) && (
            <div className="ml-2 mt-1 space-y-0.5">
              {item.items.map((subItem, subIndex) => {
                const isCurrentSubPage = subItem.href === pathname;
                return (
                  <div key={subIndex}>
                    <Link
                      href={subItem.href}
                      className={`block py-1 px-2 rounded-md text-xs transition-colors ${
                        isCurrentSubPage
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {subItem.title}
                    </Link>
                    {isCurrentSubPage && subItem.sections && (
                      <div className="ml-4 mt-1 space-y-0.5 border-l border-gray-200 dark:border-gray-700">
                        {subItem.sections.map((section) => (
                          <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(section.id);
                              if (element) {
                                element.scrollIntoView({ 
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                              }
                            }}
                            className={`block pl-3 py-0.5 text-xs transition-colors cursor-pointer ${
                              activeSection === section.id
                                ? 'text-blue-700 dark:text-blue-300 border-l-2 border-blue-500 dark:border-blue-400 -ml-px'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                            }`}
                          >
                            {section.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="h-full flex flex-col">
      <nav className="space-y-1 flex-1 overflow-y-auto">
        {renderNavItems(items)}
      </nav>
      <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={scrollToTop}
          className="w-full flex items-center justify-center py-2 px-3 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        >
          <ArrowUp className="w-3 h-3 mr-1" />
          Scroll to Top
        </button>
      </div>
    </div>
  );
}
