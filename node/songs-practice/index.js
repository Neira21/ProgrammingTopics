const { PORT } = require('./config/config');
const { database } = require('./config/config-database');
const { songsApi } = require('./server/server-index');

try {
    database.authenticate().then(() => {
        console.log('La conexión con la base de datos ha sido establecida');
        songsApi.listen(PORT, () => {
            console.log(`La aplicación está corriendo en el puerto ${PORT}`);
        })
    })
} catch (error) {
    console.error('No se ha podido establecer la conexión con la base de datos', error);
}