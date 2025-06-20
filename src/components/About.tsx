'use client';

import Link from 'next/link';
import { useBookingModalStore } from '@/store/useBookingModalStore';

export default function About() {
  const { openModal } = useBookingModalStore();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenu texte */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-900 mb-6">
                À propos de{' '}
                <span className="gradient-text">Tribe On</span>
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-700 mb-6 leading-relaxed">
                Créateur digital passionné avec plus de 5 ans d'expérience, je combine créativité, 
                stratégie et technologie pour donner vie à vos projets les plus ambitieux.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-700 mb-8 leading-relaxed">
                Spécialisé en branding, marketing digital, développement web et coaching, 
                j'accompagne entrepreneurs et entreprises dans leur transformation digitale 
                avec une approche personnalisée et des résultats mesurables.
              </p>

              {/* Compétences */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-300 font-medium">Branding</span>
                    <span className="text-accent-yellow font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-yellow to-accent-orange h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-300 font-medium">Marketing</span>
                    <span className="text-accent-orange font-bold">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-orange to-accent-red h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-300 font-medium">Développement</span>
                    <span className="text-accent-red font-bold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-red to-accent-purple h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-300 font-medium">Coaching</span>
                    <span className="text-accent-purple font-bold">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-purple to-accent-blue h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openModal}
                  className="btn-primary"
                >
                  Commencer un projet
                </button>
                <Link 
                  href="/portfolio"
                  className="btn-secondary"
                >
                  Voir mes projets
                </Link>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="relative">
              <div className="relative z-10">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-primary via-accent-purple to-accent-blue rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4">🌐</div>
                      <div className="text-2xl font-bold">Tribe On</div>
                      <div className="text-lg opacity-80">Créateur Digital</div>
                    </div>
                  </div>
                </div>
                
                {/* Cercles décoratifs */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-orange/20 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-accent-red/20 rounded-full blur-lg"></div>
              </div>
              
              {/* Badges flottants */}
              <div className="absolute -top-6 -left-6 bg-white/90 dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-yellow">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-orange">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Années</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 