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
      console.log('FizzBuzz');
  } else if ( i % 5 === 0 ) { 
      console.log('Fizz');
  } else if ( i % 3 ===0 && i % 5 === 0) { 
      console.log('Buzz');
  } else { 
      console.log(i); 
  }
}
