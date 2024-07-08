// importamos express
const express = require("express");

// instanciamos express
const router = express.Router();

// importamos el módulo plantsControllers
const plantsController = require('../Controllers/plantsController');

// Rutas:
//Para consultar listado de plantas
router.get('/', plantsController.getAllPlants);
//Para consulta de plantas por id
router.get('/:id', plantsController.getPlantById);
//Para crear una planta
router.post('/', plantsController.createPlant);
//Para actualizar una planta
router.put('/:id', plantsController.updatePlant);
//Para borrar una planta
router.delete('/:id', plantsController.deletePlant);

// exportamos el módulo
module.exports = router;

//Pasamos a configurar plantsController.js