/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function newArray(array){
  let firstLetter = ''
  for (let i=0; i<array.length; i++){
    firstLetter += array[i].split('').at(0);
  }
  return firstLetter.split('');
}

// Invoca la funzione qui e stampa il risultato in console

console.log(newArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]