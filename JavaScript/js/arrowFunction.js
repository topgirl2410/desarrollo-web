'use strict';

// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript')




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


meses.forEach(mes => {
    if (mes == 'marzo') {
        console.log('marzo si existe');
    }
});

let resultado;

resultado = carrito.some(producto => {
    return producto.nombre === 'Telefono movil'
});


resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);


resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre === 'Telefono movil');
console.log(resultado);

resultado = carrito.filter(producto =>  producto.nombre !== 'Telefono movil');
console.log(resultado)
