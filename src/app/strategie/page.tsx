'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useBookingModalStore } from '@/store/useBookingModalStore';

export default function StrategiePage() {
  const { openModal } = useBookingModalStore();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        {/* Cercles décoratifs inspirés du logo */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-accent-purple/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-yellow/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium px-4 py-2 bg-accent-green/20 text-accent-green rounded-full mb-6">
              Stratégie
            </span>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Stratégie
              <span className="block mt-2 bg-gradient-to-r from-accent-green via-accent-blue to-accent-purple bg-clip-text text-transparent">
                Digitale
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Développe une stratégie digitale sur-mesure pour atteindre tes objectifs et faire grandir ton entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light text-primary mb-8">Ma Philosophie</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Je crois que chaque projet digital doit être pensé comme une expérience complète, 
                    où chaque élément contribue à raconter votre histoire et à atteindre vos objectifs.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Ma méthodologie combine analyse stratégique, créativité débridée et exécution technique 
                    pour créer des solutions qui ne sont pas seulement belles, mais aussi performantes et impactantes.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Ensemble, nous transformons vos défis en opportunités et vos rêves en réalité digitale.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-accent-green/10 to-accent-blue/10 p-8 rounded-2xl border border-accent-green/20">
                  <h3 className="text-2xl font-medium text-primary mb-6">Mes Principes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent-green font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Vision d'abord</h4>
                        <p className="text-gray-600">Comprendre vos objectifs avant de créer</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent-blue font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Créativité stratégique</h4>
                        <p className="text-gray-600">L'art au service de vos objectifs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent-purple font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Exécution parfaite</h4>
                        <p className="text-gray-600">Chaque détail compte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Mon Processus</h2>
              <p className="text-xl text-gray-600">Une méthodologie éprouvée en 6 étapes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-green">1</span>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Discovery</h3>
                <p className="text-gray-600">Analyse approfondie de vos besoins, objectifs et contexte pour définir la stratégie optimale.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-blue">2</span>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Stratégie</h3>
                <p className="text-gray-600">Définition de la roadmap, des KPIs et du plan d'action pour atteindre vos objectifs.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-purple">3</span>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Conception</h3>
                <p className="text-gray-600">Création de concepts créatifs et wireframes pour valider l'expérience utilisateur.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-red">4</span>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Développement</h3>
                <p className="text-gray-600">Intégration technique avec les meilleures pratiques et technologies modernes.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-orange">5</span>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Tests</h3>
                <p className="text-gray-600">Validation complète de la qualité, performance et expérience utilisateur.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-accent-yellow">6</span>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Lancement</h3>
                <p className="text-gray-600">Déploiement, formation et accompagnement pour maximiser votre succès.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Mes Outils</h2>
              <p className="text-xl text-gray-600">Technologies et méthodologies pour des résultats exceptionnels</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green/20 to-accent-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Design Thinking</h3>
                <p className="text-gray-600">Méthodologie centrée sur l'utilisateur</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Agile</h3>
                <p className="text-gray-600">Développement itératif et adaptatif</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-purple/20 to-accent-red/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Analytics</h3>
                <p className="text-gray-600">Mesure et optimisation continue</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-red/20 to-accent-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Innovation</h3>
                <p className="text-gray-600">Technologies de pointe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Prêt à appliquer cette stratégie ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Discutons de votre projet et mettons en place une stratégie sur-mesure pour votre succès.
            </p>
            <button 
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 text-lg bg-accent-green text-primary font-medium rounded-xl hover:bg-accent-blue transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Démarrer votre projet
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 
