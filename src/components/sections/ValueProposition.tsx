'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { ValuePropositionProps } from '@/types/portfolio';
import { ValueProposition as ValuePropositionType } from '@/types/portfolio';

const ValueProposition: React.FC<ValuePropositionProps> = ({ className = '', id = 'value-proposition', services }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Default services data
  const defaultServices: ValuePropositionType[] = [
    {
      id: '1',
      title: 'UX decision-making based on clarity, logic, and constraints',
      description: 'Making informed design choices that balance user needs, business goals, and technical constraints.'
    },
    {
      id: '2',
      title: 'Clean UI that ensures fast development',
      description: 'Creating designs that developers can implement efficiently without sacrificing quality or user experience.'
    },
    {
      id: '3',
      title: 'Scalable components & design systems',
      description: 'Building reusable design foundations that grow with your product and maintain consistency across teams.'
    },
    {
      id: '4',
      title: 'End-to-end workflow from discovery to dev handoff',
      description: 'Managing the complete design process from research and concept to detailed specifications and implementation support.'
    },
    {
      id: '5',
      title: 'Rapid prototyping and iteration',
      description: 'Quickly testing ideas and gathering feedback to validate solutions before investing in full development.'
    }
  ];

  const servicesToDisplay = services || defaultServices;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`
        section bg-white
        ${className}
      `}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            I help teams ship better products with:
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A comprehensive approach to product design that combines strategic thinking with practical execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {servicesToDisplay.map((service, index) => (
            <div
              key={service.id}
              className={`
                flex items-start space-x-4
                transition-all duration-700 transform
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  {index === 0 && (
                    // Brain icon for decision-making
                    <>
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5c0 .74-.33 1.4-.84 1.85L8.5 10.5v5a2.5 2.5 0 1 1-2 0v-5.5L3.34 6.35A2.5 2.5 0 0 1 5.5 2h4z" />
                      <path d="M14.5 10c.83 0 1.5.67 1.5 1.5v3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-3.5c0-.83.67-1.5 1.5-1.5z" />
                    </>
                  )}
                  {index === 1 && (
                    // Code/icon for clean UI
                    <>
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </>
                  )}
                  {index === 2 && (
                    // Grid icon for scalable components
                    <>
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </>
                  )}
                  {index === 3 && (
                    // Workflow icon
                    <>
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </>
                  )}
                  {index === 4 && (
                    // Rocket icon for rapid prototyping
                    <>
                      <path d="M4.5 16.5c0 1.5 1.5 3 3 3l6-6-3-3-6 6z" />
                      <path d="M13.5 6.5l6 6" />
                      <path d="M16 16l2 2 4-4-2-2-4 4z" />
                      <path d="M8.5 8.5l3 3" />
                    </>
                  )}
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Approach Highlights */}
        <div
          className={`
            mt-16 p-8 bg-white dark:bg-black rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg
            transition-all duration-1000 transform
            ${isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
            }
          `}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              My Design Philosophy
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Great design isn't just about making things look beautiful—it's about solving real problems effectively.
              I believe in creating products that are not only visually appealing but also functional, accessible, and delightful to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;