const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

//fonction pout envoyer les informations de contact
function SendContactInfo()
{
   alert("Hello")
   // recuperer les informations du formulaire
   const nom=document.getElementById('nom_contact')
   const prenom=document.getElementById('pre_contact')
   const Adresse=document.getElementById('adresse_contact')
   const message=document.getElementById('message_contact')
   const telephone=document.getElementById('telephone_contact')
   console.log(nom)
    const commandeMessage=` Salut je suis ${nom.value}  ${prenom.value} mon adresse est ${Adresse.value} Je veux ${message.value} Je repond au numéro suivant ${telephone.value} . `;
        console.log(commandeMessage)
      //   envoyer le message whatsapp avec les details
      window.open(`https://wa.me/237674606328?text=${commandeMessage}`);
}


