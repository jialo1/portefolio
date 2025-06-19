'use client';

import Link from 'next/link';

export default function Mission() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg text-primary/80 mb-4">Ma mission :</h3>
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-12">
            Créer pour vous aider à prendre votre place, avec une présence digitale claire, 
            authentique et pensée pour durer.
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-8">
              Digital Tribe est né d'une vision : permettre aux entreprises de se démarquer 
              dans l'univers digital grâce à des solutions sur mesure qui reflètent leur vraie valeur.
            </p>
            
            <p className="mb-12">
              Notre rôle est de vous aider à bâtir une présence digitale ancrée, alignée et prête 
              à rayonner sur les marchés locaux et internationaux. Pour cela, nous combinons stratégie, 
              design, technologie et innovation. Car cette synergie, quand elle est bien orchestrée, 
              change tout : la perception, les opportunités, l'impact.
            </p>

            <Link 
              href="/methode"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <span className="mr-2">LA méthode Digital Tribe</span>
              <span className="text-xl">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div>
              <h3 className="text-4xl font-light mb-2 text-accent">100%</h3>
              <p className="text-sm text-primary/80 uppercase tracking-wider">Satisfaction client</p>
            </div>
            <div>
              <h3 className="text-4xl font-light mb-2 text-accent">50+</h3>
              <p className="text-sm text-primary/80 uppercase tracking-wider">Projets réalisés</p>
            </div>
            <div>
              <h3 className="text-4xl font-light mb-2 text-accent">8+</h3>
              <p className="text-sm text-primary/80 uppercase tracking-wider">Pays servis</p>
            </div>
            <div>
              <h3 className="text-4xl font-light mb-2 text-accent">10+</h3>
              <p className="text-sm text-primary/80 uppercase tracking-wider">Secteurs d'activité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 