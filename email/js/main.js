//Chide all'utente la sua email
const email = prompt("Inserisci la tua email").toLowerCase();


//Sono le email autorizzate
const autorizzate = ["lau@gmail.com", "leo@gmail.com", "fabio@gmail.com", "tiziano@gmail.com", "fabiola@gmail.com"]


//Impostiamo l'accesso proibito fin da subito
let autorizzazione = false;

//Verifica che la email inserita sia presente tra quelle autorizzate
for (i = 0; i < autorizzate.length; i++) {
    if (email == autorizzate[i]) {

        //Se è tra quelle autorizzate impostiamo l'accesso a true
        autorizzazione = true;
    }
}

//In base all'accesso è true o false manda un allert
if (autorizzazione == true) {
    alert("Accesso Consentito!")
} else {
    alert("Accesso Negato!")
}




