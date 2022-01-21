'use strict';

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

// Unir dos objetos con Spread OPerator

const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto)