'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MiniCaseStudiesProps, MiniCaseStudy } from '@/types/portfolio';

const MiniCaseStudies: React.FC<MiniCaseStudiesProps> = ({ className = '', id = 'mini-case-studies', studies }) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Default case studies data
  const defaultStudies: MiniCaseStudy[] = [
    {
      id: '1',
      metric: '46%',
      description: 'Reduced task completion time through streamlined user experience',
      project: 'SaaS Dashboard Redesign'
    },
    {
      id: '2',
      metric: '10k+',
      description: 'Monthly active users after redesign and feature optimization',
      project: 'Analytics Dashboard'
    },
    {
      id: '3',
      metric: '100%',
      description: 'Developer adoption rate for comprehensive design system',
      project: 'Enterprise Design System'
    },
    {
      id: '4',
      metric: '2.5x',
      description: 'Increase in user engagement through mobile-first redesign',
      project: 'Property Management App'
    },
    {
      id: '5',
      metric: '85%',
      description: 'Reduction in customer support tickets with improved UX',
      project: 'E-commerce Platform'
    },
    {
      id: '6',
      metric: '60%',
      description: 'Faster time-to-market with reusable component library',
      project: 'SaaS Product Suite'
    }
  ];

  const studiesToDisplay = studies || defaultStudies;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const itemIndex = parseInt(entry.target.getAttribute('data-item-index') || '0', 10);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(itemIndex));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all study items
    itemRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id={id}
      className={`
        relative py-24 sm:py-32 lg:py-40
        bg-white dark:bg-black
        overflow-hidden
        ${className}
      `}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Impact & Results
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Measurable improvements that demonstrate the value of thoughtful design and user-centered approaches.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {studiesToDisplay.map((study, index) => (
            <div
              key={study.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-item-index={index}
              className={`
                p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20
                rounded-2xl border border-purple-200/50 dark:border-purple-800/30
                transition-all duration-700 transform hover:scale-105
                ${visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Metric */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">
                {study.metric}
              </div>

              {/* Description */}
              <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-3 leading-relaxed">
                {study.description}
              </p>

              {/* Project Name */}
              {study.project && (
                <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-2 flex-shrink-0"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="truncate">{study.project}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex items-center justify-center p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-purple-600 dark:text-purple-400 mr-3"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="text-purple-900 dark:text-purple-100 font-medium">
              Data-driven design decisions that deliver measurable business value
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl" />
    </section>
  );
};

export default MiniCaseStudies;