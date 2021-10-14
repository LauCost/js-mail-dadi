//Seleziona elemento html sul quale poi stampera il numero
const utente = document.querySelector(".utente")

//Genera il numero per l'utente
const numeroUtente = Math.floor(Math.random() * 6) + 1;

console.log(numeroUtente);

//Stampa il numero casuale per l'utente
utente.innerHTML = "Numero casuale dell'Utente: " + numeroUtente;

//Seleziona elemento html sul quale poi stampera il numero
const pc = document.querySelector(".pc");

const numeroPc = Math.floor(Math.random() * 6) + 1;

//Stampa il numero casuale per il PC
pc.innerHTML = "Numero casuale del PC: " + numeroPc;

const risultato = document.querySelector(".risultato")
if (numeroUtente <= numeroPc) {
    risultato.innerHTML = "Hai Perso!"
} else {
    risultato.innerHTML = "Hai Vinto!"
}
