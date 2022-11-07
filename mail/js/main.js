// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// lista invitati
const guestMails = ["giggino@gmail.com" , "geppetto@gmail.com" , "gennarino@gmail.com"];
console.log(guestMails);

// richiedi mail utente
const mail = prompt("Scrivi il tuo indirizzo di posta elettronica");
console.log(mail);

// check lista
let check = guestMails.indexOf(mail);

// stampa un messaggio appropriato sull’esito del controllo.
if ( check >= 0 ) {
    alert("Acesso consentito");
    console.log("La mail indicata è nella lista");
} else {
    alert("Accesso negato");
    console.log("La mail indicata non è nella lista");
}
