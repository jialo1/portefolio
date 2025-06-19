'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'CEO, TechStart',
    content: 'Digital Tribe a transformé notre identité de marque avec une créativité exceptionnelle. Son approche stratégique et son attention aux détails ont fait toute la différence.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Thomas Martin',
    role: 'Fondateur, DigitalAgency',
    content: 'Un partenaire de confiance pour tous nos projets web. Digital Tribe comprend parfaitement nos besoins et livre toujours des résultats qui dépassent nos attentes.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Marketing Manager, InnovCorp',
    content: 'Grâce au coaching de Digital Tribe, j\'ai pu développer une stratégie marketing efficace qui a augmenté nos ventes de 40%. Un vrai professionnel !',
    rating: 5,
    avatar: '👩‍🎨'
  },
  {
    id: 4,
    name: 'Alexandre Moreau',
    role: 'Entrepreneur',
    content: 'Digital Tribe m\'a accompagné dans la création de mon site e-commerce. Le résultat est magnifique et les performances sont au rendez-vous.',
    rating: 5,
    avatar: '👨‍🚀'
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ce que disent mes{' '}
              <span className="gradient-text">clients</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les témoignages de clients satisfaits qui ont transformé leur présence digitale avec moi.
            </p>
          </div>

          {/* Carousel des avis */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="reviews-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="card p-8 h-full group hover:transform hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-sm dark:bg-gray-800">
                    {/* Étoiles */}
                    <div className="flex items-center mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Contenu */}
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{review.content}"
                    </blockquote>

                    {/* Auteur */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-full flex items-center justify-center text-white text-xl mr-4 shadow-lg">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {review.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation personnalisée */}
            <div className="swiper-button-prev !w-12 !h-12 !bg-white/90 dark:!bg-gray-800 !text-primary dark:!text-accent-yellow !rounded-full !shadow-lg hover:!shadow-xl transition-shadow duration-300 after:!text-lg backdrop-blur-sm"></div>
            <div className="swiper-button-next !w-12 !h-12 !bg-white/90 dark:!bg-gray-800 !text-primary dark:!text-accent-yellow !rounded-full !shadow-lg hover:!shadow-xl transition-shadow duration-300 after:!text-lg backdrop-blur-sm"></div>
            
            {/* Pagination personnalisée */}
            <div className="swiper-pagination !bottom-0 !mt-8"></div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-yellow mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-400">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">4.9/5</div>
              <div className="text-gray-700 dark:text-gray-400">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">30+</div>
              <div className="text-gray-700 dark:text-gray-400">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">95%</div>
              <div className="text-gray-700 dark:text-gray-400">Taux de recommandation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 