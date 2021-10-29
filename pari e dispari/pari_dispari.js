// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Dico all'utente di scegliere tra pari e dispari e indicare il numero
let userPariDispari = prompt("Benvenuto al gioco, scegli tra PARI o DISPARI");
let userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));

console.log(userPariDispari);
console.log(userNumber);

// GENERO UN NUMERO RANDOM PER IL PC
let randomNumPc = Math.floor(Math.random() * 5) + 1;
console.log(randomNumPc);

// SOMMIAMO ENTRAMBI I NUMERI OTTENUTI SIA DALL'UTENTE CHE DAL PC
let sommaNumb = userNumber + randomNumPc;
console.log(sommaNumb);

// DEVO stabilire se il risultato è pari o dispari
let dispari = true;
let pari = true;

if (sommaNumb % 2 === 0) {
    dispari = false;
    console.log("Il numero ricavato è un numero pari");
} else {
    dispari = true;
    console.log("Il numero ricavato è un numero dispari");
}

// ADESSO DEVO DICHIARARE ALL'UTENTE SE HA VINTO O MENO
if (userPariDispari === pari && sommaNumb !== dispari) {
    alert("Complimenti, hai vinto tu")
} else {
    alert("Mi dispiace, ha vinto il pc")
}



