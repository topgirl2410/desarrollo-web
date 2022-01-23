'use strict';

// Arrays;

const numeros = [10, 20, 30, 40, 50];


// Metodos para Arrays;

numeros.push(60, 70, 80, 90); // agrega los elementos al final de array;

numeros.unshift(-10, -20, -30); // agrega los elementos al principio del array;

console.table(numeros) // Muestra datos tabulares como una tabla.



const meses = ['Enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

//meses.pop(); // elimina el ultimo elemento del array;

//meses.shift(); // elimina el primer elemento del array;

meses.splice(2, 1); // elimina el elemento que tu le indiques, primero es la posicion del elemento, segundo cuantos quieres borrar desde alli;

console.table(meses);