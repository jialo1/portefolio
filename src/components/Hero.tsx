'use client';

import Link from 'next/link';
import { useBookingModalStore } from '@/store/useBookingModalStore';

export default function Hero() {
  const { openModal } = useBookingModalStore();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 dark:from-gray-900 dark:via-primary dark:to-gray-900">
      {/* Cercles décoratifs */}
      <div className="accent-circle accent-circle-1"></div>
      <div className="accent-circle accent-circle-2"></div>
      <div className="accent-circle accent-circle-3"></div>
      <div className="accent-circle accent-circle-4"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 dark:from-black/50 dark:via-transparent dark:to-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent-yellow/20 dark:bg-accent-yellow/10 text-accent-yellow rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-accent-yellow/20">
            <span className="w-2 h-2 bg-accent-yellow rounded-full mr-2 animate-pulse"></span>
            Digital Tribe - Créateur Digital & Entrepreneur
          </div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight title-shadow">
            <span className="block mb-2">
              <span className="gradient-text">Tribe On</span> - Créateur
            </span>
            <span className="block">Digital & Entrepreneur</span>
          </h1>
          
          {/* Sous-titre */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200/90 mb-10 leading-relaxed text-shadow">
            Tribe On donne vie à vos projets avec créativité et expertise.
            Transformons ensemble vos idées en expériences numériques
            exceptionnelles.
          </p>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={openModal}
              className="btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-accent-yellow/25 transition-all duration-300 transform hover:scale-105"
            >
              Commencer un projet
            </button>
            <Link 
              href="/portfolio"
              className="btn-secondary text-lg px-8 py-4 border-white/30 dark:border-white/30 text-white dark:text-white hover:bg-white hover:text-gray-900 dark:hover:bg-white dark:hover:text-gray-900"
            >
              Voir mes réalisations
            </Link>
          </div>
          
          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-yellow mb-2">50+</div>
              <div className="text-gray-100 dark:text-gray-300 text-sm md:text-base">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">30+</div>
              <div className="text-gray-100 dark:text-gray-300 text-sm md:text-base">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">5+</div>
              <div className="text-gray-100 dark:text-gray-300 text-sm md:text-base">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">100%</div>
              <div className="text-gray-100 dark:text-gray-300 text-sm md:text-base">Taux de réussite</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 dark:bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 