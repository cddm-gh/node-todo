const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    //Convertir la data en un arreglo JSON
    let data = JSON.stringify(listadoPorHacer);
    //Escribir en el archivo
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar la data ', err);
        else
            console.log('Data guardada.'.underline.green);
    });
}

const cargarDB = () => {
    //Cargar la data del archivo en un arreglo
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        //Si el archivo está vacio, crear el arreglo vacio.
        listadoPorHacer = [];
    }
}

const crear = (titulo, descripcion) => {

    cargarDB();
    //Nueva tarea
    let porHacer = {
        titulo,
        descripcion,
        completado: false
    };
    //Insertar la nueva tarea en el arreglo de tareas
    listadoPorHacer.push(porHacer);
    //Guardar en el archivo
    guardarDB();
    return porHacer;
}

const listar = () => {

    cargarDB();

    return listadoPorHacer;
}

const actualizar = (titulo, completado) => {

    cargarDB();
    //Buscar en el arreglo una tarea que tenga el mismo titulo de la tarea que se busca
    let index = listadoPorHacer.findIndex(tarea => {
            return tarea.titulo === titulo;
        })
        //Si es -1 no encontró alguna tarea con ese tiulo
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        console.log('No se encontró una tarea con ese titulo.'.underline.red);
        return false;
    }
}

const borrar = (titulo) => {
    cargarDB();
    //Buscar en el arreglo una tarea que tenga el mismo titulo de la tarea que se busca
    let index = listadoPorHacer.findIndex(tarea => {
            return tarea.titulo === titulo;
        })
        //Si es -1 no encontró alguna tarea con ese tiulo
    if (index >= 0) {
        //eliminar el elemento del arreglo
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        console.log('No se encontró una tarea con ese titulo.'.underline.red);
        return false;
    }
}

//Exportar las funciones
module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}