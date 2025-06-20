export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies?: string[];
  duration?: string;
  client?: string;
  results?: string[];
  challenges?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  // Projets Branding
  {
    id: 'branding-1',
    title: 'Identité de Marque Luxe',
    category: 'Branding',
    description: 'Création d\'une identité visuelle complète pour une marque de cosmétiques haut de gamme.',
    fullDescription: 'Développement d\'une identité de marque sophistiquée pour une nouvelle ligne de cosmétiques naturels. Le projet incluait la création du logo, de la charte graphique, du packaging et de tous les supports de communication.',
    image: '/branding.jpg',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'InDesign'],
    duration: '3 mois',
    client: 'Cosmetics Brand',
    results: [
      'Augmentation de 40% de la reconnaissance de marque',
      'Lancement réussi sur 15 points de vente',
      'Packaging primé au concours Design Awards'
    ],
    challenges: [
      'Créer une identité qui se démarque dans un marché saturé',
      'Adapter le design pour différents supports (digital et print)',
      'Respecter les contraintes réglementaires du secteur cosmétique'
    ],
    gallery: ['/branding.jpg', '/branding.jpg', '/branding.jpg']
  },
  {
    id: 'branding-2',
    title: 'Rebranding Startup Tech',
    category: 'Branding',
    description: 'Modernisation complète de l\'identité visuelle d\'une startup technologique.',
    fullDescription: 'Rebranding complet d\'une startup de 5 ans pour refléter sa maturité et son évolution vers une entreprise établie. Nouveau logo, palette de couleurs et guidelines de marque.',
    image: '/branding.jpg',
    technologies: ['Figma', 'Adobe Creative Suite'],
    duration: '2 mois',
    client: 'Tech Startup',
    results: [
      'Amélioration de 60% de la perception de crédibilité',
      'Augmentation de 25% des leads qualifiés',
      'Adoption réussie par toute l\'équipe'
    ],
    challenges: [
      'Conserver l\'esprit startup tout en gagnant en crédibilité',
      'Impliquer toute l\'équipe dans le processus',
      'Créer une identité évolutive pour la croissance future'
    ],
    gallery: ['/branding.jpg', '/branding.jpg', '/branding.jpg']
  },
  {
    id: 'branding-3',
    title: 'Design System Corporate',
    category: 'Branding',
    description: 'Création d\'un système de design complet pour une entreprise internationale.',
    fullDescription: 'Développement d\'un design system complet incluant typographie, couleurs, composants UI et guidelines d\'utilisation pour assurer la cohérence sur tous les supports.',
    image: '/branding.jpg',
    technologies: ['Figma', 'Storybook', 'Adobe Creative Suite'],
    duration: '4 mois',
    client: 'Corporate Company',
    results: [
      'Réduction de 70% du temps de développement',
      'Cohérence visuelle sur 20+ applications',
      'Formation de 50+ designers et développeurs'
    ],
    challenges: [
      'Créer un système adaptable à différents contextes',
      'Former des équipes internationales',
      'Maintenir la cohérence sur le long terme'
    ],
    gallery: ['/branding.jpg', '/branding.jpg', '/branding.jpg']
  },

  // Projets Web
  {
    id: 'web-1',
    title: 'E-commerce Premium',
    category: 'Développement Web',
    description: 'Création d\'une boutique en ligne haut de gamme avec une expérience utilisateur exceptionnelle.',
    fullDescription: 'Développement d\'une plateforme e-commerce complète pour une marque de luxe, incluant gestion des stocks, paiements sécurisés, et interface d\'administration avancée.',
    image: '/web.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    duration: '6 mois',
    client: 'Luxury Brand',
    results: [
      'Augmentation de 150% des ventes en ligne',
      'Taux de conversion de 4.2% (vs 2.1% avant)',
      'Temps de chargement réduit de 60%'
    ],
    challenges: [
      'Créer une expérience premium sur mobile',
      'Intégrer des systèmes de paiement complexes',
      'Optimiser les performances avec de grandes images'
    ],
    gallery: ['/web.jpg', '/web.jpg', '/web.jpg']
  },
  {
    id: 'web-2',
    title: 'Plateforme Communautaire',
    category: 'Développement Web',
    description: 'Création d\'une plateforme sociale pour les professionnels du secteur créatif.',
    fullDescription: 'Développement d\'une plateforme communautaire permettant aux créatifs de partager leurs travaux, collaborer et trouver des opportunités professionnelles.',
    image: '/web.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    duration: '8 mois',
    client: 'Creative Community',
    results: [
      '10,000+ utilisateurs actifs en 6 mois',
      '500+ collaborations initiées',
      'Taux de rétention de 75%'
    ],
    challenges: [
      'Gérer la modération de contenu en temps réel',
      'Créer un système de recommandations intelligent',
      'Optimiser les performances avec beaucoup d\'utilisateurs'
    ],
    gallery: ['/web.jpg', '/web.jpg', '/web.jpg']
  },
  {
    id: 'web-3',
    title: 'Application SaaS B2B',
    category: 'Développement Web',
    description: 'Développement d\'une application SaaS pour la gestion de projets d\'entreprise.',
    fullDescription: 'Création d\'une application web complète pour la gestion de projets, incluant planification, suivi des tâches, reporting et intégrations avec d\'autres outils.',
    image: '/web.jpg',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
    duration: '10 mois',
    client: 'B2B SaaS',
    results: [
      'Réduction de 30% du temps de gestion de projet',
      '500+ entreprises utilisatrices',
      'Chiffre d\'affaires de 2M€ en 2 ans'
    ],
    challenges: [
      'Créer une interface complexe mais intuitive',
      'Gérer les permissions et rôles utilisateurs',
      'Assurer la sécurité des données sensibles'
    ],
    gallery: ['/web.jpg', '/web.jpg', '/web.jpg']
  },

  // Projets Marketing
  {
    id: 'marketing-1',
    title: 'Campagne Marketing Multi-canal',
    category: 'Marketing Digital',
    description: 'Stratégie et exécution d\'une campagne marketing complète pour le lancement d\'un produit.',
    fullDescription: 'Conception et exécution d\'une campagne marketing intégrée utilisant les réseaux sociaux, l\'email marketing, le SEO et la publicité ciblée pour lancer un nouveau produit.',
    image: '/marketing.jpg',
    technologies: ['Facebook Ads', 'Google Ads', 'Mailchimp', 'Google Analytics'],
    duration: '4 mois',
    client: 'Product Launch',
    results: [
      'Augmentation de 200% du trafic qualifié',
      'ROAS de 4.5x sur les campagnes publicitaires',
      '10,000+ leads générés'
    ],
    challenges: [
      'Coordonner plusieurs canaux marketing',
      'Optimiser le budget sur différents plateformes',
      'Mesurer l\'impact de chaque canal'
    ],
    gallery: ['/marketing.jpg', '/marketing.jpg', '/marketing.jpg']
  },
  {
    id: 'marketing-2',
    title: 'Stratégie Content Marketing',
    category: 'Marketing Digital',
    description: 'Développement d\'une stratégie de content marketing pour une entreprise B2B.',
    fullDescription: 'Création d\'une stratégie de content marketing complète incluant blog, webinaires, podcasts et réseaux sociaux pour positionner l\'entreprise comme expert de son secteur.',
    image: '/marketing.jpg',
    technologies: ['WordPress', 'LinkedIn', 'YouTube', 'HubSpot'],
    duration: '6 mois',
    client: 'B2B Company',
    results: [
      'Augmentation de 300% du trafic organique',
      '50+ articles publiés avec 100,000+ vues',
      'Génération de 200+ leads qualifiés'
    ],
    challenges: [
      'Créer du contenu technique mais accessible',
      'Maintenir un rythme de publication régulier',
      'Mesurer l\'impact sur les ventes'
    ],
    gallery: ['/marketing.jpg', '/marketing.jpg', '/marketing.jpg']
  },
  {
    id: 'marketing-3',
    title: 'Optimisation Conversion E-commerce',
    category: 'Marketing Digital',
    description: 'Optimisation du tunnel de conversion d\'une boutique en ligne.',
    fullDescription: 'Analyse et optimisation du parcours client d\'une boutique en ligne pour améliorer les taux de conversion et réduire l\'abandon de panier.',
    image: '/marketing.jpg',
    technologies: ['Google Analytics', 'Hotjar', 'Optimizely', 'Stripe'],
    duration: '3 mois',
    client: 'E-commerce Store',
    results: [
      'Augmentation de 45% du taux de conversion',
      'Réduction de 30% de l\'abandon de panier',
      'Augmentation de 60% du panier moyen'
    ],
    challenges: [
      'Identifier les points de friction dans le parcours',
      'Tester des hypothèses sans impacter les ventes',
      'Convaincre l\'équipe des changements nécessaires'
    ],
    gallery: ['/marketing.jpg', '/marketing.jpg', '/marketing.jpg']
  },

  // Projets Coaching
  {
    id: 'coaching-1',
    title: 'Accompagnement Startup',
    category: 'Coaching',
    description: 'Coaching stratégique pour une startup en phase de croissance.',
    fullDescription: 'Accompagnement personnalisé du fondateur d\'une startup pour développer sa stratégie business, optimiser ses processus et préparer une levée de fonds.',
    image: '/coaching.jpg',
    technologies: ['Méthodologies Agile', 'Outils de gestion de projet'],
    duration: '12 mois',
    client: 'Tech Startup',
    results: [
      'Levée de fonds de 2M€ réussie',
      'Équipe passée de 5 à 25 personnes',
      'Chiffre d\'affaires multiplié par 10'
    ],
    challenges: [
      'Gérer la pression de la croissance rapide',
      'Maintenir la culture d\'entreprise',
      'Préparer la transition vers une entreprise établie'
    ],
    gallery: ['/coaching.jpg', '/coaching.jpg', '/coaching.jpg']
  },
  {
    id: 'coaching-2',
    title: 'Formation Équipe Marketing',
    category: 'Coaching',
    description: 'Formation et accompagnement d\'une équipe marketing de 15 personnes.',
    fullDescription: 'Programme de formation complet pour une équipe marketing, incluant stratégie digitale, outils modernes et bonnes pratiques pour améliorer les performances.',
    image: '/coaching.jpg',
    technologies: ['Outils marketing digitaux', 'Méthodologies de travail'],
    duration: '6 mois',
    client: 'Marketing Team',
    results: [
      'Amélioration de 40% des performances marketing',
      'Adoption de 8 nouveaux outils par l\'équipe',
      'Réduction de 25% du temps de production'
    ],
    challenges: [
      'Adapter la formation aux différents niveaux',
      'Maintenir l\'engagement sur la durée',
      'Mesurer l\'impact sur les résultats business'
    ],
    gallery: ['/coaching.jpg', '/coaching.jpg', '/coaching.jpg']
  },
  {
    id: 'coaching-3',
    title: 'Coaching Leadership',
    category: 'Coaching',
    description: 'Accompagnement de dirigeants pour développer leurs compétences de leadership.',
    fullDescription: 'Programme de coaching individuel pour des dirigeants d\'entreprise, axé sur le développement du leadership, la gestion d\'équipe et la prise de décision stratégique.',
    image: '/coaching.jpg',
    technologies: ['Outils d\'évaluation', 'Méthodologies de coaching'],
    duration: '8 mois',
    client: 'Executives',
    results: [
      'Amélioration de 60% des scores de leadership',
      'Réduction de 35% du turnover dans leurs équipes',
      'Augmentation de 25% de la satisfaction client'
    ],
    challenges: [
      'Changer des habitudes ancrées depuis longtemps',
      'Mesurer les progrès de manière objective',
      'Maintenir la confidentialité des sessions'
    ],
    gallery: ['/coaching.jpg', '/coaching.jpg', '/coaching.jpg']
  }
];

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const categories = [
  {
    name: 'Branding',
    slug: 'branding',
    description: 'Identités visuelles, logos et chartes graphiques',
    color: 'accent-yellow',
    projectCount: 3
  },
  {
    name: 'Développement Web',
    slug: 'web',
    description: 'Sites web, applications et plateformes',
    color: 'accent-green',
    projectCount: 3
  },
  {
    name: 'Marketing Digital',
    slug: 'marketing',
    description: 'Stratégies marketing et campagnes digitales',
    color: 'accent-orange',
    projectCount: 3
  },
  {
    name: 'Coaching',
    slug: 'coaching',
    description: 'Accompagnement et formation professionnelle',
    color: 'accent-blue',
    projectCount: 3
  }
]; 