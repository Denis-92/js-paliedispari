/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

console.log('JS - OK!');


const parolaInput = prompt('inserisci parola, per verificare se è palindroma'); console.log('parolaInput', parolaInput);

const mezzaLunghezzaParola = Math.floor(parolaInput.length / 2); console.log('mezzaLunghezzaParola', mezzaLunghezzaParola);

let reverseIndex = parolaInput.length - 1; console.log('reverseIndex', reverseIndex);

let palindromaFlag = true;

for (let i = 0; i < mezzaLunghezzaParola; i++) {

    console.log('ciclo for - indice', i);
    console.log('ciclo for - reverse', reverseIndex);

    if (parolaInput[i] === parolaInput[reverseIndex]) {
        console.log('lettera uguale', i);
    } else {
        console.log('lettera diversa', i);
        palindromaFlag = false;
    }

    reverseIndex--;

}
console.log('ciclo for finito');


/*
function palindromo(parolaInput) {
    return true;
}
*/