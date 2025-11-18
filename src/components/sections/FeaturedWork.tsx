'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import { FeaturedWorkProps, Project } from '@/types/portfolio';

const FeaturedWork: React.FC<FeaturedWorkProps> = ({ className = '', id = 'featured-work', projects }) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sample projects data - replace with real project data
  const defaultProjects: Project[] = [
    {
      id: '1',
      title: 'SaaS Dashboard Redesign',
      valueStatement: 'Improved onboarding conversion by 46% through streamlined user experience and data-driven design decisions.',
      description: 'Complete redesign of a B2B SaaS analytics dashboard focusing on user onboarding and data visualization.',
      thumbnailUrl: '',
      caseStudyUrl: '#',
      tags: ['UI Design', 'UX Research', 'Analytics', 'SaaS'],
      featured: true,
      category: 'dashboard',
      impact: {
        metric: 'Conversion',
        value: '+46%'
      },
      technologies: ['Figma', 'React', 'TypeScript'],
      year: 2024,
      client: 'TechCorp Inc.'
    },
    {
      id: '2',
      title: 'Property Management Platform',
      valueStatement: 'Reduced complexity for 10k+ landlords through intuitive interface design and workflow optimization.',
      description: 'End-to-end redesign of property management software serving over 10,000 landlords nationwide.',
      thumbnailUrl: '',
      caseStudyUrl: '#',
      tags: ['Mobile App', 'Web Platform', 'Real Estate'],
      featured: true,
      category: 'mobile',
      impact: {
        metric: 'Active Users',
        value: '10,000+'
      },
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      year: 2023,
      client: 'PropertyPro'
    },
    {
      id: '3',
      title: 'Enterprise Design System',
      valueStatement: 'Delivered complete system adopted by 50+ developers across multiple product lines.',
      description: 'Comprehensive design system with components, guidelines, and documentation for enterprise-scale development.',
      thumbnailUrl: '',
      caseStudyUrl: '#',
      tags: ['Design System', 'Components', 'Documentation'],
      featured: true,
      category: 'design-system',
      impact: {
        metric: 'Developer Adoption',
        value: '50+'
      },
      technologies: ['Figma', 'Storybook', 'TypeScript'],
      year: 2024,
      client: 'EnterpriseCorp'
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,126,234,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Featured Work
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Showcasing SaaS and dashboard projects that deliver measurable business impact through thoughtful design.
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
        <div className="text-center mt-16 sm:mt-20">
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Want to see more projects?
          </p>
          <a
            href="#contact-cta"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact-cta');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Get in touch for the full portfolio</span>
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