'use strict';

// Primer ejercicio

const puntuacion = 1002;

if(puntuacion == 1000){
    console.log('Si la puntuacion es 1000')
}else{
    console.log('No, la puntuación no es correcta')
}

// Segundo ejercicio

const efectivo = 100;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
};

// Tercer ejercicio

const rol = 'VISITANTE';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
}else if(rol === 'EDITOR') {
    console.log('Eres editor, puedes entrar pero con limitaciones');
}else{
    console.log('Este usuario no tiene permisos')
}

