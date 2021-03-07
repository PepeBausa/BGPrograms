const express = require('express');
const poolBGP = require('../database.js');
const router = express.Router();

const pool_DB_Balneario = require('../database.js')

router.get('/', (req,res) => {
    res.render('balneario/balnearioilletas.hbs' , {layout: 'main_balneario'});
});

router.get('/albaranes', (req,res) => {
    res.render('balneario/albaranes.hbs' , {layout: 'main_balneario'});
});

router.get('/productos', (req,res) => {
    res.render('balneario/productos.hbs' , {layout: 'main_balneario'});
});

router.get('/proveedores', (req,res) => {
    res.render('balneario/proveedores.hbs' , {layout: 'main_balneario'});
});

router.get('/escandallos', (req,res) => {
    res.render('balneario/escandallos.hbs' , {layout: 'main_balneario'});
});

module.exports =  router;