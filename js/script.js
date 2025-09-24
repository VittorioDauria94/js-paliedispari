/** Esercizio 1
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR */

// const wordStr = prompt("Inserisci una parola");
// let message = "";

// if (!isNaN(wordStr) || wordStr === null || wordStr.length < 3) {
//     message = "Errore: la parola non può essere un numero e deve avere almeno 3 caratteri. Ricarica la pagina.";
// } else {
//     if (isPalindrome(wordStr)) {
//         message = "La parola che hai inserito è palindroma";
//     } else {
//         message = "La tua parola non è palindroma";
//     }
// }
//     console.log(message);


/** Esercizio 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 6.
Generiamo un numero random (sempre da 1 a 6) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const evenOrOdd = prompt("Il numero finale sarà pari o dispari?");
const numberChoise = parseInt(prompt("scegli un numero da 1 a 6"));
const randomDiceNumber = generateRandomNumber(1, 6);
const sumOfNumbers = numberChoise + randomDiceNumber;
let message = ""

if(evenOrOdd === null || (evenOrOdd.toLowerCase() !== "pari" && evenOrOdd.toLowerCase() !== "dispari")) {
    message = "Errore: scrivere correttamente pari o dispari. Ricarica la pagina";
} else if (isNaN(numberChoise) || numberChoise < 1 || numberChoise > 6) {
    message = "Errore: inserire correttamente un numero da 1 a 6. Ricarica la pagina"
} else {
    if (isEven(sumOfNumbers) && evenOrOdd.toLowerCase() === "pari" || !isEven(sumOfNumbers) && evenOrOdd.toLowerCase() === "dispari") {
    message = "Hai vinto";
}   else {
    message = "Hai perso"
}   
    console.log(`Hai Scelto ${evenOrOdd}`);
    console.log(`Il tuo numero è ${numberChoise}`);
    console.log(`Il numero random è ${randomDiceNumber}`);
    console.log(`La somma dei tuoi numeri è ${sumOfNumbers}`);
}
console.log(message);
