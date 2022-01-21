'use strict';

/**  Objetos  **/


const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;



const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true

}

//console.log(producto.precio) // Acceder a las diferentes propiedades de nuestro objeto 



/** Modificar Objetos **/

producto.imagen = 'imagen.jpg'; // agregar nueva propiedad;

delete producto.disponible;  // Borrar propiedad


console.log(producto)