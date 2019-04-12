//Opciones para los comandos
const titulo = {
    demand: true,
    alias: 't',
    desc: 'Titulo de la tarea.'
}
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea.'
}
const completado = {
    demand: false,
    alias: 'c',
    default: false,
    desc: 'Marca como completada o pendiente la tarea.'
}
const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea.', { titulo, descripcion, completado })
    .command('listar', 'Imprime en consola las tareas.')
    .command('actualizar', 'Actualizar una tarea.', { titulo, completado })
    .command('borrar', 'Borrar una tarea.', { titulo })
    .help() //Agregar la ayuda para los comandos
    .argv;

module.exports = {
    argv
}