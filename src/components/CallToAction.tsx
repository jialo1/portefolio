'use client';

import { useBookingModalStore } from '@/store/useBookingModalStore';

export default function CallToAction() {
  const { openModal } = useBookingModalStore();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 dark:from-primary dark:via-accent-purple dark:to-accent-blue relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="accent-circle accent-circle-1"></div>
      <div className="accent-circle accent-circle-2"></div>
      <div className="accent-circle accent-circle-3"></div>
      <div className="accent-circle accent-circle-4"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 dark:from-black/30 dark:via-transparent dark:to-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent-yellow/20 text-accent-yellow rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-accent-yellow/20">
            <span className="w-2 h-2 bg-accent-yellow rounded-full mr-2 animate-pulse"></span>
            Prêt à transformer votre projet ?
          </div>
          
          {/* Titre */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Commençons votre{' '}
            <span className="gradient-text">projet</span>
            <br />
            ensemble
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Réservez un appel découverte gratuit de 30 minutes pour discuter de votre projet 
            et découvrir comment je peux vous aider à atteindre vos objectifs.
          </p>
          
          {/* Avantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2">30 minutes gratuites</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Appel découverte sans engagement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Stratégie personnalisée</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Solutions adaptées à vos besoins</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Résultats rapides</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Démarrage immédiat du projet</p>
            </div>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openModal}
              className="bg-accent-yellow text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-orange transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-yellow/25"
            >
              Réserver mon appel gratuit
            </button>
            <a 
              href="/contact"
              className="bg-gray-900 dark:bg-white/10 backdrop-blur-sm text-white dark:text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 border border-gray-700 dark:border-white/20"
            >
              Voir mes tarifs
            </a>
          </div>
          
          {/* Note de confiance */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-8">
            🔒 Vos données sont protégées • Aucun engagement • Satisfaction garantie
          </p>
        </div>
      </div>
    </section>
  );
} 