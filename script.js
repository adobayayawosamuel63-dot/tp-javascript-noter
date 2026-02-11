// Exercice 1 : Séparation par index (3pts)
// Énoncé :
// On vous donne le tableau suivant :
// const liste = [11, 34, 22, 76, 31, 12, 29];
// Consignes :
// 1. Créez un programme qui affiche deux tableaux :
// ○ Un tableau contenant les éléments dont l’index est pair.
// ○ Un tableau contenant les éléments dont l’index est impair.
// Exemple de résultat attendu :
// Indices pairs : [11, 22, 31, 29]
// Indices impairs : [34, 76, 12]

// const liste = [11, 34, 22, 76, 31, 12, 29];
//    function filtre (liste) {
//     let listePaire = [];
//     let listeInpaire = [];
// for(let i = 0 ; i < liste.length;i++){
//     if( liste[i] % 2 == 0 ){
//         listePaire.push(liste[i])
//     } else{
//         listeInpaire.push(liste[i])
//     }}
// console.log("Indices pairs: ", listePaire) 
// console.log("Indices impaires: ", listeInpaire)}
// console.log(filtre(liste))

// Exercice 2 : Comparaison de voitures (3pts)
// Énoncé :
// On vous donne les objets suivants représentant des voitures :
// const voiture1 = {
// marque: "Renault",
// modele: "Clio",
// prix: 13000
// };
// const voiture2 = {
// marque: "Renault",
// modele: "Megane",
// prix: 18000
// };
// Consignes :
// 1. Créez un programme qui affiche la marque et le modèle 
// de la voiture la plus
// chère.
// Exemple de résultat attendu :
// Voiture la plus chère : Renault Megane

// const voiture1 = {
// marque: "Renault",
// modele: "Clio",
// prix: 13000
// };
// const voiture2 = {
// marque: "Renault",
// modele: "Megane",
// prix: 18000
// };

// if( voiture1.prix > voiture2.prix){
//     console.log("Voiture la plus chère :" , voiture1.marque , voiture1.modele)
// } else{
//         console.log("Voiture la plus chère :" , voiture2.marque , voiture2.modele)

// }

// fin de l'exercice 2

// Exercice 3 : Plus grand nombre (4pts)
// Énoncé :
// On vous donne le tableau suivant de 50 nombres :
// const tableau50 = [
// 523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
// 876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
// 432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
// 890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
// 12, 345, 678, 234, 567, 89, 90, 123, 456, 789
// ];
// Consignes :
// 1. Écrivez un programme qui retourne le plus grand nombre du tableau.
// 2. Vous pouvez utiliser une boucle for ou la fonction Math.max.
// Exemple de résultat attendu :
// Le plus grand nombre est : 987


// const tableau50 = [
// 523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
// 876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
// 432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
// 890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
// 12, 345, 678, 234, 567, 89, 90, 123, 456, 789
// ];
//  let plusGrand = 0 ;
// for(let i = 0 ; i < tableau50.length ; i ++) { 
//   if( tableau50[i] > plusGrand){
//     plusGrand = tableau50[i] 
// }else if ( tableau50[i] < plusGrand) {
//  i = i + 1; 
// } }


// console.log("Le plus grand nombre est : " , plusGrand)

// // fin de l'exercice 3

// Exercice 4 : Multiples de 6 (4pts)
// Énoncé :
// On vous donne le même tableau de 50 nombres (tableau50).
// Consignes :
// 1. Écrivez un programme qui crée un nouveau tableau ne contenant que les multiples
// de 6.
// Exemple de résultat attendu :
// [12, 432, 678, 876, 210, ...]

const tableau50 = [
523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
12, 345, 678, 234, 567, 89, 90, 123, 456, 789
];
let Multiples6 = [];
for (let i = 0 ; i < tableau50.length ; i++) {
if ( tableau50[i] % 6 == 0){
   Multiples6.push(tableau50 [i])
} 
}
console.log( Multiples6);
 // fin de l'exercice 4