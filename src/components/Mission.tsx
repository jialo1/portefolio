'use client';

import Link from 'next/link';

export default function Mission() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ma{' '}
              <span className="gradient-text">mission</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transformer vos idées en expériences digitales exceptionnelles qui marquent les esprits et génèrent des résultats concrets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Créer des expériences digitales qui inspirent, engagent et transforment. 
                Chaque projet est une opportunité d'innover et de repousser les limites de la créativité.
              </p>
            </div>

            {/* Valeurs */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Valeurs</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passion, excellence et authenticité. Je m'engage à livrer des résultats exceptionnels 
                tout en maintenant des relations durables basées sur la confiance et la transparence.
              </p>
            </div>

            {/* Approche */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-red to-accent-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Approche</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Une méthodologie centrée sur l'humain, combinant créativité et stratégie. 
                Chaque solution est personnalisée pour répondre aux besoins uniques de votre projet.
              </p>
            </div>
          </div>

          {/* Citation inspirante */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 italic max-w-4xl mx-auto">
              "La créativité est l'intelligence qui s'amuse."
              <footer className="text-lg text-accent-yellow mt-4 font-medium">- Albert Einstein</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
} 