// Importamos express
const express = require('express');

// Instanciamos express
const app = express();

// Importamos el módulo plantsRoutes
const plantsRouter = require('../routes/plantsRouter.js');
const servicesRouter = require("../routes/servicesRouter.js");

// Declaramos el puerto
const PORT = 3000; 

// middleware .json (convierte el cuerpo de la solicitud en algo accesible por js)
app.use(express.json());

// ruta ppal y sub-rutas
app.use('/plants', plantsRouter);
app.use('/services', servicesRouter);

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

// Pasamos a configurar el router
