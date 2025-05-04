const produits = [
  { nom: "Compost bio", categorie: "compost", prix: "4 500 FCFA", image: "images/bg/bg1.jpg" },
  { nom: "Fertilisant naturel", categorie: "fertilisant", prix: "5 000 FCFA", image: "images/bg/bg2.jpg" },
  { nom: "Terreau pour plantes", categorie: "terreau", prix: "3 000 FCFA", image: "images/bg/bg3.jpg" }
];

const container = document.getElementById("produits-container");
const select = document.getElementById("categorie");

function afficherProduits(categorie) {
  container.innerHTML = "";
  const filtres = produits.filter(p => categorie === "tous" || p.categorie === categorie);
  filtres.forEach(p => {
    const div = document.createElement("div");
    div.className = "produit";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <h3>${p.nom}</h3>
      <p>${p.prix}</p>
      <button>Ajouter au panier</button>
    `;
    container.appendChild(div);
  });
}

select.addEventListener("change", () => {
  afficherProduits(select.value);
});

document.addEventListener("DOMContentLoaded", () => {
  afficherProduits("tous");
});
