'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Cart, { CartItem } from '@/components/Cart';

const services = [
  {
    id: 'branding-basic',
    name: 'Pack Branding Basique',
    description: 'Logo, charte graphique et identité de marque complète',
    price: 299,
    icon: '🎨',
    gradient: 'from-accent-yellow via-accent-orange to-accent-red',
    features: ['Logo vectoriel', 'Charte graphique', 'Guide d\'utilisation', 'Fichiers sources'],
    popular: false
  },
  {
    id: 'branding-premium',
    name: 'Pack Branding Premium',
    description: 'Identité de marque complète avec stratégie de communication',
    price: 599,
    icon: '✨',
    gradient: 'from-accent-orange via-accent-red to-accent-purple',
    features: ['Logo vectoriel', 'Charte graphique complète', 'Stratégie de communication', 'Supports print & digital', 'Accompagnement 1 mois'],
    popular: true
  },
  {
    id: 'website-basic',
    name: 'Site Web Basique',
    description: 'Site vitrine responsive et moderne',
    price: 799,
    icon: '💻',
    gradient: 'from-accent-green via-accent-blue to-accent-purple',
    features: ['Design responsive', '5 pages', 'Formulaire de contact', 'Optimisation SEO basique', 'Hébergement 1 an'],
    popular: false
  },
  {
    id: 'website-ecommerce',
    name: 'Site E-commerce',
    description: 'Boutique en ligne complète avec paiement sécurisé',
    price: 1499,
    icon: '🛒',
    gradient: 'from-accent-blue via-accent-purple to-accent-red',
    features: ['Catalogue produits', 'Paiement sécurisé', 'Gestion des commandes', 'Panel d\'administration', 'Formation incluse'],
    popular: true
  },
  {
    id: 'marketing-basic',
    description: 'Stratégie marketing digitale personnalisée',
    name: 'Pack Marketing Basique',
    price: 399,
    icon: '📈',
    gradient: 'from-accent-red via-accent-purple to-accent-yellow',
    features: ['Audit de présence en ligne', 'Stratégie marketing', 'Plan d\'action 3 mois', 'Rapport mensuel'],
    popular: false
  },
  {
    id: 'coaching-session',
    name: 'Session Coaching',
    description: 'Accompagnement personnalisé pour votre projet digital',
    price: 150,
    icon: '🎯',
    gradient: 'from-accent-purple via-accent-red to-accent-orange',
    features: ['Session de 2h', 'Analyse de votre projet', 'Recommandations personnalisées', 'Plan d\'action détaillé'],
    popular: false
  }
];

export default function TribuPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animation d'entrée
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (service: typeof services[0]) => {
    // Animation de feedback
    const button = document.querySelector(`[data-service-id="${service.id}"]`) as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === service.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === service.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: service.id,
        name: service.name,
        price: service.price,
        description: service.description,
        quantity: 1
      }];
    });

    // Notification visuelle
    showNotification(`${service.name} ajouté au panier !`);
  };

  const showNotification = (message: string) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 bg-accent-yellow text-primary px-6 py-3 rounded-full shadow-lg z-50 animate-bounce';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 2000);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section avec animations */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        {/* Cercles décoratifs animés */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-accent-red/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent-yellow/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium px-4 py-2 bg-accent-yellow/20 text-accent-yellow rounded-full mb-6 animate-fade-in">
              La Tribu
            </span>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 animate-slide-up">
              Boutique
              <span className="block mt-2 bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-red bg-clip-text text-transparent animate-gradient">
                Digitale
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.5s'}}>
              Commandez vos services digitaux en ligne et rejoignez la tribu des entrepreneurs qui réussissent.
            </p>

            {/* Panier flottant avec animation */}
            <div className="fixed top-24 right-4 z-40 animate-bounce-in">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-accent-yellow text-primary p-3 rounded-full shadow-lg hover:bg-accent-orange transition-all transform hover:-translate-y-1 hover:shadow-xl relative group"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-red text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid avec animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-primary mb-4 animate-fade-in">Services Disponibles</h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{animationDelay: '0.3s'}}>Choisissez le service qui correspond à vos besoins</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`relative group cursor-pointer animate-fade-in-up`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Badge populaire */}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-accent-yellow to-accent-orange text-primary px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        ⭐ Populaire
                      </span>
                    </div>
                  )}

                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 relative">
                    <div className="p-8 relative z-10">
                      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-light text-primary mb-4">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 text-accent-green mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-light text-primary">
                          {service.price}€
                        </span>
                      </div>
                      
                      <button 
                        data-service-id={service.id}
                        onClick={() => addToCart(service)}
                        className="w-full bg-accent-yellow text-primary font-medium py-3 px-6 rounded-xl hover:bg-accent-purple hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group-hover:shadow-xl"
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section avec animations */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6 animate-fade-in">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-gray-300 mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
              Contactez-moi pour discuter de vos besoins spécifiques et obtenir un devis sur-mesure.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center px-8 py-4 text-lg bg-accent-yellow text-primary font-medium rounded-xl hover:bg-accent-orange transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-bounce-in"
              style={{animationDelay: '0.6s'}}
            >
              Demander un devis personnalisé
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Panier */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
} 
