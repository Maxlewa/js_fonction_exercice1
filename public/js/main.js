// EXO 1

// let add = (a,b) => {
//     return `${a} + ${b} = ${a + b}`
// }

// console.log(add(1, 2));

// EXO 2

// let sous = (a,b) => {
//     return `${b} - ${a} = ${b - a}`
// }

// console.log(sous(6, 8));


// EXO 3

// let multi = (a,b) => {
//     return `${a} * ${b} = ${a * b}`
// }

// console.log(multi(5, 2));

// EXO 4

// let div = (a,b) => {
//     return `${a} / ${b} = ${a / b}`
// }

// console.log(div(10, 5));


// EXO 5

// let reste = (a,b) => {
//     return `${a} % ${b} = ${a % b}`
// }

// console.log(reste(12, 5));


// EXO 

// RACINE CARREE

// let fonction = (a) => {
//     return Math.sqrt(a)
// }

// let squareRoot = fonction(9)
// console.log(squareRoot);

// CARRE

// let carre = (a) => {
//     return (a * a)
// }

// console.log(carre(2));

// EXO 7

// let fonction = (a,b) => {
//     return Math.pow(a,b)
// }

// let exposant = fonction(3,2)
// console.log(exposant);

// EXO 8

// let string = prompt("Phrase :")

// let capitalize = () => {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// console.log(capitalize());

// EXO 9

// let nb1 = parseInt(prompt("Nombre 1 ?"));
// let nb2 = parseInt(prompt("Nombre 2 ?"));
// let op = prompt("Opérateur ?");

// let add = (nb1, nb2) => {
//     return (nb1 + nb2);
// }
// let sous = (nb1, nb2) => {
//     return (nb1 - nb2);
// }
// let multi = (nb1, nb2) => {
//     return (nb1 * nb2);
// }
// let div = (nb1, nb2) => {
//     return (nb1 / nb2);
// }

// let calcul = (nb1, nb2, op) => {
//     let operateurs = ["+", "-", "*", "/"];
//     let resultat;
//     if (operateurs.includes(op)) {
//         switch (op) {
//             case "+":
//                 resultat = add(nb1, nb2);
//                 break;
//             case "-":
//                 resultat = sous(nb1, nb2);
//                 break;
//             case "*":
//                 resultat = multi(nb1, nb2);
//                 break;
//             case "/":
//                 resultat = div(nb1, nb2);
//                 break;
//             default:
//                 console.log("Erreur - mauvais opérateur");
//                 break;
//         }
//     }
//     return resultat
// }

// console.log(calcul(nb1, nb2, op));

// METHODE + COURTE

let calcul = (a, b, c) => {
    switch (b) {
        case "+":
            return `${a} + ${c} = ${a+c}`
        case "-":
            return `${a} - ${c} = ${a-c}`
        case "*":
            return `${a} * ${c} = ${a*c}`
        case "/":
            return `${a} / ${c} = ${a/c}`
        default:
            return `ERROR -> Not operateur : ${b}`
    }
}

console.log(calcul(6, "+", 2));