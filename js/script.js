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
const numbers = getUniqueRandomNumber(1, 50, 5);
console.log(numbers);

