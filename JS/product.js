// le code javascript pour le menu dynaqmique ici
let product_list=[
  {
     "id":1,
     "categorie":"Burger",
     "titre":"Classic Express",
     "image":"./Images/burger1.png",
     "etoile":4,
     "prix":2500,
     "description":"Burger Classic Express de bonne qualité"
  },
  {
     "id":2,
     "categorie":"Burger",
     "titre":"Double Street",
     "image":"./Images/burger1.png",
     "etoile":5,
     "prix":3500,
     "description":"Burger Double Street de bonne qualité"
  },
  {
     "id":3,
     "categorie":"Burger",
     "titre":"Spicy Loko",
      "image":"./Images/burger2.png",
     "etoile":4,
     "prix":3000,
     "description":"Burger Spicy Loko de bonne qualité"
  },
  {
     "id":4,
     "categorie":"Burger",
     "titre":"Veggie Gold",
      "image":"./Images/burger3.png",
     "etoile":4,
     "prix":2800,
     "description":"Burger Veggie Gold de bonne qualité"
  },
  {
     "id":5,
     "categorie":"Jus",
     "titre":"Jus de Bissap",
      "image":"./Images/jus4.png",
     "etoile":4,
     "prix":500,
     "description":"Jus de Bissap de bonne qualité"
  },
  {
     "id":6,
     "categorie":"Jus",
     "titre":"Cocktail Tropical",
      "image":"./Images/jus3.png",
     "etoile":5,
     "prix":700,
     "description":"Cocktail Tropical de bonne qualité"
  },
  {
     "id":7,
     "categorie":"Jus",
     "titre":"Jus orange",
      "image":"./Images/jus1.png",
     "etoile":4,
     "prix":500,
     "description":"Burger Veggie Gold de bonne qualité"
  },
  {
     "id":8,
     "categorie":"Jus",
     "titre":"Jus au miel",
      "image":"./Images/jus3.png",
     "etoile":4,
     "prix":800,
     "description":"Jus au miel de bonne qualité"
  },
  {
     "id":9,
     "categorie":"complement",
     "titre":"Frites Classiques",
      "image":"./Images/frite1.png",
     "etoile":4,
     "prix":500,
     "description":"Frites Classiques de bonne qualité"
  },
  {
     "id":10,
     "categorie":"complement",
     "titre":"Frites Epicée",
      "image":"./Images/frite2.png",
     "etoile":4,
     "prix":500,
     "description":"Frites Epicée de bonne qualité"
  },
  {
     "id":11,
     "categorie":"complement",
     "titre":"Frites Fromagères",
      "image":"./Images/frite3.png",
     "etoile":4,
     "prix":800,
     "description":"Frites Fromagères de bonne qualité"
  },
  {
     "id":12,
     "categorie":"complement",
     "titre":"Frites Patate",
      "image":"./Images/frite1.png",
     "etoile":4,
     "prix":700,
     "description":"Frites Patate de bonne qualité"
  }
]
// fonction pour filtrer la liste des produits
function Product_filter(categorie='all')
{
   // retouner tout les produits par defaut
   if(categorie=='all')
     return product_list;
   // filtrer les produits par categorie dans le cas contraire
   return product_list.filter((prod)=> prod.categorie==categorie);
}
// fonction permettant de charger les produits dans la page d'acceuil
function LoadProduct(ListeProduit)
{
   //recuperer le conteneur du produit
   const container =document.getElementById('produit_liste');
   // vider la liste de produit
   container.innerHTML="";
   ListeProduit.forEach((prod)=>{
      const boxProd=document.createElement('div');
      
      //ajouter les classes necessaire a la div
      boxProd.classList="flex flex-col gap-1 p-5  sm:w-[18%] min-w-min bg-footer-gray justify-center shadow rounded-lg"
       
        boxProd.innerHTML=`
                          <img src=${prod.image} alt=${prod.titre} class="w-50 h-24 mx-auto  scale- ">
                          <h2 class="text-red-express text-center">${prod.titre}</h2>
                          <div class="flex justify-between items-center gap-2">
                             <div class="flex gap-2 items-center">
                                <span class="text-white">${prod.etoile}</span>
                                <i class="fa-solid fa-star text-mustard"></i>
                             </div>
                              <span class="text-white">${prod.prix}F</span>
                          </div>
                          <a href="#" onclick={SendCommande(${prod.id})} class="bg-mustard text-white  py-0 rounded hover:bg-red-express transition flex gap-4 items-center justify-start px-3"> <i class="fab fa-whatsapp text-3xl text-white"></i>Commander</a>
        `;
        // ajouter la div dans le produit
        container.appendChild(boxProd)
   })
}
// fonction permettant de lancer la commande du produit
function SendCommande(id_produit=1)
{
   console.log(id_produit)
   // recuperer le produit en question
   const product= product_list.filter((prod)=>prod.id == id_produit);
   //recuperer la quantiter choisi
   const  quantite=prompt("Entrer la quantite que vous souhaiter commander") | 1;
   const prix_total=Number(product[0].prix) * Number(quantite);
    const commandeMessage=` Salut je souhaite Commander ${quantite}  ${product[0].titre}   dont le prix unitaire mentioné est de ${product[0].prix} FCFA .Cela reviendra a un montant total de  ${prix_total} FCFA . `;
        console.log(commandeMessage)
      //   envoyer le message whatsapp avec les details
      window.open(`https://wa.me/237674606328?text=${commandeMessage}`);
}
// afficher tout les produits lors du lancement du projet
LoadProduct(Product_filter());