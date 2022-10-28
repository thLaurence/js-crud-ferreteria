const express = require('express');
const { agregar } = require('../controllers/InvController');
// Controlador de Inventario
const InvController = require('../controllers/InvController');
// Controlador de Notas
const NotController = require('../controllers/NotController');


const router = express.Router();
// Rutas de Inventario
router.get('/inv', InvController.inv);
router.get('/agregar', InvController.agregar);
router.post('/agregar', InvController.tienda);
router.get('/inv/vender/:id', InvController.vender);
router.post('/inv/vender/:id', InvController.venta);
router.get('/ventas', InvController.ventas);
router.post('/inv/sumar', InvController.sumar);
router.get('/inv/editar/:id', InvController.editar);
router.post('/inv/editar/:id', InvController.actualizar);
router.post('/inv/sumyres', InvController.sumaryrestar);
router.get('/inv/eliminar/:id', InvController.eliminar);

// Rutas de Notas
router.get('/notas', NotController.notas);
router.get('/notas/agregarNotas', NotController.agregarNotas);
router.post('/notas/agregarNotas', NotController.agregar);
router.get('/notas/eliminar/:id', NotController.eliminar);
module.exports = router;

