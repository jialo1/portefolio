'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useBookingModalStore } from '@/store/useBookingModalStore';
import { getProjectsByCategory } from '@/data/projects';

export default function BrandingPortfolio() {
  const { openModal } = useBookingModalStore();
  const projects = getProjectsByCategory('Branding');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        {/* Cercles décoratifs inspirés du logo */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-accent-red/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium px-4 py-2 bg-accent-yellow/20 text-accent-yellow rounded-full mb-6">
              Portfolio
            </span>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Projets
              <span className="block mt-2 bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-red bg-clip-text text-transparent">
                Branding
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Découvrez mes réalisations en identité visuelle, logos et chartes graphiques qui transforment les marques.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 text-lg bg-accent-yellow/20 text-accent-yellow font-medium rounded-xl hover:bg-accent-yellow/30 transition-all"
              >
                ← Retour au portfolio
              </Link>
              <button
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 text-lg bg-accent-yellow text-primary font-medium rounded-xl hover:bg-accent-orange transition-all transform hover:-translate-y-1 hover:shadow-lg"
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

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Mes Projets Branding</h2>
              <p className="text-xl text-gray-600">Identités visuelles qui marquent les esprits</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 to-accent-orange/20 group-hover:from-accent-yellow/30 group-hover:to-accent-orange/30 transition-all z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm uppercase tracking-wider text-accent-yellow bg-accent-yellow/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      {project.duration && (
                        <span className="text-sm text-gray-500">{project.duration}</span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-light text-primary mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.fullDescription}</p>
                    
                    {project.client && (
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500">Client : </span>
                        <span className="text-sm text-primary">{project.client}</span>
                      </div>
                    )}
                    
                    {project.technologies && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies utilisées :</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.results && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Résultats :</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-accent-yellow mr-2">•</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.challenges && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Défis relevés :</h4>
                        <ul className="space-y-1">
                          {project.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-accent-orange mr-2">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-gray-100">
                      <button className="inline-flex items-center text-sm font-medium text-accent-yellow hover:text-accent-orange transition-colors">
                        Voir plus de détails
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Prêt à créer votre identité de marque ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Discutons de votre projet de branding et créons ensemble une identité visuelle qui vous représente.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 text-lg bg-accent-yellow text-primary font-medium rounded-xl hover:bg-accent-orange transition-all transform hover:-translate-y-1 hover:shadow-lg"
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