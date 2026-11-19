// Contenu de la page d'accueil (EN / FR). À modifier librement.
// À VÉRIFIER: employeurs, titres et dates dans `experience` sont des suppositions de Claude.
export const site = {
  email: "oli1999@hotmail.ca",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/olivier-daigneault/" },
    { label: "ArtStation", href: "https://www.artstation.com/olivierdaigneault8" },
    { label: "Behance", href: "https://www.behance.net/olivierdaignea1" },
    { label: "GitHub", href: "https://github.com/Kebrouh" },
  ],
  about: {
    en: [
      "I'm a level designer who likes to build worlds, objects and products. During the day I design levels. On my own time I build Cardboarding, a Magic: The Gathering web app and shop, with a friend, and I run a small 3D-printing side business.",
      "Along the way I handled the parts of a launch that usually belong to someone else: the online shop and payments, analytics, content and community. I like projects that need a bit of everything, and I like seeing them through.",
    ],
    fr: [
      "Je suis level designer et j'aime construire des mondes, des objets et des produits. Le jour, je conçois des niveaux. Sur mon temps libre, je développe Cardboarding, une application web et boutique pour Magic: The Gathering, avec un ami, et j'ai une petite entreprise d'impression 3D.",
      "En chemin, j'ai pris en charge les parties d'un lancement qui reviennent souvent à quelqu'un d'autre : la boutique en ligne et les paiements, les statistiques, le contenu et la communauté. J'aime les projets qui demandent un peu de tout, et les mener jusqu'au bout.",
    ],
  },
  skills: {
    en: [
      { title: "Level design & games", items: ["Level design and layout", "Unity (2D and 3D)", "Game design and prototyping", "Particle systems"] },
      { title: "3D & 3D printing", items: ["Blender and 3ds Max", "Modeling, texturing, animation", "3D printing and finishing", "Custom logo and product models"] },
      { title: "Web & product", items: ["React, Vue 3, HTML, CSS, JavaScript", "Hosting and analytics", "UI design", "E-commerce and payments"] },
      { title: "Marketing & coordination", items: ["Product launch", "Content and social media", "Community management", "Working with clients and teams"] },
    ],
    fr: [
      { title: "Level design et jeux", items: ["Level design et aménagement", "Unity (2D et 3D)", "Conception et prototypage de jeux", "Systèmes de particules"] },
      { title: "3D et impression 3D", items: ["Blender et 3ds Max", "Modélisation, texturage, animation", "Impression 3D et finition", "Modèles de logos et de produits sur mesure"] },
      { title: "Web et produit", items: ["React, Vue 3, HTML, CSS, JavaScript", "Hébergement et statistiques", "Design d'interface", "Commerce en ligne et paiements"] },
      { title: "Marketing et coordination", items: ["Lancement de produit", "Contenu et réseaux sociaux", "Gestion de communauté", "Travail avec clients et équipes"] },
    ],
  },
  experience: [
    {
      role: { en: "Level Designer", fr: "Level designer" },
      org: "Cubio",
      period: { en: "Present", fr: "Présent" },
      text: {
        en: "Designing levels and showcase maps for asset packs with Cubio's creative tool.",
        fr: "Conception de niveaux et de cartes vitrines pour des packs d'assets avec l'outil de création de Cubio.",
      },
    },
    {
      role: { en: "Co-creator", fr: "Co-créateur" },
      org: "Cardboarding",
      period: { en: "Side project", fr: "Projet personnel" },
      text: {
        en: "Web app and shop for Magic: The Gathering players: game tracking, decks, collections, tournaments, and 3D-printed deckboxes sold online.",
        fr: "Application web et boutique pour les joueurs de Magic: The Gathering : suivi de parties, decks, collections, tournois et deckboxes imprimées en 3D vendues en ligne.",
      },
    },
    {
      role: { en: "Web developer, internship", fr: "Développeur web, stage" },
      org: "Pemana",
      text: {
        en: "Built the company website in Vue 3 to promote its buildings and quays for rent, with Google Analytics to track visitors.",
        fr: "Création du site de l'entreprise en Vue 3 pour promouvoir ses bâtiments et quais à louer, avec Google Analytics pour suivre les visiteurs.",
      },
    },
    {
      role: { en: "3D animator, internship", fr: "Animateur 3D, stage" },
      org: "Atmosphäre",
      text: {
        en: "Turned the company's values into a 3D animation in 3ds Max, now used in company presentations.",
        fr: "Transformation des valeurs de l'entreprise en animation 3D dans 3ds Max, utilisée dans les présentations de l'entreprise.",
      },
    },
    {
      role: { en: "College diploma, Multimedia Integration", fr: "DEC en Techniques d'intégration multimédia" },
      org: "Cégep de Saint-Jérôme",
      period: { en: "2023", fr: "2023" },
      text: {
        en: "Web, game development, 3D and graphic design.",
        fr: "Web, développement de jeux, 3D et design graphique.",
      },
    },
  ],
};
