'use client';

import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <Mission />
      <Services />
      <About />
      <Reviews />
      <CallToAction />
    </div>
  );
} 
