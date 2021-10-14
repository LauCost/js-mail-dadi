//Seleziona elemento html sul quale poi stampera il numero
const numeroUtente = document.querySelector(".utente");

//Stampa il numero casuale per l'utente
numeroUtente.innerHTML = "Numero casuale dell'Utente: " + Math.floor((Math.random() * 6) + 1);

//Seleziona elemento html sul quale poi stampera il numero
const numeroPc = document.querySelector(".pc");

//Stampa il numero casuale per il PC
numeroPc.innerHTML = "Numero casuale del PC: " + Math.floor((Math.random() * 6) + 1);
