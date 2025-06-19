'use client';

import Navbar from '@/components/Navbar';

const projects = [
  {
    title: 'E-commerce Premium',
    category: 'Développement Web',
    description: 'Création d\'une boutique en ligne haut de gamme avec une expérience utilisateur exceptionnelle.',
    image: '/placeholder.jpg'
  },
  {
    title: 'Identité de Marque',
    category: 'Branding',
    description: 'Développement d\'une identité visuelle complète pour une marque de luxe.',
    image: '/placeholder.jpg'
  },
  {
    title: 'Plateforme Communautaire',
    category: 'Développement Web',
    description: 'Création d\'une plateforme sociale pour les professionnels.',
    image: '/placeholder.jpg'
  },
  {
    title: 'Campagne Marketing',
    category: 'Marketing Digital',
    description: 'Stratégie et exécution d\'une campagne marketing multi-canal.',
    image: '/placeholder.jpg'
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez nos réalisations et projets qui illustrent notre expertise
              et notre approche créative.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors z-10"></div>
                  {/* Remplacer par de vraies images */}
                  <div className="absolute inset-0 bg-primary-dark"></div>
                </div>
                
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-sm uppercase tracking-wider text-gray-300">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-light mt-2 mb-4">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 