import Navbar from '@/components/Navbar';

export default function AboutPage() {
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
              À propos de{' '}
              <span className="gradient-text">Ted</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Créateur digital passionné, je transforme vos idées en expériences exceptionnelles 
              avec créativité, stratégie et innovation.
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
                    <div className="aspect-square bg-gradient-to-br from-primary via-accent-purple to-accent-blue rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-8xl mb-4">🎨</div>
                        <div className="text-2xl font-bold">Ted Designer</div>
                        <div className="text-lg opacity-80">Créateur Digital</div>
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
                  Mon{' '}
                  <span className="gradient-text">histoire</span>
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Passionné par la créativité et l'innovation depuis plus de 5 ans, 
                  j'ai développé une expertise unique dans la création d'expériences digitales 
                  qui marquent les esprits et génèrent des résultats concrets.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Mon approche combine design thinking, stratégie marketing et développement technique 
                  pour créer des solutions sur mesure qui répondent parfaitement aux besoins de mes clients.
                </p>

                {/* Compétences */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Branding</span>
                      <span className="text-accent-yellow font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-yellow to-accent-orange h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Marketing</span>
                      <span className="text-accent-orange font-bold">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-orange to-accent-red h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Développement</span>
                      <span className="text-accent-red font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-red to-accent-purple h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Coaching</span>
                      <span className="text-accent-purple font-bold">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-purple to-accent-blue h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Valeurs et approche */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 italic max-w-4xl mx-auto">
                "La créativité est l'intelligence qui s'amuse."
                <footer className="text-lg text-accent-yellow mt-4 font-medium">- Albert Einstein</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
