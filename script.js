import { barcelona, roma, paris, londres } from './ciudades.js'

//Obtener los elementos del dom

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

// agregar un evento click a cada enlace

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover las clases active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');

        });
        //agregar la clase active al enlace actual
        this.classList.add('active');

        // obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    })
})


//funcion para traer el objeto de ciudades.js

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}