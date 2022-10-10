/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

for (i=1; i<=100; i++) {
      // se sono multipli di 3 stampiamo Fizz
      // se sono multipli di 5 stampiamo Buzz
      // se sono multipli sia di 3 che di 5 stampiamo FizzBuzz
      
      if ( i % 3 ===0  && i % 5 === 0) { 
            console.log('FizzBuzz');
      } else if ( i % 5 === 0 ) { 
            console.log('Buzz');
      } else if ( i % 3 ===0) { 
            console.log('Fizz');
      } else { 
            console.log(i); 
      }
}

/* BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*/

const container = document.getElementById ('container');
console.log(container, 'sono il container');

const ulElement = document.querySelector ('ul')


for (i=1; i<=100; i++) {
      
      let boxNumber = document.createElement ('li')
      ulElement.append (boxNumber)
      
      if ( i % 3 ===0 && i % 5 === 0) {
            boxNumber.append ('FizzBuzz');
            boxNumber.style.background = "rgb(34,193,195)";
            boxNumber.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
      } else if ( i % 5 === 0 ) { 
            boxNumber.append ('Buzz');
            boxNumber.style.background = "rgb(34,193,195)";
            boxNumber.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,45,178,1) 100%)";

      } else if ( i % 3 ===0 ) {
            boxNumber.append ('Fizz');
            boxNumber.style.background = "rgb(34,193,195)";
            boxNumber.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,105,253,1) 100%)";

      } else { 
            boxNumber.append (i);
            boxNumber.style.background = "rgb(238,174,202)";
            boxNumber.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
      }
}

/* BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. */






