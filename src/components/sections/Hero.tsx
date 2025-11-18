'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { HeroSectionProps } from '@/types/portfolio';

const Hero: React.FC<HeroSectionProps> = ({ className = '', id = 'hero' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={id}
      className={`
        relative min-h-screen flex items-center justify-center
        bg-gradient-to-br from-neutral-50 to-white dark:from-black dark:to-neutral-950
        ${className}
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(102,126,234,0.15)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Main Headline */}
        <h1
          className={`
            mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
            font-bold leading-tight tracking-tight
            text-neutral-900 dark:text-white
            transition-all duration-1000 transform
            ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }
          `}
          style={{ transitionDelay: '200ms' }}
        >
          I design clear, scalable{' '}
          <span className="gradient-text">digital products</span>
          <br />
          that teams can build fast.
        </h1>

        {/* Subheading */}
        <p
          className={`
            mb-12 text-lg sm:text-xl lg:text-2xl
            leading-relaxed text-neutral-600 dark:text-neutral-400
            max-w-3xl mx-auto
            transition-all duration-1000 transform
            ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }
          `}
          style={{ transitionDelay: '400ms' }}
        >
          Product Designer specializing in SaaS, dashboards, mobile apps, and design systems with clean dev-ready execution.
        </p>

        {/* Primary and Secondary CTAs */}
        <div
          className={`
            flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6
            transition-all duration-1000 transform
            ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }
          `}
          style={{ transitionDelay: '600ms' }}
        >
          <Button
            variant="gradient"
            size="lg"
            href="#featured-work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#featured-work');
            }}
            className="w-full sm:w-auto px-8 py-4 text-lg shadow-xl hover:shadow-2xl"
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="#contact-cta"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact-cta');
            }}
            className="w-full sm:w-auto px-8 py-4 text-lg border-2"
          >
            Hire Me as Consultant
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`
            absolute bottom-8 left-1/2 transform -translate-x-1/2
            transition-all duration-1000
            ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }
          `}
          style={{ transitionDelay: '800ms' }}
        >
          <button
            onClick={() => scrollToSection('#featured-work')}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 backdrop-blur-sm transition-colors group"
            aria-label="Scroll down to view work"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-600 dark:text-neutral-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors scroll-indicator"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Gradient Background Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;