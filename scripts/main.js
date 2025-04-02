/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

// Ici, j'ai mis la fonction lancerJeu() en commentaire pour ne pas être dérangé par l'affichage des popups. 
// lancerJeu()

let zoneDeSaisie = document.getElementById ("inputEcriture")
let boutonDeValidation = document.getElementById("btnValiderMot")


let zoneDeProposition = document.querySelector(".zoneProposition")
let affichageScore = document.querySelector(".zoneScore span")

let choix = document.querySelectorAll(".optionSource input")

