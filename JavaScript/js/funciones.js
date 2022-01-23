'use strict';
/**
 * Las funciones son unos de los bloques de construccion fundamentales en JavaScript.
 * Una función en JS es similar a un procedimiento -- un conjunto de instrucciones 
 * que realiza una tarea o calcula un valor, pero que para un procedimiento califique
 * como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación
 * ovbia entre la entrada y la salida. Para usar una función, debes definirla en algun 
 * lugar del ambito desde el que deseas llamarla.
 */

/**
 * Una definicion de funcion consta de la palabra clave function, seguida de:
 * El nombre de la función.
 * 
 * Una lista de parámetros de la función, entre parentesis y separados por comas.
 * 
 * Las declaraciones de JS que definen la función, encerradas entre llaves, {...}.
 */


// Declaración de función

function sumar() {    // La creas;
    console.log(10 + 10);
}

sumar();  // Se invoca;


//Expresión de la función 

const sumar2 = function(){
    console.log(1 + 1);
}

sumar2();

/* IIFE (no hace falta llamarlas, se invocan ellas mismas) protege las variables y funciones para que no se mezclen con otros archivos.

(function(){
    console.log('Esto es una función');
})();*/


//Más sobre funciones

const numero1 = 20;
const numero2 = "20";


console.log(parseInt(numero2));  //parseInt() es una función.
console.log(numero1.toString());  // .toString() es un método.

