'use strict';

/**
 * Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos 
 * para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el
 *  tipo de los elementos de un array son variables.
 */

const numeros = [10, 20, 30, 40, 50];


console.table(numeros) // Muestra datos tabulares como una tabla.

const meses = ['Enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

console.table(meses);

// Acceder a los valores de un Array;

console.log(numeros[3]);
console.log(numeros[0]);

// Conocer la extensión del Array;

console.log(meses.length);


/**
 * forEach() ejecuta la función callback una vez por cada elemento del array; 
 * a diferencia de map() o reduce() este siempre devuelve el valor undefined 
 * y no es encadenable.
 */
meses.forEach(function (mes) {
    console.log(mes)
})