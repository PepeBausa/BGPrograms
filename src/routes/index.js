const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index.html' , {title: 'BGPrograms'});
});

router.get('/balneario', (req,res) => {
    res.render('balneario.html' , {title: 'Balneario Illetas'});
});

module.exports =  router;