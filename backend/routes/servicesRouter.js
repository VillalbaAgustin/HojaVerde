// importamos express
const express = require("express");

// instanciamos express
const router = express.Router();

// importamos el módulo servicesController
const servicesController = require('../Controllers/servicesController');

// Rutas:
//Para consultar listado de plantas
router.get('/', servicesController.getAllServices);
//Para consulta de plantas por id
router.get('/:id', servicesController.getServiceById);
//Para crear una planta
router.post('/', servicesController.createService);
//Para actualizar una planta
router.put('/:id', servicesController.updateService);
//Para borrar una planta
router.delete('/:id', servicesController.deleteService);

// exportamos el módulo
module.exports = router;

//Pasamos a configurar servicesController.js