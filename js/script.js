/** Esercizio 1
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR */

const wordStr = prompt("Inserisci una parola");
let message;
if (isPalindrome(wordStr)) {
    message = "La parola che hai inserito è palindroma"
} else {
    message = "La tua parola non è palindroma"
}

console.log(message);


/** Esercizio 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 6.
Generiamo un numero random (sempre da 1 a 6) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */