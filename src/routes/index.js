const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index.html' , {title: 'BGPrograms'});
});

router.get('/balnearioilletas', (req,res) => {
    res.render('balnearioilletas.html' , {title: 'Balneario Illetas'});
});

module.exports =  router;