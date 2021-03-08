const express = require('express');
const router = express.Router();

const {DBBGP} = require('../database.js');

router.get('/', (req,res) => {
    res.render('bgprograms/index.hbs' , {layout: 'main'});
});

router.get('/about', (req,res) => {
    res.render('bgprograms/about.hbs' , {layout: 'main'});
});

router.get('/contact', (req,res) => {
    res.render('bgprograms/contact.hbs' , {layout: 'main'});
});

module.exports =  router;