'use strict';

// Métodos de propiedad

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function () {
        console.log('Pausando la Canción...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist de ${nombre}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la Canción: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist('Regueton');
reproductor.reproducirPlaylist('Liricas');
reproductor.borrarCancion(3840);