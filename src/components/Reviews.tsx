import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: "Marie Laurent",
      role: "CEO, Studio Design",
      content: "Ted a complètement transformé notre présence en ligne. Son approche créative et sa maîtrise technique ont dépassé nos attentes.",
      image: "/reviews/marie.jpg"
    },
    {
      name: "Thomas Dubois",
      role: "Fondateur, TechStart",
      content: "Un vrai professionnel qui sait allier esthétique et performance. Notre site n'a jamais été aussi efficace.",
      image: "/reviews/thomas.jpg"
    },
    {
      name: "Sophie Martin",
      role: "Directrice Marketing, InnovCorp",
      content: "La collaboration avec Ted a été un vrai plaisir. Il a su capturer l'essence de notre marque et la traduire en une expérience digitale unique.",
      image: "/reviews/sophie.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">Ce qu'ils en pensent</h2>
            <p className="text-xl text-gray-300">Des retours d'expérience qui parlent d'eux-mêmes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-primary-light/30 backdrop-blur-sm p-8 rounded-2xl hover:bg-primary-light/40 transition-all transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-4">
                    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-accent">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-accent">{review.name}</h3>
                    <p className="text-gray-300 text-sm">{review.role}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-300 leading-relaxed">"{review.content}"</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 