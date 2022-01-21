'use strict';

/**  Objetos  **/


const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Forma anterior;

//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;
//const disponibleProducto = producto.disponible;


//console.log(precioProducto);
//console.log(nombreProducto);
//console.log(disponibleProducto);

// Destructuring;

const {precio} = producto;
const {nombreProducto} = producto;
const {disponible} = producto;



console.log(precio);
console.log(nombreProducto);
console.log(disponible);