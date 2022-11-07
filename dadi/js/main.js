// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// generare numero random da 1 a 6: per player e cpu.

alert("Giochiamo a dadi?");

const playerDice = Math.floor(Math.random() * 6) + 1;

const cpuDice = Math.floor(Math.random() * 6) + 1;

// risultato della partita

if (playerDice > cpuDice) {
    console.log("Il giocatore ha vinto con" , playerDice);
    console.log("Il computer ha perso con" , cpuDice);
    alert("Complimenti! Hai vinto con "+ playerDice +"! Il computer invece ha perso con "+ cpuDice+" punti!");  
} else if (playerDice < cpuDice) {
    console.log("Il giocatore ha perso con" , playerDice);
    console.log("Il computer ha vinto con" , cpuDice);
    alert("Peccato, hai perso con "+ playerDice +"! Il computer invece ha vinto con "+ cpuDice+" punti!");
} else {
    console.log("Il giocatore e il computer hanno pareggiato con" , playerDice);
    alert("Pareggio! Tu e il computer avete pareggiato con "+ playerDice+ " punti!");
}
