'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { ProjectCardProps } from '@/types/portfolio';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`
        card ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Thumbnail */}
      <div className="relative h-64 overflow-hidden bg-gray-50 card-image">
        {project.thumbnailUrl ? (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover"
            style={{
              transform: isHovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.3s var(--ease-in-out)'
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 flex items-center justify-center"
              style={{
                background: 'var(--accent-grad)',
                opacity: 0.1,
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-start)"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span
            className="px-3 py-1 text-caption font-semibold"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--accent-start)'
            }}
          >
            {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3
          className="text-body font-semibold mb-3"
          style={{
            color: 'var(--text-primary)',
            transition: 'color 0.3s var(--ease-in-out)'
          }}
        >
          {project.title}
        </h3>

        {/* Value Statement */}
        <p
          className="text-body mb-6 line-clamp-3"
          style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.5
          }}
        >
          {project.valueStatement}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-caption"
                style={{
                  background: 'var(--bg-gradient)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-secondary)',
                  padding: '0.5rem 0.75rem'
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span
                className="text-caption"
                style={{
                  background: 'var(--bg-gradient)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-secondary)',
                  padding: '0.5rem 0.75rem'
                }}
              >
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Impact Metric */}
        {project.impact && (
          <div className="mb-6 p-3" style={{ background: 'var(--bg-gradient)', borderRadius: 'var(--radius-sm)' }}>
            <div className="flex items-center space-x-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-start)"
                strokeWidth="2"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span className="text-caption font-semibold" style={{ color: 'var(--text-primary)' }}>
                {project.impact.metric}: <span style={{ color: 'var(--accent-start)' }}>{project.impact.value}</span>
              </span>
            </div>
          </div>
        )}

        {/* View Case Study Link */}
        <a
          href={project.caseStudyUrl}
          className="inline-flex items-center font-semibold group/link"
          style={{
            color: 'var(--accent-start)',
            transition: 'color 0.3s var(--ease-in-out)'
          }}
          target={project.caseStudyUrl.startsWith('http') ? '_blank' : '_self'}
          rel={project.caseStudyUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <span className="mr-2">View project</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-300"
            style={{ transform: 'translateX(0)' }}
          />
          <style jsx>{`
            .group/link:hover svg {
              transform: translateX(4px);
            }
          `}</style>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;