import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import ValueProposition from '@/components/sections/ValueProposition';
import MiniCaseStudies from '@/components/sections/MiniCaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white">
      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Work Section */}
        <FeaturedWork />

        {/* Value Proposition Section */}
        <ValueProposition />

        {/* Mini Case Studies Section */}
        <MiniCaseStudies />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact CTA Section */}
        <ContactCTA />
      </main>
    </div>
  );
}
