/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroVocali (parola){
  const vocali = 'aeiou';
  parola = parola.toLowerCase();
  let nuovaVocale = 0;
  for (let i = 0; i < parola.length; i++){
    if (vocali.includes(parola[i])){
      nuovaVocale++;
    }
  }
  return nuovaVocale;
}



// Invoca la funzione qui e stampa il risultato in console
console.log(numeroVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)