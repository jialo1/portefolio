'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { useBookingModalStore } from '@/store/useBookingModalStore';

export default function WebPage() {
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
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-red/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium px-4 py-2 bg-accent-green/20 text-accent-green rounded-full mb-6">
              Expertise
            </span>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Sites Web
              <span className="block mt-2 bg-gradient-to-r from-accent-green via-accent-blue to-accent-purple bg-clip-text text-transparent">
                & Applications
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Crée une expérience web unique qui convertit tes visiteurs en clients fidèles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 text-lg bg-accent-green text-primary font-medium rounded-xl hover:bg-accent-blue transition-all transform hover:-translate-y-1 hover:shadow-lg"
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
              <p className="text-xl text-gray-600">Des solutions web complètes et sur-mesure</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-accent-green/5 to-accent-blue/5 p-8 rounded-2xl border border-accent-green/20">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Sites Vitrine</h3>
                <p className="text-gray-600">Sites web modernes et responsives pour présenter votre activité et vos services.</p>
              </div>

              <div className="bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 p-8 rounded-2xl border border-accent-blue/20">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">E-commerce</h3>
                <p className="text-gray-600">Boutiques en ligne performantes avec gestion des commandes et paiements sécurisés.</p>
              </div>

              <div className="bg-gradient-to-br from-accent-purple/5 to-accent-red/5 p-8 rounded-2xl border border-accent-purple/20">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">Applications Web</h3>
                <p className="text-gray-600">Applications web personnalisées pour automatiser vos processus métier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Technologies</h2>
              <p className="text-xl text-gray-600">Stack moderne pour des performances optimales</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">React</span>
                </div>
                <p className="text-sm text-gray-600">React</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">Next.js</span>
                </div>
                <p className="text-sm text-gray-600">Next.js</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">Node.js</span>
                </div>
                <p className="text-sm text-gray-600">Node.js</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">TypeScript</span>
                </div>
                <p className="text-sm text-gray-600">TypeScript</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">Tailwind</span>
                </div>
                <p className="text-sm text-gray-600">Tailwind CSS</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">PostgreSQL</span>
                </div>
                <p className="text-sm text-gray-600">PostgreSQL</p>
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
              <h2 className="text-4xl font-light text-primary mb-4">Mon Processus</h2>
              <p className="text-xl text-gray-600">Une méthodologie agile pour des résultats rapides</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-medium text-primary mb-4">Discovery</h3>
                <p className="text-gray-600">Analyse de vos besoins, objectifs et contraintes techniques.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-medium text-primary mb-4">Design</h3>
                <p className="text-gray-600">Création de maquettes et wireframes pour valider l'expérience utilisateur.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-medium text-primary mb-4">Développement</h3>
                <p className="text-gray-600">Codage avec des technologies modernes et bonnes pratiques.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-medium text-primary mb-4">Livraison</h3>
                <p className="text-gray-600">Tests, déploiement et formation pour votre équipe.</p>
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
              Prêt à créer votre présence web ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Discutons de votre projet web et créons ensemble une solution sur-mesure pour votre entreprise.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 text-lg bg-accent-green text-primary font-medium rounded-xl hover:bg-accent-blue transition-all transform hover:-translate-y-1 hover:shadow-lg"
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
