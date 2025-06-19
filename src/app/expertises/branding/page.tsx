'use client';

import Navbar from '@/components/Navbar';

export default function BrandingPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-gray-900 via-primary to-gray-900 dark:from-gray-900 dark:via-primary dark:to-gray-900 relative overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="accent-circle accent-circle-1"></div>
        <div className="accent-circle accent-circle-2"></div>
        <div className="accent-circle accent-circle-3"></div>
        <div className="accent-circle accent-circle-4"></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Branding &{' '}
              <span className="gradient-text">Identité</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Création d'identités visuelles fortes et mémorables qui reflètent l'essence de votre marque.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Image/Illustration */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="aspect-square bg-gradient-to-br from-accent-yellow via-accent-orange to-accent-red rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-8xl mb-4">🎨</div>
                        <div className="text-2xl font-bold">Branding</div>
                        <div className="text-lg opacity-80">Identité Visuelle</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cercles décoratifs */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-orange/20 rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 -right-8 w-16 h-16 bg-accent-red/20 rounded-full blur-lg"></div>
                </div>
              </div>

              {/* Contenu texte */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Votre{' '}
                  <span className="gradient-text">identité</span>
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Le branding est l'art de créer une identité visuelle cohérente et mémorable 
                  qui reflète les valeurs et la personnalité de votre marque.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Je vous accompagne dans la création d'une identité de marque forte 
                  qui vous démarquera de vos concurrents et résonnera avec votre audience.
                </p>

                {/* Services */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Logo & charte graphique complète
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Design system et guidelines
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Packaging et supports print
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stratégie de marque
                  </div>
                </div>
              </div>
            </div>

            {/* Processus */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
              <div className="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Découverte</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Analyse de votre marque, vos valeurs et votre marché
                </p>
              </div>

              <div className="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-accent-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Conception</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Création des concepts et développement de l'identité
                </p>
              </div>

              <div className="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-red to-accent-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Révision</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Affinage et optimisation selon vos retours
                </p>
              </div>

              <div className="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Livraison</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Remise des fichiers et guidelines d'utilisation
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href="/contact"
                className="btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-accent-yellow/25 transition-all duration-300 transform hover:scale-105"
              >
                Commencer votre projet de branding
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
