const argv = require('./config/yargs').argv;
const tareas = require('./tareas/todo');

//Tomar el comando desde consola
let comando = argv._[0];

switch (comando) {
    case 'crear':
        tareas.crear(argv.titulo, argv.descripcion);
        break;
    case 'listar':
        let listado = tareas.listar();
        if (listado.length > 0) {
            for (const tarea of listado) {
                console.log('========Por Hacer=========='.blue);
                console.log(tarea.titulo, ': ', tarea.descripcion);
                console.log('Completado: ', tarea.completado);
                console.log('==========================='.blue);
            }
        } else {
            console.log('No hay datos que mostrar.'.underline.red);
        }
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.titulo, argv.completado);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.titulo);
        break;
    default:
        console.log('Opción inválida\n Solo puede: \n 1 - Crear \n 2 - Listar \n 3 - Actualizar ');
        break;
}