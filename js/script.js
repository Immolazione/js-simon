console.log('JS OK');

/*
DESCRIZIONE:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.

BONUS:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
*/

let min = 0;
let max = 50;
let totale = 5;

// FUNZIONE RANDOMIZZANTE
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// FUNZIONE CHE NON PUSHA SE GIA PRESENTE NELL'ARRAY
const getUniqueRandomNumber = (min, max, totale) => {
    const numbers = [];
    while (numbers.length < totale) {
        const randomNumber = getRandomNumber(min, max);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        };
    };
    return numbers;
};

// CREO ARRAY CON 5 NUMERI
const numbers = getUniqueRandomNumber(min, max, totale);
console.log(numbers);

// ALERT CHE MOSTRA I NUMERI
alert(`I tuoi numeri sono: ${numbers}`);

const myTimeout = setTimeout(() => {
    // ARRAY CON I NUMERI DELL'UTENTE
    const userNums = [];

    // ARRAY CON I NUMERI CORRETTI
    const correctNums = [];

    while (userNums.length < 5) {
        let userGuess = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`).trim());
        // VALIDAZIONE

        userNums.push(userGuess);
        if (numbers.includes(userGuess)) correctNums.push(userGuess);
    };
    console.log(userNums);
    console.log(correctNums);
}, 2000);

// ALERT PER IL RISULTATO

