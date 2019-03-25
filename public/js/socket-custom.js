var socket = io();

//Los on son para escuchar informacion
socket.on('connect', function() {

    console.log('Conectado al servidor');

})

socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

})

// Los emit son para enviar informacion
// socket.emit('enviarMensaje', {

//     usuario: 'Herrwolf',
//     mensaje: 'Hola mundo'

// }, function(resp) {

//     console.log('Respuesta server: ', resp);

// })

socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

})