const projects = [
  {
    title: "Site Web sur les Lanceurs Spatiaux",
    icon: "🚀",
    description: "Site vitrine consacré aux lanceurs spatiaux : présentation des fusées, de leur histoire et de leurs caractéristiques techniques.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://tchinkou.github.io/chakib-s-lanceurs-spatiaux-/"
  },
  {
    title: "Application de Gestion de Stock",
    icon: "📦",
    description: "Application permettant de suivre les entrées et sorties de marchandises, de gérer les produits et d'éviter les ruptures de stock.",
    tags: ["Application", "Gestion"],
    link: null
  },
  {
    title: "Pradice Nettoyage Services",
    icon: "🧽",
    description: "Site professionnel pour une entreprise de nettoyage : présentation des services, zone d'intervention et prise de contact.",
    tags: ["Site vitrine", "Client"],
    link: "https://pradiceservicesnettoyage.fr/"
  },
  {
    title: "MenuiCad",
    icon: "🪚",
    description: "Outil web dédié à la menuiserie, pensé pour concevoir et visualiser des projets d'aménagement sur mesure.",
    tags: ["Web app", "Conception"],
    link: "https://tchinkou.github.io/menuicad/"
  },
  {
    title: "Design de Logos",
    icon: "🎨",
    description: "Création d'identités visuelles et de logos sur mesure pour des marques, associations et entreprises.",
    tags: ["Graphisme", "Branding"],
    link: null
  },
  {
    title: "DZcouture",
    icon: "🧵",
    description: "Site dédié à la couture : mise en valeur des créations, du savoir-faire et des modèles proposés.",
    tags: ["Site web", "E-vitrine"],
    link: "https://tchinkou.github.io/DZcouture/#/"
  },
  {
    title: "SaldaeConnect",
    icon: "🌐",
    description: "Plateforme de mise en relation autour de la région de Béjaïa (Saldae), pour connecter habitants, services et acteurs locaux.",
    tags: ["Plateforme", "Communauté"],
    link: "https://tchinkou.github.io/SaldaeConnectt/"
  },
  {
    title: "StreetKings",
    icon: "👑",
    description: "Site à l'univers urbain et streetwear, avec une identité visuelle forte et une navigation dynamique.",
    tags: ["Site web", "Design"],
    link: "https://street-kings.pages.dev"
  },
  {
    title: "Logiciel de gestion d'une école privée",
    icon: "🏫",
    description: "Logiciel de gestion scolaire : inscriptions des élèves, classes, enseignants, paiements et suivi administratif.",
    tags: ["Logiciel", "Gestion"],
    link: null
  }
];

const grid = document.getElementById("projects");

projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "card";
  card.style.animationDelay = `${i * 70}ms`;

  const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  const action = p.link
    ? `<a class="btn" href="${p.link}" target="_blank" rel="noopener noreferrer">Voir le projet <span aria-hidden="true">→</span></a>`
    : `<span class="btn btn-disabled">Projet sans lien public</span>`;

  card.innerHTML = `
    <div class="card-icon" aria-hidden="true">${p.icon}</div>
    <h2>${p.title}</h2>
    <p>${p.description}</p>
    <div class="tags">${tags}</div>
    ${action}
  `;
  grid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
