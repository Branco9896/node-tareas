const argv = require('yargs').
command('crear', 'Crea una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            default: true,
            alias: 'c'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .argv;

module.exports = {
    argv
}