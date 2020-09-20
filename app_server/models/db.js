const mongoose = require('mongoose');

//Localhost debería de cambiar por el servidor en el que está la base de datos
const dbURI = 'mongodb://localhost/bigpizzadb';
mongoose.connect(dbURI, {useNewUrlParser: true});

//VERIFICACION DE CONEXIÓN

mongoose.connection.on('connected', () => {
    console.log(`Mongoose se conectó a ${dbURI}`);
});
mongoose.connection.on('error', err => {
   console.log('Mongoose error de conexión:', err);
});
mongoose.connection.on('disconnected', () => {
   console.log('Mongoose desconectado');
});