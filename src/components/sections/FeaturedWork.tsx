'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import type { FeaturedWorkProps } from '@/types/portfolio';
import { Project } from '@/types/portfolio';

const FeaturedWork: React.FC<FeaturedWorkProps> = ({ className = '', id = 'featured-work', projects }) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sample projects data based on your LinkedIn experience
  const defaultProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform Design System',
      valueStatement: 'Led design system creation for multi-brand e-commerce platform, serving 10M+ users across 50+ brands globally.',
      description: 'Comprehensive design system with component library, design tokens, and workflow documentation adopted across product teams.',
      thumbnailUrl: '',
      caseStudyUrl: '#',
      tags: ['Design System', 'Component Library', 'Figma', 'Design Tokens'],
      featured: true,
      category: 'design-system',
      impact: {
        metric: 'Brands Supported',
        value: '50+'
      },
      technologies: ['Figma', 'React', 'Design Tokens'],
      year: 2023,
      client: 'ManoMano'
    },
    {
      id: '2',
      title: 'Sustainable Energy Platform',
      valueStatement: 'Designed comprehensive mobile and web platform for renewable energy management across 8 European countries.',
      description: 'End-to-end product design for B2B SaaS platform connecting energy producers with consumers through innovative marketplace.',
      thumbnailUrl: '',
      caseStudyUrl: '#',
      tags: ['Mobile App', 'SaaS', 'Dashboard', 'Energy Tech'],
      featured: true,
      category: 'mobile',
      impact: {
        metric: 'Countries',
        value: '8'
      },
      technologies: ['React Native', 'Figma', 'Analytics'],
      year: 2022,
      client: 'EkWateur'
    },
    {
      id: '3',
      title: 'Banking CX Platform',
      valueStatement: 'Redesigned customer experience platform for major banking group, improving user satisfaction and digital adoption.',
      description: 'Mobile-first design approach for banking services serving over 3M customers with focus on accessibility and usability.',
      thumbnailUrl: '',
      caseStudyUrl: '#',
      tags: ['FinTech', 'Mobile Banking', 'CX Design', 'Accessibility'],
      featured: true,
      category: 'dashboard',
      impact: {
        metric: 'Customer Base',
        value: '3M+'
      },
      technologies: ['Figma', 'Mobile Banking', 'iOS & Android'],
      year: 2021,
      client: 'BPCE'
    }
  ];

  const projectsToDisplay = projects || defaultProjects;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0', 10);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(cardIndex));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all card elements
    cardRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      className={`
        relative py-24 sm:py-32 lg:py-40
        bg-white dark:bg-black
        ${className}
      `}
    >
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-headline font-black text-neutral-900 dark:text-white mb-6">
            Selected Projects
          </h2>
          <p className="text-body text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A showcase of product design work across e-commerce, sustainable energy, and fintech that demonstrates measurable impact and scalable design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsToDisplay.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-card-index={index}
              className={`
                transition-all duration-700 transform
                ${visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard
                project={project}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* View All Work CTA */}
        <div className="text-center mt-20">
          <p className="text-caption text-neutral-500 dark:text-neutral-400 mb-8">
            Available for freelance and consulting opportunities
          </p>
          <a
            href="#contact-cta"
            className="inline-flex items-center text-accent dark:text-accent-light font-semibold hover:text-accent-dark dark:hover:text-accent transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact-cta');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>View complete portfolio</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;