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

router.get('/programs', async (req,res) => {
    const program = await DBBGP.query('SELECT * FROM Tbl_Programs WHERE user_id = 1');
    console.log(program);
    res.render('bgprograms/programs.hbs' , {layout: 'main', program: program});
});

router.post('/', async (req, res) =>{
    const { email, password } = req.body;
    const newUser = {
        email,
        password
    };
    console.log(newUser);
    DBBGP.query('INSERT INTO Tbl_Usuarios set ?', [newUser]);
    res.redirect('/programs');
});

module.exports =  router;