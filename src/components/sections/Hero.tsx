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
        bg-white overflow-hidden
        section
        ${className}
      `}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(to right, #111111 1px, transparent 1px),
              linear-gradient(to bottom, #111111 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container text-center">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Main Headline */}
            <h1
              className={`
                text-hero-headline text-center animate-fade-in-up
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transitionDelay: '100ms',
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              Senior Product Designer
              <br />
              <span style={{ background: 'var(--accent-grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                creating products that work
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`
                text-hero-subheadline text-center animate-fade-in-up
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transitionDelay: '200ms',
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              Helping SaaS companies build intuitive, scalable digital experiences that users love and teams can ship quickly.
            </p>

            {/* Primary CTA */}
            <div
              className={`
                animate-fade-in-up
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transitionDelay: '300ms',
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <a
                href="#featured-work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#featured-work');
                }}
                className="btn-primary"
              >
                View My Work
              </a>
            </div>

            {/* Expertise Tags */}
            <div
              className={`
                flex flex-wrap justify-center gap-2
                animate-fade-in-up
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transitionDelay: '400ms',
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {['SaaS Design', 'Design Systems', 'Mobile Apps', 'Dashboards', 'User Research', 'Prototyping'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-caption font-medium"
                  style={{
                    background: 'var(--bg-gradient)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div
        className="absolute top-16 right-16 w-32 h-32 opacity-20"
        style={{
          background: 'var(--accent-grad)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 4s ease-in-out infinite'
        }}
      />
      <div
        className="absolute bottom-16 left-16 w-48 h-48 opacity-15"
        style={{
          background: 'var(--accent-grad)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite reverse'
        }}
      />
    </section>
  );
};

export default Hero;