const express = require('express');
const {DBBalneario} = require('../database.js');
const {isLoggedIn} = require('../lib/auth.js');

const router = express.Router();

const pool_DB_Balneario = require('../database.js')

router.get('/', isLoggedIn, (req,res) => {
    res.render('balneario/balnearioilletas.hbs', {layout: 'main_balneario'});
});

router.get('/albaranes', isLoggedIn, (req,res) => {
    res.render('balneario/albaranes.hbs', {layout: 'main_balneario'});
});

router.get('/productos', isLoggedIn, (req,res) => {
    res.render('balneario/productos.hbs', {layout: 'main_balneario'});
});

router.get('/proveedores', isLoggedIn, (req,res) => {
    res.render('balneario/proveedores.hbs', {layout: 'main_balneario'});
});

router.get('/escandallos', isLoggedIn, (req,res) => {
    res.render('balneario/escandallos.hbs' , {layout: 'main_balneario'});
});

module.exports =  router;