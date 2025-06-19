import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-secondary relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Réservez un appel découverte gratuit de 30 minutes pour discuter de vos objectifs et explorer les possibilités ensemble.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg bg-accent text-primary font-medium rounded-full hover:bg-accent-light transition-all transform hover:scale-105"
          >
            Réserver un appel découverte
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 