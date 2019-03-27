//const argv = require('yargs').argv;
const argv = require(`./config/yargs`).argv;
const color = require(`colors`);

const operaciones = require(`./logica/logica`);

let comando = argv._[0]


switch (comando) {
    case 'crear':
        let tarea = operaciones.crearTarea(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let lista = operaciones.getArreglo();
        for (let t of lista) {
            console.log("=========Tarea=========".green);
            console.log(`DESCRIPCION: ${t.descripcion}`);
            console.log(`ESTADO: ${t.completado}`);
            console.log("=======================".green);
        }
        break;
    case 'actualizar':
        let resultado = operaciones.actualizarTarea(argv.descripcion, argv.completado);
        console.log(resultado);
        break;
    case 'borrar':
        let borrado = operaciones.borrarTarea(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}