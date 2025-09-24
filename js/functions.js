/**Funzione isPalindrome
 * Descrizione : la funzione definisce se una parola è palindroma
 * 
 * @param {string} wordToCheck
 * @return {boolean}
 */



function isPalindrome(wordToCheck) {
    let reverseWord = "";
    for (let i = wordToCheck.length - 1; i >= 0; i--) {
        const curLetter = wordToCheck[i];
        reverseWord += curLetter;
    }
    const result = wordToCheck.toLowerCase() === reverseWord.toLowerCase();
    return result;
}

/**Funzione Random
 * Descrizione: Genera un numero random compreso tra min e max, entrambi inclusi.
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 */

function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}



/**Funzione isEven
 * Descrizione: la funzione definisce se il numero è pari
 * 
 * @param {number} numberToCheck
 * @returns {boolean}
 */

function isEven(numberToCheck) {
  const result = numberToCheck % 2 === 0;
  return result;
}
