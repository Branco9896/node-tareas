const fs = require('fs');

let arregloTareas = [];

const cargarDB = () => {
    try {
        arregloTareas = require('../db/data.json');
    } catch (error) {
        arregloTareas = [];
    }
}

const grabarDB = () => {
    let data = JSON.stringify(arregloTareas);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar');
    })

}


const crearTarea = (descripcion) => {
    cargarDB();

    let tarea = {
        descripcion: descripcion,
        completado: false
    }

    arregloTareas.push(tarea);

    grabarDB();
    return tarea;
}

const getArreglo = () => {
    cargarDB();
    return arregloTareas;
}

const actualizarTarea = (descripcion, completado = true) => {
    cargarDB();
    let indice = arregloTareas.findIndex(tar => tar.descripcion === descripcion);
    if (indice >= 0) {
        arregloTareas[indice].completado = completado;
        grabarDB();
        return true;
    } else {
        return false;
    }
}

const borrarTarea = (descripcion) => {
    cargarDB();
    let nuevoArregloTareas = arregloTareas.filter(tar => { return tar.descripcion !== descripcion });
    if (nuevoArregloTareas.lenght === arregloTareas.length) {
        return false;
    } else {
        arregloTareas = nuevoArregloTareas;
        grabarDB();
        return true;
    }
}

module.exports = {
    crearTarea,
    getArreglo,
    actualizarTarea,
    borrarTarea
}