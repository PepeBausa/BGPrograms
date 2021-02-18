const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index.html' , {title: 'BGPrograms'});
    res.sendStatus(200);
});

module.exports =  router;