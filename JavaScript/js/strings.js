'use strict'

// Strings o Cadenas de texto (clase 1 de strings)

//const producto = "Monitor de 20 Pulgadas";

//const producto2 = String('Monitor 30 Pulgadas'); // No es muy común

//const producto3 = new String('Monitor 50 Pulgadas'); // No es muy común

//console.log(producto);
//console.log(producto2);
//console.log(producto3);


/*Metodos para los strings*/

const tweet = "Aprendiendo JavaScript con el curso desarrollo web completo";
const producto = "Monitor HD";

// length es para la extension
console.log(tweet.length);
console.log(producto);

/*IndexOf (Retorna posicion)*/

console.log(tweet.indexOf('JavaScript'));
console.log(producto.indexOf('Tablet'));

/**Includes (Retorna True o False) */
console.log(tweet.includes('JavaScript'));
console.log(producto.includes('Tablet'));