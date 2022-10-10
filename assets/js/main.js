/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

for (i=1; i<=100; i++) {
      // se sono multipli di 3 stampiamo Fizz
      // se sono multipli di 5 stampiamo Buzz
      // se sono multipli sia di 3 che di 5 stampiamo FizzBuzz
      
      if ( i % 3 ===0) { 
            console.log('Fizz');
      } else if ( i % 5 === 0 ) { 
            console.log('Buzz');
      } else if ( i % 3 ===0 && i % 5 === 0) { 
            console.log('FizzBuzz');
      } else { 
            console.log(i); 
      }
}

/* BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*/
const container = document.getElementById ('container');
console.log(container, 'sono il container');


let boxNumber = document.createElement ('col')
container.append (boxNumber)

for (i=1; i<=100; i++) {
      
      if ( i % 3 ===0) {
            let Fizz = 'Fizz';
            boxNumber.append (Fizz);
      } else if ( i % 5 === 0 ) { 
            let Buzz = 'Buzz';
            boxNumber.append (Buzz);
      } else if ( i % 3 ===0 && i % 5 === 0) { 
            let FizzBuzz = 'FizzBuzz';
            boxNumber.append (FizzBuzz);
      } else { 
            boxNumber.append (i) 
      }
}






