/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = 'Mario';


// Dichiara la funzione qui.

const greet = (name)=> {
  const d = new Date();
  const h = d.getHours();
  let gretings = '';

  if (h < 14) greatins = 'Buongiorno'
  else if (h < 18) greatings = 'Buongiorno'
  else gretings = 'Buonasera'

  return `${greatings} ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greet(userName));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.