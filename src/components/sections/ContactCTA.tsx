'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { ContactCTAProps } from '@/types/portfolio';

const ContactCTA: React.FC<ContactCTAProps> = ({ className = '', id = 'contact-cta' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Trigger entrance animation when component comes into view
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoUrl = `mailto:hello@example.com?subject=Design Project Inquiry&body=Hi! I'm interested in discussing a design project.`;
    window.open(mailtoUrl);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const mailtoUrl = `mailto:hello@example.com?subject=Design Project Inquiry&body=Hi! I'm ${email} and I'm interested in discussing a design project.`;
      window.open(mailtoUrl);
    }
  };

  return (
    <section
      id={id}
      className={`
        relative py-24 sm:py-32 lg:py-40
        bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900
        overflow-hidden
        ${className}
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Main Content */}
        <div
          className={`
            transition-all duration-1000 transform
            ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
            }
          `}
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
              great
            </span>
            {' '}together.
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your product with exceptional design? I'm currently available for select projects and consulting opportunities.
          </p>

          {/* Primary CTA Button */}
          <div className="mb-12">
            <Button
              variant="secondary"
              size="xl"
              href="mailto:hello@example.com"
              onClick={handleContactClick}
              className="bg-white text-purple-900 hover:bg-purple-50 border-white shadow-2xl hover:shadow-purple-500/25 px-12 py-5 text-xl font-semibold"
              target="_self"
            >
              Contact Me
            </Button>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-purple-100">
            <a
              href="mailto:hello@example.com"
              className="flex items-center hover:text-white transition-colors group"
              onClick={(e) => {
                e.preventDefault();
                window.open('mailto:hello@example.com');
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mr-2 group-hover:scale-110 transition-transform"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>hello@example.com</span>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 group-hover:scale-110 transition-transform"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://dribbble.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 group-hover:scale-110 transition-transform"
              >
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
              </svg>
              <span>Dribbble</span>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className={`
            mt-16 pt-8 border-t border-purple-700/30
            transition-all duration-1000 delay-300
            ${isVisible
              ? 'opacity-100'
              : 'opacity-0'
            }
          `}
        >
          <p className="text-purple-200 text-sm">
            Available for freelance projects • Consulting • Design systems • Team workshops
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;