const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index.html' , {title: 'BGPrograms'});
});

router.get('/balneario', (req,res) => {
    res.render('balneario/balnearioilletas.html' , {title: 'Balneario Illetas'});
});

router.get('/balneario/albaranes', (req,res) => {
    res.render('balneario/albaranes.html' , {title: 'Balneario Illetas - Albaranes'});
});

router.get('/balneario/productos', (req,res) => {
    res.render('balneario/productos.html' , {title: 'Balneario Illetas - Productos'});
});

router.get('/balneario/proveedores', (req,res) => {
    res.render('balneario/proveedores.html' , {title: 'Balneario Illetas - Proveedores'});
});

router.get('/balneario/escandallos', (req,res) => {
    res.render('balneario/escandallos.html' , {title: 'Balneario Illetas - Escandallos'});
});

module.exports =  router;