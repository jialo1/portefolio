'use client';

import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [removingItem, setRemovingItem] = useState<string | null>(null);
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleRemoveItem = (id: string) => {
    setRemovingItem(id);
    setIsAnimating(true);
    
    setTimeout(() => {
      onRemoveItem(id);
      setRemovingItem(null);
      setIsAnimating(false);
    }, 300);
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(id);
    } else {
      onUpdateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    // Animation de feedback
    const button = document.querySelector('.checkout-button') as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
    
    // Simulation de finalisation
    alert('🎉 Commande finalisée ! Redirection vers le paiement...');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end animate-fade-in">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto animate-slide-in">
        <div className="p-6">
          {/* Header avec animation */}
          <div className="flex justify-between items-center mb-6 animate-fade-in-up">
            <div className="flex items-center">
              <h2 className="text-2xl font-light text-primary">Panier</h2>
              {items.length > 0 && (
                <span className="ml-3 bg-accent-yellow text-primary text-xs rounded-full px-2 py-1 animate-bounce">
                  {items.length} {items.length === 1 ? 'article' : 'articles'}
                </span>
              )}
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-primary transition-all duration-300 hover:rotate-90"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="text-6xl mb-4 animate-bounce">🛒</div>
              <p className="text-gray-500 mb-4">Votre panier est vide</p>
              <p className="text-sm text-gray-400">Ajoutez des services pour commencer !</p>
            </div>
          ) : (
            <>
              {/* Liste des articles avec animations */}
              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`border border-gray-200 rounded-lg p-4 transition-all duration-300 animate-fade-in-up ${
                      removingItem === item.id ? 'opacity-0 transform -translate-x-full' : ''
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-primary group-hover:text-accent-yellow transition-colors duration-300">
                        {item.name}
                      </h3>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleQuantityChange(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-accent-yellow hover:text-primary transition-all duration-300 flex items-center justify-center hover:scale-110"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-accent-yellow hover:text-primary transition-all duration-300 flex items-center justify-center hover:scale-110"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-medium text-primary text-lg">
                        {item.price * item.quantity}€
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total avec animation */}
              <div className="border-t border-gray-200 pt-4 mb-6 animate-fade-in-up">
                <div className="flex justify-between items-center text-lg font-medium">
                  <span>Total</span>
                  <span className="text-primary text-2xl animate-pulse">
                    {total}€
                  </span>
                </div>
              </div>

              {/* Bouton de finalisation avec animation */}
              <button 
                onClick={handleCheckout}
                className="checkout-button w-full bg-gradient-to-r from-accent-yellow to-accent-orange text-primary font-medium py-4 px-6 rounded-xl hover:from-accent-orange hover:to-accent-red transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Finaliser la commande
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
      `}</style>
    </div>
  );
} 