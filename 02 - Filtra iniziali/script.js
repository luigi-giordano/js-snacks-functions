/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const letterUser = prompt('Inserisci una lettera');

function firstLetter(array, letter){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    if (letter.toLowerCase() === array[i].toLowerCase().split('').at(0)){
      newArray.push(array[i])
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names, letterUser));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]