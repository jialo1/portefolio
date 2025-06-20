'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { useBookingModalStore } from '@/store/useBookingModalStore';

export default function CoachingPage() {
  const { openModal } = useBookingModalStore();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        {/* Cercles décoratifs inspirés du logo */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-accent-red/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full mb-6">
              Expertise
            </span>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Coaching
              <span className="block mt-2 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-red bg-clip-text text-transparent">
                & Accompagnement
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Bénéficie d'un accompagnement personnalisé pour développer ton projet digital et atteindre tes objectifs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 text-lg bg-accent-blue text-primary font-medium rounded-xl hover:bg-accent-purple transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Réserver une session
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Ce que j'offre</h2>
              <p className="text-xl text-gray-600">Un accompagnement sur-mesure pour votre réussite</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 p-8 rounded-2xl border border-accent-blue/20">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Stratégie Business</h3>
                <p className="text-gray-600">Définition de votre vision, mission et plan d'action pour développer votre activité.</p>
              </div>

              <div className="bg-gradient-to-br from-accent-purple/5 to-accent-red/5 p-8 rounded-2xl border border-accent-purple/20">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Développement Personnel</h3>
                <p className="text-gray-600">Développement de vos compétences, confiance en soi et leadership.</p>
              </div>

              <div className="bg-gradient-to-br from-accent-red/5 to-accent-orange/5 p-8 rounded-2xl border border-accent-red/20">
                <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Accompagnement Équipe</h3>
                <p className="text-gray-600">Formation et accompagnement de vos équipes pour optimiser la collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Pourquoi choisir le coaching ?</h2>
              <p className="text-xl text-gray-600">Des bénéfices concrets pour votre développement</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Accélération</h3>
                <p className="text-gray-600">Atteignez vos objectifs plus rapidement avec un accompagnement ciblé.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Clarté</h3>
                <p className="text-gray-600">Gagnez en clarté sur vos objectifs et votre stratégie d'action.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Confiance</h3>
                <p className="text-gray-600">Développez votre confiance en vous et en vos capacités.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Résultats</h3>
                <p className="text-gray-600">Obtenez des résultats concrets et mesurables dans votre développement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Mon Approche</h2>
              <p className="text-xl text-gray-600">Une méthodologie personnalisée et efficace</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-medium text-primary mb-4">Diagnostic</h3>
                <p className="text-gray-600">Analyse de votre situation actuelle et identification de vos objectifs.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-medium text-primary mb-4">Plan d'Action</h3>
                <p className="text-gray-600">Élaboration d'une stratégie personnalisée avec des étapes concrètes.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-medium text-primary mb-4">Accompagnement</h3>
                <p className="text-gray-600">Sessions régulières pour vous guider et vous motiver dans votre progression.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-medium text-primary mb-4">Suivi</h3>
                <p className="text-gray-600">Évaluation des progrès et ajustements du plan selon vos résultats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Prêt à transformer votre carrière ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Réservez votre première session de coaching et commencez votre transformation dès aujourd'hui.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 text-lg bg-accent-blue text-primary font-medium rounded-xl hover:bg-accent-purple transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Réserver ma session
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
