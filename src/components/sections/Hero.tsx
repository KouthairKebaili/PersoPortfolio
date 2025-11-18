'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import type { HeroSectionProps } from '@/types/portfolio';

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
        bg-white dark:bg-black
        overflow-hidden
        ${className}
      `}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-8 sm:space-y-12">
          {/* Main Headline */}
          <h1
            className={`
              text-display font-black text-neutral-900 dark:text-white
              transition-all duration-700 animate-slide-up
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }
            `}
            style={{ transitionDelay: '100ms' }}
          >
            Design products
            <br />
            <span className="gradient-text">that work.</span>
          </h1>

          {/* Subheading */}
          <p
            className={`
              text-body text-neutral-600 dark:text-neutral-400
              max-w-2xl mx-auto
              transition-all duration-700 animate-slide-up
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }
            `}
            style={{ transitionDelay: '200ms' }}
          >
            Senior Product Designer helping SaaS companies build intuitive, scalable digital experiences that users love and teams can ship quickly.
          </p>

          {/* Stats/Experience Row */}
          <div
            className={`
              flex flex-wrap justify-center gap-8 sm:gap-12
              transition-all duration-700 animate-slide-up
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }
            `}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="text-center">
              <div className="text-headline font-bold text-neutral-900 dark:text-white">8+</div>
              <div className="text-caption text-neutral-600 dark:text-neutral-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-headline font-bold text-neutral-900 dark:text-white">50+</div>
              <div className="text-caption text-neutral-600 dark:text-neutral-400">Products Designed</div>
            </div>
            <div className="text-center">
              <div className="text-headline font-bold text-neutral-900 dark:text-white">10M+</div>
              <div className="text-caption text-neutral-600 dark:text-neutral-400">Users Impacted</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div
            className={`
              transition-all duration-700 animate-slide-up
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }
            `}
            style={{ transitionDelay: '400ms' }}
          >
            <Button
              variant="gradient"
              size="lg"
              href="#featured-work"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#featured-work');
              }}
              className="text-lg font-semibold px-8 py-4"
            >
              View My Work
            </Button>
          </div>

          {/* Expertise Tags */}
          <div
            className={`
              flex flex-wrap justify-center gap-3
              transition-all duration-700 animate-slide-up
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }
            `}
            style={{ transitionDelay: '500ms' }}
          >
            {['SaaS Design', 'Design Systems', 'Mobile Apps', 'Dashboards', 'User Research', 'Prototyping'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/3 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;