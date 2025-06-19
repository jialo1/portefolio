'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
      {/* Effet de gradient décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-secondary opacity-75"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            Créons ensemble votre
            <span className="block mt-2 text-accent">identité digitale</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Développeur créatif spécialisé dans la création d'expériences web uniques et mémorables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-accent text-primary font-medium rounded-full hover:bg-accent-light transition-all transform hover:scale-105"
            >
              Démarrer un projet
            </a>
            <a 
              href="/portfolio" 
              className="px-8 py-4 bg-secondary text-white font-medium rounded-full hover:bg-secondary-light transition-all transform hover:scale-105"
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 