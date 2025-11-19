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
        section bg-white
        ${className}
      `}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-section-heading mb-8">
            Selected Projects
          </h2>
          <p className="text-body max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A showcase of product design work across e-commerce, sustainable energy, and fintech that demonstrates measurable impact and scalable design solutions.
          </p>
        </div>

        {/* Projects Grid - 3 column desktop, 2 column tablet, 1 column mobile */}
        <div className="grid-3">
          {projectsToDisplay.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-card-index={index}
              className={`
                animate-fade-in-up
                ${visibleCards.has(index) ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: visibleCards.has(index) ? 'translateY(0)' : 'translateY(20px)'
              }}
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
          <p className="text-caption mb-8" style={{ color: 'var(--text-secondary)' }}>
            Available for freelance and consulting opportunities
          </p>
          <a
            href="#contact-cta"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact-cta');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View complete portfolio
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2 transition-transform duration-300"
              style={{ transform: 'translateX(0)' }}
            />
            <style jsx>{`
              a:hover svg {
                transform: translateX(4px);
              }
            `}</style>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;