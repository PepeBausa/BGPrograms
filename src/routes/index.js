const express = require('express');
const poolBGP = require('../database.js');
const router = express.Router();

const pool_DB_BGP = require('../database.js')


router.get('/', (req,res) => {
    res.render('index.hbs' , {layout: 'main'});
});

router.get('/about', (req,res) => {
    res.render('about.hbs' , {layout: 'main'});
});

router.get('/contact', (req,res) => {
    res.render('contact.hbs' , {layout: 'main'});
});

router.post('/', async (req, res) =>{
    const { Email, Password } = req.body;
    const newUser = {
        Email,
        Password
    };
    console.log(newUser);
    //await pool_DB_Balneario.query('INSERT INTO Tbl_Usuarios set ?', [newUser]);
    res.send('recived');
});

module.exports =  router;