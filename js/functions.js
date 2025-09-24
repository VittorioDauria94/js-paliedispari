/**Descrizione : la funzione definisce se una parola è palindroma
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