export interface Project {
  id: string;
  title: string;
  valueStatement: string;
  description: string;
  thumbnailUrl: string;
  caseStudyUrl: string;
  tags: string[];
  featured: boolean;
  category: 'saas' | 'dashboard' | 'mobile' | 'design-system' | 'web-app';
  impact?: {
    metric: string;
    value: string;
  };
  technologies?: string[];
  year?: number;
  client?: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface MiniCaseStudy {
  id: string;
  metric: string;
  description: string;
  project?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface SectionProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export interface HeroSectionProps extends SectionProps {}
export interface FeaturedWorkProps extends SectionProps {
  projects?: Project[];
}
export interface ValuePropositionProps extends SectionProps {
  services?: ValueProposition[];
}
export interface MiniCaseStudiesProps extends SectionProps {
  studies?: MiniCaseStudy[];
}
export interface TestimonialsProps extends SectionProps {
  testimonials?: Testimonial[];
}
export interface ContactCTAProps extends SectionProps {}

export interface PortfolioData {
  hero: {
    headline: string;
    subheading: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  featuredProjects: Project[];
  valuePropositions: ValueProposition[];
  miniCaseStudies: MiniCaseStudy[];
  testimonials: Testimonial[];
  contact: {
    heading: string;
    cta: string;
  };
}