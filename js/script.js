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

const display = document.getElementById('display');
const randomNumbers = [];
const askedNumbers = [];
let time = 30 * 1000;
let askNumber;

const getRandomNumbers = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(getRandomNumbers(0, 100));

do {
    randomNumbers.push(getRandomNumbers(1, 100));
}
while (randomNumbers.length < 5 && !randomNumbers.includes(getRandomNumbers));

alert(randomNumbers);

console.log(randomNumbers);

const myTimeout = setTimeout(() => {
    
    console.log(askedNumbers);
}, 3000);

