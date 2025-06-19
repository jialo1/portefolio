'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous ajouterez la logique d'envoi du formulaire
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-xl text-gray-600">
              Prenez contact avec nous pour transformer votre vision en réalité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
              <div className="space-y-4 text-gray-600">
                <p>Email: contact@digitaltribe.com</p>
                <p>Téléphone: +33 1 23 45 67 89</p>
                <p>Horaires: Lundi - Vendredi, 9h - 18h</p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-black">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 