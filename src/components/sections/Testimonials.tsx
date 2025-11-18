'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { TestimonialsProps } from '@/types/portfolio';
import { Testimonial } from '@/types/portfolio';

const Testimonials: React.FC<TestimonialsProps> = ({ className = '', id = 'testimonials', testimonials }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Sample testimonials data
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      quote: "Working with them transformed our product. Their attention to detail and user-centric approach resulted in a 40% increase in user satisfaction and significantly reduced support tickets.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Inc.",
      avatar: ""
    },
    {
      id: '2',
      quote: "They delivered a comprehensive design system that our entire development team adopted immediately. The consistency and efficiency gains have been game-changing for our roadmap.",
      author: "Michael Rodriguez",
      role: "Engineering Lead",
      company: "EnterpriseCorp",
      avatar: ""
    },
    {
      id: '3',
      quote: "Their ability to translate complex requirements into intuitive designs is exceptional. They're not just a designer, but a strategic partner who truly understands our business goals.",
      author: "Emily Johnson",
      role: "CEO",
      company: "PropertyPro",
      avatar: ""
    }
  ];

  const testimonialsToDisplay = testimonials || defaultTestimonials;

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
        relative py-24 sm:py-32 lg:py-40
        bg-neutral-50 dark:bg-neutral-950
        ${className}
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,126,234,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Hear from teams I've worked with and the impact we've created together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonialsToDisplay.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                relative p-8 bg-white dark:bg-black rounded-2xl
                border border-neutral-200 dark:border-neutral-800
                shadow-lg transition-all duration-700
                ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <blockquote className="mb-6">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author Information */}
              <div className="flex items-center">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4 flex-shrink-0">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Author Details */}
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonial.role}
                    {testimonial.company && (
                      <>
                        {' '}•{' '}
                        <span className="text-purple-600 dark:text-purple-400">
                          {testimonial.company}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`
            mt-16 text-center
            transition-all duration-1000 transform
            ${isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
            }
          `}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 text-yellow-500"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm">5-star rated</span>
            </div>
            <div className="text-sm">•</div>
            <div className="text-sm">50+ successful projects</div>
            <div className="text-sm">•</div>
            <div className="text-sm">3+ years partnership average</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;