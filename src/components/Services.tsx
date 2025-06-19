'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    id: 1,
    title: 'Branding & Identité',
    description: 'Création d\'identités visuelles fortes et mémorables qui reflètent l\'essence de votre marque.',
    icon: '🎨',
    color: 'from-accent-yellow to-accent-orange',
    href: '/expertises/branding',
    features: ['Logo & charte graphique', 'Identité de marque', 'Design system', 'Packaging']
  },
  {
    id: 2,
    title: 'Marketing Digital',
    description: 'Stratégies marketing innovantes pour augmenter votre visibilité et générer des leads qualifiés.',
    icon: '📈',
    color: 'from-accent-orange to-accent-red',
    href: '/expertises/marketing',
    features: ['Stratégie marketing', 'Réseaux sociaux', 'Content marketing', 'Analytics']
  },
  {
    id: 3,
    title: 'Développement Web',
    description: 'Sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.',
    icon: '💻',
    color: 'from-accent-red to-accent-purple',
    href: '/expertises/web',
    features: ['Sites web responsives', 'E-commerce', 'Applications web', 'Optimisation SEO']
  },
  {
    id: 4,
    title: 'Coaching & Formation',
    description: 'Accompagnement personnalisé pour développer vos compétences digitales et votre business.',
    icon: '🎯',
    color: 'from-accent-purple to-accent-blue',
    href: '/expertises/coaching',
    features: ['Coaching individuel', 'Formation équipe', 'Stratégie business', 'Mindset']
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mes{' '}
              <span className="gradient-text">expertises</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Des solutions complètes pour transformer votre présence digitale et atteindre vos objectifs business.
            </p>
          </div>

          {/* Services en carousel */}
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
              className="services-swiper"
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="card p-8 h-full group hover:transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm dark:bg-gray-800">
                    {/* Icône */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-accent-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Bouton */}
                    <Link 
                      href={service.href}
                      className={`inline-flex items-center text-primary dark:text-accent-yellow hover:text-primary-dark dark:hover:text-accent-orange transition-colors font-medium group-hover:translate-x-2 transition-transform duration-300`}
                    >
                      Découvrir
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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

          {/* CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/expertises"
              className="btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-accent-yellow/25 transition-all duration-300 transform hover:scale-105"
            >
              Voir toutes mes expertises
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 