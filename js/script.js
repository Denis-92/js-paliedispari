/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

console.log('JS - OK!');

/* ESERCIZIO 1 -----------------------------

let inputUtente = prompt('inserisci parola, per verificare se è palindroma'); console.log('inputUtente', inputUtente);

inputUtente = controllarePalindromo(inputUtente);

console.log('Risposta: ', inputUtente);

---------------------------------- */

/*
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

const inputPariDispari = prompt('scegli PARI o DISPARI').toLowerCase();

const inputNumero = parseInt(prompt('inserisci numero da 1 a 5')); console.log('Hai scelto:', inputPariDispari, ' e ', inputNumero);

const sommaInputRandom = sommaRandom(inputNumero);

const risultato = controlloPariDispari(sommaInputRandom, inputPariDispari);

console.log(risultato);



/* ---------- FUNZIONI ---------- */

// FUNZIONE ESERCIZIO 1 - PALINDROMO

function controllarePalindromo(parolaInput) {

    const mezzaLunghezzaParola = Math.floor(parolaInput.length / 2); console.log('mezzaLunghezzaParola', mezzaLunghezzaParola);

    let reverseIndex = parolaInput.length - 1; //console.log('reverseIndex', reverseIndex);

    let palindromaFlag = true;

    for (let i = 0; i < mezzaLunghezzaParola; i++) {

        //console.log('ciclo for - indice', i);
        //console.log('ciclo for - reverse', reverseIndex);

        if (parolaInput[i] === parolaInput[reverseIndex]) {
            //console.log('lettera uguale', i);
        } else {
            //console.log('lettera diversa', i);
            palindromaFlag = false;
        }

        reverseIndex--;

    }
    //console.log('ciclo for finito');

    if (palindromaFlag) {
        //console.log('La parola è palindroma!')
        palindromaFlag = 'La parola è palindroma'
    } else {
        //console.log('La parola NON è palindroma!')
        palindromaFlag = 'La parola NON è palindroma'
    }

    return palindromaFlag;
}

// FUNZIONE ESERCIZIO 1 - PALINDROMO - //FINITO


// FUNZIONE ESERCIZIO 2 - PARI O DISPARI

function sommaRandom(importNumero) {
    const numeroRandom = Math.floor(Math.random() * 5 + 1); console.log('numero random: ', numeroRandom);
    const sommaImportRandom = importNumero + numeroRandom;
    return sommaImportRandom;
}

function controlloPariDispari(importNumeroSommato, importScelta) {
    let verificaPari = '';
    if (sommaInputRandom % 2 === 0) {
        console.log('è pari');
        verificaPari = 'Il risultato è pari... ';
        if (importScelta === 'pari') { verificaPari += 'Hai vinto!'; }
        else { verificaPari += 'Non hai vinto, ritenta sarai più fortunato!'; }
    } else {
        console.log('è DISpari');
        verificaPari = 'Il risultato è DISpari... ';
        if (importScelta === 'dispari') { verificaPari += 'Hai vinto!'; }
        else { verificaPari += 'Non hai vinto, ritenta sarai più fortunato!'; }
    }
    return verificaPari;
}