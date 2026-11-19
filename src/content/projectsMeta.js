// Données complémentaires des projets, clé = `nom` dans data/projet.json.
// Un projet retiré de projet.json disparaît du site; son entrée ici est alors ignorée.
// featured: affiché dans « Projets en vedette ». tools: outils affichés en pastilles.
// fr: traduction (description = étiquette courte, long = texte détaillé).
export const projectsMeta = {
  Cardboarding: {
    featured: true,
    tools: ["React", "Supabase", "Stripe", "Blender"],
    fr: {
      description: "Application web",
      long: "Mon ami et moi avons créé cette application pour suivre nos parties de Magic: The Gathering, bâtir les statistiques de chacun, gérer decks et collections, organiser des tournois et diffuser des parties en direct. Elle prend en charge plusieurs jeux de cartes, et les captures viennent d'une ligue de démonstration.",
    },
  },
  "Cardboarding Lab": {
    featured: true,
    tools: ["React", "Three.js", "Stripe", "Blender", "3D print"],
    fr: {
      description: "Personnalisateur de deckbox 3D",
      long: "Le Lab, c'est là que mon entreprise d'impression 3D rejoint l'application. Les joueurs choisissent les couleurs, le symbole, les coins et le tiroir d'une deckbox Commander dans un aperçu 3D en direct, puis la commandent en ligne, avec livraison au Canada ou ramassage local. J'imprime chacune moi-même. Les modèles Spellbook sont de Joak1m, utilisés sous leur licence commerciale."
    },
  },
  "Kirby cog figure": {
    tools: ["Blender", "3D print"],
    fr: {
      description: "Assets 3D",
      long: "Concept rapide d'une figurine Kirby en engrenage (Star-Crossed World). Ma copine possède la collection des vraies figurines Bandai de Kirby and the Forgotten Land; j'ai voulu essayer d'en faire quelques-unes du DLC, avec les nouvelles copies et transformations, pour les imprimer en 3D.",
    },
  },
  "Shurima sword": {
    featured: true,
    tools: ["Blender"],
    fr: {
      description: "Assets 3D",
      long: "J'aime beaucoup l'esthétique de League of Legends, surtout celle de certaines régions comme Shurima. J'ai recréé le logo dans Blender avec une courbe de Bézier sur l'image de référence, pour le plaisir, puis j'ai eu l'idée de le combiner à un objet. J'ai commencé par cette épée de Shurima; j'aimerais continuer à travailler les détails et les textures, mais voici le résultat jusqu'ici.",
    },
  },
  Klingklang: {
    tools: ["Blender"],
    fr: {
      description: "Assets 3D",
      long: "Court test d'animation 3D avec des textures simples et une présentation, autour du Pokémon Klingklang.",
    },
  },
  "Atmosphäre value": {
    tools: ["3ds Max"],
    fr: {
      description: "Animation 3D",
      long: "Animation 3D réalisée avec Autodesk 3ds Max. Pendant mon stage chez Atmosphäre, on m'a demandé de transformer les valeurs de l'entreprise en animation 3D. Je suis parti d'icônes 2D à plat et j'ai présenté ma façon de les animer. Une fois tout approuvé, j'ai produit le résultat final, qui a été intégré aux présentations de l'entreprise.",
    },
  },
  "Fierce logo 3d prints": {
    tools: ["Blender", "3D print"],
    fr: {
      description: "Impressions 3D",
      long: "Modèle 3D du logo de Fierce, une entreprise de gradation de cartes. Le projet reproduit en 3D leur logo 2D, avec une boucle en haut pour l'accrocher à un collier. C'était mon premier projet sur ma P1S; la buse de 0,2 mm a rendu l'impression longue, mais le résultat en valait la peine.",
    },
  },
  "Harmony logo 3d prints": {
    featured: true,
    tools: ["Blender", "3D print"],
    fr: {
      description: "Impressions 3D",
      long: "Modèle 3D du logo de Team Harmony, une communauté locale de Pokémon GO. Le projet comprend la reproduction 3D de leur logo 2D et une variante sur mesure pour un événement dans le jeu. Les deux modèles ont été imprimés plusieurs fois, puis finis avec apprêt, peinture et couche protectrice.",
    },
  },
  "QR code stand": {
    tools: ["Blender", "3D print"],
    fr: {
      description: "Impressions 3D",
      long: "Impression 3D d'un petit support qui affiche un code QR menant à la page d'avis Google du magasin Mobile Klinik. J'en ai fait un pour le magasin de Rosemère et un autre pour celui de la Rive-Nord. J'ai raccourci l'URL avec t.ly, généré le code QR avec Canva, puis importé l'image dans Blender pour la reproduire et construire le support autour, avec leur logo intégré.",
    },
  },
  "Sky monastery": {
    featured: true,
    tools: ["Cubio"],
    fr: {
      description: "Carte vitrine d'assets",
      long: "Carte réalisée dans Cubio avec leur outil de création pour présenter le thème de pack d'assets « monastère céleste », fortement inspiré du temple des nomades de l'air d'Avatar. La dernière image est la palette d'assets que je devais présenter.",
    },
  },
  "Pirate island": {
    tools: ["Cubio"],
    fr: {
      description: "Carte vitrine d'assets",
      long: "Carte réalisée dans Cubio avec leur outil de création pour présenter le thème de pack d'assets « pirate ». La dernière image est la palette d'assets que je devais présenter.",
    },
  },
  "Quiet village": {
    tools: ["Cubio"],
    fr: {
      description: "Carte vitrine d'assets",
      long: "Carte réalisée dans Cubio avec leur outil de création pour présenter le thème de pack d'assets « Japon ancien ». La dernière image est la palette d'assets que je devais présenter.",
    },
  },
  "Festive street": {
    tools: ["Cubio"],
    fr: {
      description: "Carte vitrine d'assets",
      long: "Carte réalisée dans Cubio avec leur outil de création pour présenter le thème de pack d'assets « Brésil ». La dernière image est la palette d'assets que je devais présenter.",
    },
  },
  "Slumber cove": {
    tools: ["Cubio"],
    fr: {
      description: "Carte vitrine d'assets",
      long: "Carte réalisée dans Cubio avec leur outil de création pour présenter le thème de pack d'assets « Grèce antique ». La dernière image est la palette d'assets que je devais présenter.",
    },
  },
  "Spark of the Beyond": {
    featured: true,
    tools: ["Unity", "Blender"],
    fr: {
      description: "Jeu 3D Unity",
      long: "Jeu 3D Unity, projet individuel développé en 3 semaines, fortement inspiré de « It Takes Two ». Il propose une exploration et des énigmes dans une ambiance détendue. Le principal défi a été de gérer le grand nombre d'assets 3D réalistes et de créer les textures de chacun.",
    },
  },
  "Spark of the Beyond Assets": {
    tools: ["Blender"],
    fr: {
      description: "Assets 3D",
      long: "Un coup d'œil rapide à tous les objets 3D et textures du jeu Spark of the Beyond.",
    },
  },
  "Drifty Assets": {
    tools: ["Blender"],
    fr: {
      description: "Assets 3D",
      long: "Un coup d'œil rapide à tous les objets 3D et textures du jeu Drifty.",
    },
  },
  "Facto-bee Assets": {
    tools: ["Blender"],
    fr: {
      description: "Assets 3D",
      long: "J'ai collaboré avec mes coéquipiers à la création d'un jeu 3D pour mon cours de jeu vidéo no 5. J'ai pris en charge tout le visuel : modélisation 3D, texturage, design d'interface et plus. J'ai aussi contribué à définir l'orientation et les mécaniques du jeu.\n\nCe projet a une place spéciale pour moi : c'était la première fois que j'apprenais Blender, ce qui m'a permis de développer un style cohérent pour l'environnement, l'interface, les assets et les personnages. Notre équipe s'est démarquée en intégrant de la gestion de ressources et un objectif unique, lié à l'histoire de notre monde.",
    },
  },
  "Facto-bee": {
    tools: ["Unity", "Blender"],
    fr: {
      description: "Jeu 3D Unity",
      long: "J'ai collaboré avec mes coéquipiers à la création d'un jeu 3D pour mon cours de jeu vidéo no 5. J'ai pris en charge tout le visuel : modélisation 3D, texturage, design d'interface et plus. J'ai aussi contribué à définir l'orientation et les mécaniques du jeu.\n\nCe projet a une place spéciale pour moi : c'était la première fois que j'apprenais Blender, ce qui m'a permis de développer un style cohérent pour l'environnement, l'interface, les assets et les personnages. Notre équipe s'est démarquée en intégrant de la gestion de ressources et un objectif unique, lié à l'histoire de notre monde.",
    },
  },
  Bedroom: {
    tools: ["3ds Max"],
    fr: {
      description: "Modélisation 3D",
      long: "J'ai créé cette chambre dans 3ds Max pour mon cours de 3D no 1. J'y ai reproduit certains de mes meubles et ajouté des détails pour montrer ma chambre idéale. Je trouve que le résultat est plutôt agréable.",
    },
  },
  Empoulpade: {
    tools: ["Unity", "Animate"],
    fr: {
      description: "Jeu 2D Unity",
      long: "J'ai collaboré avec un coéquipier à la création d'un jeu 2D pour mon cours de jeu vidéo no 4. Responsable du design visuel, j'ai fait le design des personnages, les tilemaps, l'interface et plus. J'ai aussi aidé à définir l'orientation et les mécaniques du jeu.\n\nCe projet m'a particulièrement plu : c'était ma première fois avec Animate pour le rigging et l'animation de personnages. J'ai développé un style visuel unique et appris à animer des personnages non humanoïdes. En travaillant de près avec mes coéquipiers, nous avons ajouté des fonctions comme les sauts sur les murs et un système de particules poussé, qui donnent de la profondeur au jeu.",
    },
  },
  Harmonize: {
    tools: ["React"],
    fr: {
      description: "Application React",
      long: "Cette application web adaptable a été créée en équipe pour mon cours de Web no 5. Mon coéquipier et moi étions responsables des éléments visuels : pendant que les autres développaient le squelette fonctionnel, nous l'avons stylisé, modifié et défini l'esthétique générale. Je me suis concentré sur les pages de listes de lecture, l'intérieur d'une liste et le lecteur audio, pour une expérience cohérente et agréable.",
    },
  },
  Pemana: {
    tools: ["Vue 3", "Google Analytics"],
    fr: {
      description: "Site Vue 3",
      long: "J'ai créé un site avec le framework Vue 3, hébergé sur GitHub Pages avec un nom de domaine personnalisé. J'ai codé tout le site seul et conçu des composantes réutilisables pour ajouter facilement des bâtiments grâce à une base de données .json interne. J'ai aussi intégré Google Analytics pour aider le client à suivre son trafic pendant qu'il essayait différentes méthodes de marketing. Ce projet faisait partie de mon stage chez Pemana, dont le but était de promouvoir les bâtiments et quais à louer de l'entreprise.",
    },
  },
};

export const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
