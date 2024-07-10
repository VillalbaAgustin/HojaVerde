// importamos express
const express = require("express");

// instanciamos express
const router = express.Router();

// importamos el módulo ordersController
const ordersController = require('../Controllers/ordersController');

// Rutas:
//Para consultar listado de plantas
router.get('/', ordersController.getAllOrders);
//Para consulta de plantas por id
router.get('/:id', ordersController.getOrderById);
//Para crear una planta
router.post('/', ordersController.createOrder);
//Para actualizar una planta
router.put('/:id', ordersController.updateOrder);
//Para borrar una planta
router.delete('/:id', ordersController.deleteOrder);

// exportamos el módulo
module.exports = router;

//Pasamos a configurar ordersController.js