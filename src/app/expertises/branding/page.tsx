'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BrandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Branding & Stratégie
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Pose les bases d'une marque claire, culturelle et ambitieuse,
              pensée pour durer et se faire remarquer.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-light mb-8">Notre approche du branding</h2>
              
              <p className="text-gray-600 mb-8">
                Nous créons des marques qui ont du sens, du style et surtout, 
                un vrai pouvoir d'attraction. Notre approche combine stratégie, 
                créativité et culture pour faire émerger l'unicité de votre marque.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Ce que nous créons</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Identité visuelle complète</li>
                    <li>• Stratégie de marque</li>
                    <li>• Positionnement unique</li>
                    <li>• Guide de style</li>
                    <li>• Ton de voix</li>
                    <li>• Storytelling</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Notre processus</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>1. Analyse & Discovery</li>
                    <li>2. Stratégie & Positionnement</li>
                    <li>3. Conception créative</li>
                    <li>4. Développement & Itération</li>
                    <li>5. Finalisation & Guidelines</li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg transition-colors"
                >
                  Discutons de votre projet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 