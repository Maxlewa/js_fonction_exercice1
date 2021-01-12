// EXO 1

// let fonction = (a,b) => {
//     return (a + b)
// }

// let addition = fonction(1, 2)
// console.log(addition);

// EXO 2

// let fonction = (a,b) => {
//     return (b - a)
// }

// let soustraction = fonction(2, 8)
// console.log(soustraction);

// EXO 3

// let fonction = (a,b) => {
//     return (a * b)
// }

// let multiplication = fonction(2, 5)
// console.log(multiplication);

// EXO 4

// let fonction = (a,b) => {
//     return (a / b)
// }

// let division = fonction(6, 3)
// console.log(division);

// EXO 5

// let fonction = (a,b) => {
//     return (a % b)
// }

// let rest = fonction(12, 5)
// console.log(rest);

// EXO 6

// let fonction = (a) => {
//     return Math.sqrt(a)
// }

// let squareRoot = fonction(9)
// console.log(squareRoot);

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

let nb1 = parseInt(prompt("Nombre 1 ?"));
let nb2 = parseInt(prompt("Nombre 2 ?"));
let op = prompt("Opérateur ?");

let add = (nb1, nb2) => {
    return (nb1 + nb2);
}
let sous = (nb1, nb2) => {
    return (nb1 - nb2);
}
let multi = (nb1, nb2) => {
    return (nb1 * nb2);
}
let div = (nb1, nb2) => {
    return (nb1 / nb2);
}

let calcul = (nb1, nb2, op) => {
    let operateurs = ["+", "-", "*", "/"];
    let resultat;
    if (operateurs.includes(op)) {
        switch (op) {
            case "+":
                resultat = add(nb1, nb2);
                break;
        
            case "-":
                resultat = sous(nb1, nb2);
                break;
        
            case "*":
                resultat = multi(nb1, nb2);
                break;
        
            case "/":
                resultat = div(nb1, nb2);
                break;
        
            default:
                console.log("Erreur - mauvais opérateur");
                break;
        }
    }
    return resultat
}

console.log(calcul(nb1, nb2, op));