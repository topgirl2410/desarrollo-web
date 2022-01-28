'use strict';

/**
 * La declaracion switch avalúa una expresión, comparando el valor de esa expresión
 * con una instancia 'case', y ejecuta declaraciones asociadas a ese 'case', así como
 * las declaraciones en los 'case' que siguen.
 */

const metodoPago = '';

switch(metodoPago){
    case 'tarjeta': 
        console.log('Pagaste con tarjeta');
        break;
    
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    
    case 'bitcoin':
        console.log('No aceptamos ese metodo de pago');
        break;

    default:
        console.log('Aún no has pagado');
        break;
}