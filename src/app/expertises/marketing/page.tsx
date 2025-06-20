'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { useBookingModalStore } from '@/store/useBookingModalStore';

export default function MarketingPage() {
  const { openModal } = useBookingModalStore();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        {/* Cercles décoratifs inspirés du logo */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-red/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-accent-purple/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium px-4 py-2 bg-accent-orange/20 text-accent-orange rounded-full mb-6">
              Expertise
            </span>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Marketing
              <span className="block mt-2 bg-gradient-to-r from-accent-orange via-accent-red to-accent-purple bg-clip-text text-transparent">
                Digital
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Développe ta présence en ligne et attire ton audience idéale avec des stratégies marketing sur-mesure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 text-lg bg-accent-orange text-primary font-medium rounded-xl hover:bg-accent-red transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Discuter de votre projet
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
              <p className="text-xl text-gray-600">Des solutions marketing complètes pour votre croissance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-accent-orange/5 to-accent-red/5 p-8 rounded-2xl border border-accent-orange/20">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Stratégie Marketing</h3>
                <p className="text-gray-600">Planification complète de votre présence en ligne et de vos campagnes marketing.</p>
              </div>

              <div className="bg-gradient-to-br from-accent-red/5 to-accent-purple/5 p-8 rounded-2xl border border-accent-red/20">
                <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Content Marketing</h3>
                <p className="text-gray-600">Création de contenu engageant et stratégique pour attirer et convertir votre audience.</p>
              </div>

              <div className="bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 p-8 rounded-2xl border border-accent-purple/20">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Growth Hacking</h3>
                <p className="text-gray-600">Techniques innovantes pour accélérer votre croissance et maximiser vos résultats.</p>
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
              <p className="text-xl text-gray-600">Une approche data-driven pour des résultats mesurables</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-medium text-primary mb-4">Audit</h3>
                <p className="text-gray-600">Analyse de votre situation actuelle, concurrence et opportunités de croissance.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-medium text-primary mb-4">Stratégie</h3>
                <p className="text-gray-600">Définition d'une roadmap marketing claire avec des objectifs mesurables.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-medium text-primary mb-4">Exécution</h3>
                <p className="text-gray-600">Mise en œuvre des campagnes et suivi des performances en temps réel.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-medium text-primary mb-4">Optimisation</h3>
                <p className="text-gray-600">Analyse des résultats et ajustements continus pour maximiser le ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-red/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Prêt à booster votre présence en ligne ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Discutons de votre stratégie marketing et créons ensemble un plan d'action pour votre croissance.
            </p>
            <button 
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 text-lg bg-accent-orange text-primary font-medium rounded-xl hover:bg-accent-red transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Commencer votre projet
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
