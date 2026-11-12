const projects = [
  {
    title: "Site Web sur les Lanceurs Spatiaux",
    image: "images/lanceurs-spatiaux.jpg",
    description: "Site vitrine consacré aux lanceurs spatiaux : présentation des fusées, de leur histoire et de leurs caractéristiques techniques.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://tchinkou.github.io/chakib-s-lanceurs-spatiaux-/"
  },
  {
    title: "Application de Gestion de Stock",
    image: "images/gestion-stock.jpg",
    description: "Application permettant de suivre les entrées et sorties de marchandises, de gérer les produits et d'éviter les ruptures de stock.",
    tags: ["Application", "Gestion"],
    link: null
  },
  {
    title: "Pradice Nettoyage Services",
    image: "images/pradice.jpg",
    description: "Site professionnel pour une entreprise de nettoyage : présentation des services, zone d'intervention et prise de contact.",
    tags: ["Site vitrine", "Client"],
    link: "https://pradiceservicesnettoyage.fr/"
  },
  {
    title: "MenuiCad",
    image: "images/menuicad.jpg",
    description: "Outil web dédié à la menuiserie, pensé pour concevoir et visualiser des projets d'aménagement sur mesure.",
    tags: ["Web app", "Conception"],
    link: "https://tchinkou.github.io/menuicad/"
  },
  {
    title: "Design de Logos",
    image: "images/logos.jpg",
    description: "Création d'identités visuelles et de logos sur mesure pour des marques, associations et entreprises.",
    tags: ["Graphisme", "Branding"],
    link: null
  },
  {
    title: "DZcouture",
    image: "images/dzcouture.jpg",
    description: "Site dédié à la couture : mise en valeur des créations, du savoir-faire et des modèles proposés.",
    tags: ["Site web", "E-vitrine"],
    link: "https://tchinkou.github.io/DZcouture/#/"
  },
  {
    title: "SaldaeConnect",
    image: "images/saldaeconnect.jpg",
    description: "Plateforme de mise en relation autour de la région de Béjaïa (Saldae), pour connecter habitants, services et acteurs locaux.",
    tags: ["Plateforme", "Communauté"],
    link: "https://tchinkou.github.io/SaldaeConnectt/"
  },
  {
    title: "StreetKings",
    image: "images/streetkings.jpg",
    description: "Site à l'univers urbain et streetwear, avec une identité visuelle forte et une navigation dynamique.",
    tags: ["Site web", "Design"],
    link: "https://street-kings.pages.dev"
  },
  {
    title: "Logiciel de gestion d'une école privée",
    image: "images/ecole-privee.jpg",
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
    : "";

  card.innerHTML = `
    <div class="card-media"><img alt="Aperçu du projet ${p.title}" loading="lazy"></div>
    <div class="card-body">
      <h2>${p.title}</h2>
      <p>${p.description}</p>
      <div class="tags">${tags}</div>
      ${action}
    </div>
  `;

  // Image du projet (dossier images/) ; fond dégradé si elle est absente
  const img = card.querySelector("img");
  img.onerror = () => card.querySelector(".card-media").classList.add("no-image");
  img.src = p.image;

  grid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
