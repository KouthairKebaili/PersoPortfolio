'use client';

import React, { useState, useEffect } from 'react';
import type { NavigationItem } from '@/types/portfolio';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems: NavigationItem[] = [
    { id: 'work', label: 'Work', href: '#featured-work' },
    { id: 'about', label: 'About', href: '#value-proposition' },
    { id: 'contact', label: 'Contact', href: '#contact-cta' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Determine active section based on scroll position
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href),
      }));

      for (const section of sections) {
        if (section.element) {
          const { top, height } = section.element.getBoundingClientRect();
          if (top <= 100 && top + height > 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Navigation Header */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'glass-effect shadow-apple py-3'
            : 'bg-transparent py-6'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <a
              href="#hero"
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
            >
              Product Designer
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    relative text-sm font-medium transition-colors
                    hover:text-purple-600 dark:hover:text-purple-400
                    ${activeSection === item.id
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-neutral-600 dark:text-neutral-400'
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center group"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span
                className={`
                  block w-full h-0.5 bg-current transition-all duration-300
                  ${isOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'}
                `}
              />
              <span
                className={`
                  block w-full h-0.5 bg-current transition-all duration-300 my-1
                  ${isOpen ? 'opacity-0' : 'opacity-100'}
                `}
              />
              <span
                className={`
                  block w-full h-0.5 bg-current transition-all duration-300
                  ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'}
                `}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-black z-50 md:hidden animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-xl font-bold gradient-text">Menu</span>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`
                        block text-lg font-medium transition-colors
                        hover:text-purple-600 dark:hover:text-purple-400
                        ${activeSection === item.id
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-neutral-600 dark:text-neutral-400'
                        }
                      `}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-neutral-200 dark:border-neutral-800">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Available for freelance and consulting work
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;