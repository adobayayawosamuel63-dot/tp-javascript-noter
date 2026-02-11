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

const liste = [11, 34, 22, 76, 31, 12, 29];
   function filtre (liste) {
    let listePaire = [];
    let listeInpaire = [];
for(let i = 0 ; i < liste.length;i++){
    if( liste[i] % 2 == 0 ){
        listePaire.push(liste[i])
    } else{
        listeInpaire.push(liste[i])
    }}
console.log("Indices pairs: ", listePaire) 
console.log("Indices impaires: ", listeInpaire)}
// console.log(filtre(liste))