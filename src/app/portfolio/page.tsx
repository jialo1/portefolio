'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useBookingModalStore } from '@/store/useBookingModalStore';
import { categories, getProjectsByCategory } from '@/data/projects';

export default function Portfolio() {
  const { openModal } = useBookingModalStore();

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
              Mes
              <span className="block mt-2 bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-red bg-clip-text text-transparent">
                Réalisations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Découvrez mes projets organisés par expertise. Chaque catégorie représente un aspect de mon approche créative et stratégique.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4">Mes Expertises</h2>
              <p className="text-xl text-gray-600">Explorez mes projets par domaine de spécialisation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => {
                const categoryProjects = getProjectsByCategory(category.name);
                const previewProjects = categoryProjects.slice(0, 2); // Afficher seulement 2 projets en aperçu
                
                return (
                  <div key={category.slug} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/20 to-${category.color}/40 group-hover:from-${category.color}/30 group-hover:to-${category.color}/50 transition-all z-10`}></div>
                      {/* Image de fond pour la catégorie */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark"></div>
                    </div>
                    
                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between text-white">
                      <div>
                        <span className="text-sm uppercase tracking-wider text-gray-300 bg-white/20 px-3 py-1 rounded-full">
                          {category.name}
                        </span>
                        <h3 className="text-2xl font-light mt-4 mb-4">{category.name}</h3>
                        <p className="text-gray-200 mb-6">{category.description}</p>
                        
                        {/* Aperçu des projets */}
                        <div className="space-y-3">
                          {previewProjects.map((project, projectIndex) => (
                            <div key={projectIndex} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 bg-${category.color} rounded-full`}></div>
                              <span className="text-sm text-gray-200">{project.title}</span>
                            </div>
                          ))}
                          {categoryProjects.length > 2 && (
                            <div className="flex items-center space-x-3">
                              <div className={`w-2 h-2 bg-${category.color} rounded-full`}></div>
                              <span className="text-sm text-gray-300">+{categoryProjects.length - 2} autres projets</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link 
                          href={`/portfolio/${category.slug}`}
                          className="inline-flex items-center text-sm font-medium text-white hover:text-accent-yellow transition-colors"
                        >
                          Voir tous les projets {category.name}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              Prêt à créer quelque chose d'extraordinaire ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Discutons de votre projet et créons ensemble quelque chose de remarquable.
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
