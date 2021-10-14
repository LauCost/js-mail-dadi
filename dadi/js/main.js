//Seleziona elemento html sul quale poi stampera il numero
const utente = document.querySelector(".utente")

//Genera il numero per l'utente
const numeroUtente = Math.floor(Math.random() * 6) + 1;

//Stampa il numero casuale per l'utente
utente.innerHTML = "Numero casuale dell'Utente: " + numeroUtente;

//Seleziona elemento html sul quale poi stampera il numero
const pc = document.querySelector(".pc");

//Genera il numero per il PC
const numeroPc = Math.floor(Math.random() * 6) + 1;

//Stampa il numero casuale per il PC
pc.innerHTML = "Numero casuale del PC: " + numeroPc;

//Seleziona elemento html sul quale stampa l'esito
const risultato = document.querySelector(".risultato")

//Verifica se è un pareggio
if (numeroUtente == numeroPc) {

    //Stamapa il risultato
    risultato.innerHTML = "Pareggio!"

    //Verifica se l'utente ha vinto
} else if (numeroUtente > numeroPc) {

    //Stamapa il risultato
    risultato.innerHTML = "Hai Vinto!"

    //Verifica se l'utente ha perso
} else {

    //Stamapa il risultato
    risultato.innerHTML = "Hai Perso"
}
