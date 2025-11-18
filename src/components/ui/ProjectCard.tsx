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
        group relative bg-white dark:bg-black rounded-xl
        border border-neutral-200 dark:border-neutral-800
        overflow-hidden transition-all duration-200 card-hover
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        {project.thumbnailUrl ? (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className={`
              object-cover transition-transform duration-300
              ${isHovered ? 'scale-105' : 'scale-100'}
            `}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent dark:text-accent-light"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-full text-xs font-semibold text-accent dark:text-accent-light">
            {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
          {project.title}
        </h3>

        {/* Value Statement */}
        <p className="text-body text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
          {project.valueStatement}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-md text-xs font-medium text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-md text-xs font-medium text-neutral-600 dark:text-neutral-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Impact Metric */}
        {project.impact && (
          <div className="mb-4 p-3 bg-accent/5 dark:bg-accent-light/5 rounded-lg border border-accent/10 dark:border-accent-light/10">
            <div className="flex items-center space-x-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent dark:text-accent-light flex-shrink-0"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                {project.impact.metric}: <span className="text-accent dark:text-accent-light">{project.impact.value}</span>
              </span>
            </div>
          </div>
        )}

        {/* View Case Study Link */}
        <a
          href={project.caseStudyUrl}
          className="inline-flex items-center text-accent dark:text-accent-light font-semibold hover:text-accent-dark dark:hover:text-accent transition-colors group/link"
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
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;