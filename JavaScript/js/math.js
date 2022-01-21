'use strict';

/**
 * Objeto Math: 
 * 
 * Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones
 * matemáticas. No es un objeto de funcion.
 * 
 * A diferencia de los démas objetos globales, el objeto Math no se puede editar. Todas las
 * propiedades de Math son estáticos.
 */


let resultado;

resultado = Math.PI;  // Numero PI;

resultado = Math.round(2.5); //Round sirve para redondear;

resultado = Math.ceil(2.2); //Ceil redondea hacia arriba siempre;

resultado = Math.floor(2.9); //Floor redondea siempre hacia abajo;

resultado = Math.sqrt(144);  // Sqrt nos devuelve la raiz cuadrada;

resultado = Math.abs(-200); // Devuelve el valor absoluto de un número;

resultado = Math.min(3, 5, 7, 1, 9); // Nos devuelve el numero mas pequeño;

resultado = Math.max(3, 5, 17, 13, 89); // Nos devuelve el numero mayor;

resultado = Math.random(); // Devuelve un número pseudo-aleatorio entre el 0 y el 1;

resultado = Math.floor( Math.random() * 100);  // Creamos números aletorios (hasta el 100 en este caso);


console.log(resultado)