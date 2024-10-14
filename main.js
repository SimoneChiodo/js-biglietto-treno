/*
 *Testo esercizio:

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//-----------------------------
// Prelievo dati
//-----------------------------
//Input distanza
let distance = prompt("Inserire la distanza (km):");

//Input eta' passegero
let age;
// Se la distanza e' un numero, allora prendo anche l'eta'
if (!isNaN(parseFloat(distance))) {
    age = prompt("Inserire l'età del passeggero:");
}

//-----------------------------
//Elaborazione dati
//-----------------------------
// Se l'input e' corretto
let price;
if (!isNaN(parseFloat(distance)) || !isNaN(parseInt(age))) {
    // Calcolo prezzo biglietto
    price = parseInt(distance) * 0.21;

    // Applico sconti
    // Controllo se minorenne
    if (parseInt(age) < 18) {
        // Applico sconto 20%
        price = (price * 20) / 100;
    }
    // Controllo se > 65 anni
    else if (parseInt(age) >= 65) {
        // Applico sconto 40%
        price = (price * 40) / 100;
    }
}

//-----------------------------
//Output
//-----------------------------
// Se l'input e' corretto
if (!isNaN(parseFloat(distance)) && !isNaN(parseInt(age))) {
    alert("Il prezzo del biglietto è: " + price.toFixed(2) + "€");
}
// Se l'input e' errato
else {
    alert("I dati inseriti non sono corretti!");
}
