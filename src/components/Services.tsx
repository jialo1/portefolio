'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    title: "Branding & Stratégie",
    description: "Pose les bases d'une marque claire, culturelle et ambitieuse, pensée pour durer et se faire remarquer.",
    image: "/branding.jpg",
    link: "/expertises/branding"
  },
  {
    title: "Marketing",
    description: "Développe ta présence en ligne et attire ton audience idéale avec des stratégies marketing sur-mesure.",
    image: "/marketing.jpg",
    link: "/expertises/marketing"
  },
  {
    title: "Sites Web",
    description: "Crée une expérience web unique qui convertit tes visiteurs en clients fidèles.",
    image: "/web.jpg",
    link: "/expertises/web"
  },
  {
    title: "Coaching",
    description: "Bénéficie d'un accompagnement personnalisé pour développer ton projet digital.",
    image: "/coaching.jpg",
    link: "/expertises/coaching"
  }
];

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-primary-dark to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">Mes Services</h2>
            <p className="text-xl text-gray-300">Des solutions adaptées à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="group bg-secondary/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-secondary/50 transition-all transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-accent mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  <div className="mt-4 flex items-center text-accent-light group-hover:text-accent transition-colors">
                    En savoir plus
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 