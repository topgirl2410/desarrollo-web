'use strict';

const meses = ['Enero', 'febrero', 'marzo', 'abril', 'mayo'];

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 300 },
    { nombre: 'Televisión 50 pulgadas', precio: 600 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Telefono movil', precio: 500 },
    { nombre: 'Laptop', precio: 800 },
    { nombre: 'Altavoces', precio: 300 },
]

// forEach 

meses.forEach(function (mes) {
    if (mes == 'marzo') {
        console.log('marzo si existe');
    }
});

// Includes (arrays planos como el de meses)verificar si existe o no

let resultado = meses.includes('marzo');

// Some ideal para arrays de objetos 

resultado = carrito.some(function (producto) {
    return producto.nombre === 'Telefono movil' // acceder a cualquier propiedad en este caso nombre
});

// Reduce 

/**resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);*/

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


// Filter 

resultado = carrito.filter(function(producto){
    return producto.precio > 400
})


console.log(resultado);