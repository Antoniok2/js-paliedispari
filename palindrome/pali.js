// // // Chiedere all’utente di inserire una parola
// // // Creare una funzione per capire se la parola inserita è palindroma.
// // // Dare l’output relativo.

// // // QUI TROVO LE VARIABILI
// // var parola = prompt("Inserisci qui una parola e ti diro se è palindroma");
// // var carattere;
// // var parolaInversa = '';
// // var i = parola.length - 1;

// // // IN QUESTA MANIERA STO CREANDO UN CICLO WHILE PER FAR SI CHE MI SCOMPONE LA PAROLA LETTERA PER LETTA PARTENDO DALL'ULTIMA
// // while (i >= 0) {
// // // GLI STO DICENDO DI SCOMPORRE LA PAROLA LETTERA PER LETTERA 
// //   carattere = parola[i];
// // // QUI GLI STO DICENDO DI AGGIUNGERE AD OGNI GIRO OGNI SINGOLA LETTERA DELLA PAROLA SCOMPOSSA FINO A PRENDERE OGNI LETTERA AL CONTRARIO E FORMARMI LA PAROLA LETTA AL CONTRARIO
// //   parolaInversa += carattere;
// //   console.log(carattere);
// //   i--;
// // }
// console.log(parolaInversa);


// IN QUESTO MODO USANDO LA FUNZIONE PRECEDENTEMENTE CREATA EVITO DI CREARMI TUTTO IL PROCEDIMENTO SEMPLICEMENTE RICHIAMANDOLA
let parolaUtente = prompt("Inserisci una parola a caso e ti dirò se è palindorma");
let parolaInvertita = invertiParola(parolaUtente);

// QUINDI AGGIUNGO UNA CONDIZIONE
// SE LA PAROLA è UGUALE ALLA PAROLA LETTA AL CONTRARIO ALLORA è PALINDROMA
if(parolaUtente == parolaInvertita){
    alert('la parola è palindroma');

//     // AL CONTRARIO, NON LO è!
  } else {
    alert('la parola non è palindroma');
  }


// LA FUNZIONE CHE USERò PER INVERTIRE LA PAROLA E FARE UN CONFRONTO CON LA PAROLA INSERITA DALL'UTENTE E DIRGLI/LE SE PALINDROMA O MENO
  function invertiParola(parola){
    var carattere;
    var parolaInversa = '';
    var i = parola.length - 1;

    // IN QUESTA MANIERA STO CREANDO UN CICLO WHILE PER FAR SI CHE MI SCOMPONE LA PAROLA LETTERA PER LETTA PARTENDO DALL'ULTIMA
    while (i >= 0) {
    // GLI STO DICENDO DI SCOMPORRE LA PAROLA LETTERA PER LETTERA 
    carattere = parola[i];
    // QUI GLI STO DICENDO DI AGGIUNGERE AD OGNI GIRO OGNI SINGOLA LETTERA DELLA PAROLA SCOMPOSSA FINO A PRENDERE OGNI LETTERA AL CONTRARIO E FORMARMI LA PAROLA LETTA AL CONTRARIO
    parolaInversa += carattere;
    i--;
    console.log(parolaInversa);
    }
    return parolaInversa;
  }