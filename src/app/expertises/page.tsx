import Navbar from '@/components/Navbar';

export default function ExpertisesPage() {
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
              Mes{' '}
              <span className="gradient-text">expertises</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Des solutions complètes pour transformer votre présence digitale 
              et atteindre vos objectifs business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Branding */}
              <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Branding</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Création d'identités visuelles fortes et mémorables qui reflètent l'essence de votre marque.
                </p>
                <ul className="space-y-2 mb-8 text-left">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Logo & charte graphique
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Identité de marque
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Design system
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Packaging
                  </li>
                </ul>
                <a 
                  href="/expertises/branding"
                  className="inline-flex items-center text-primary dark:text-accent-yellow hover:text-primary-dark dark:hover:text-accent-orange transition-colors font-medium group-hover:translate-x-2 transition-transform duration-300"
                >
                  Découvrir
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Marketing */}
              <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Marketing Digital</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Stratégies marketing innovantes pour augmenter votre visibilité et générer des leads qualifiés.
                </p>
                <ul className="space-y-2 mb-8 text-left">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stratégie marketing
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Réseaux sociaux
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Content marketing
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Analytics
                  </li>
                </ul>
                <a 
                  href="/expertises/marketing"
                  className="inline-flex items-center text-primary dark:text-accent-yellow hover:text-primary-dark dark:hover:text-accent-orange transition-colors font-medium group-hover:translate-x-2 transition-transform duration-300"
                >
                  Découvrir
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Web */}
              <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-red to-accent-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Développement Web</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.
                </p>
                <ul className="space-y-2 mb-8 text-left">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-red mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sites web responsives
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-red mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    E-commerce
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-red mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Applications web
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-red mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Optimisation SEO
                  </li>
                </ul>
                <a 
                  href="/expertises/web"
                  className="inline-flex items-center text-primary dark:text-accent-yellow hover:text-primary-dark dark:hover:text-accent-orange transition-colors font-medium group-hover:translate-x-2 transition-transform duration-300"
                >
                  Découvrir
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Coaching */}
              <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Coaching & Formation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Accompagnement personnalisé pour développer vos compétences digitales et votre business.
                </p>
                <ul className="space-y-2 mb-8 text-left">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-purple mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Coaching individuel
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-purple mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Formation équipe
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-purple mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stratégie business
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-accent-purple mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mindset
                  </li>
                </ul>
                <a 
                  href="/expertises/coaching"
                  className="inline-flex items-center text-primary dark:text-accent-yellow hover:text-primary-dark dark:hover:text-accent-orange transition-colors font-medium group-hover:translate-x-2 transition-transform duration-300"
                >
                  Découvrir
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
