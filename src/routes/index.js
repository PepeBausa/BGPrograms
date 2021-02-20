const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index.html' , {title: 'BGPrograms'});
});

router.get('/bi', (req,res) => {
    res.render('bi.html' , {title: 'Balneario Illetas'});
});

module.exports =  router;