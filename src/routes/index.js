const express = require('express');

const { DBBGP } = require('../database.js');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('bgprograms/index.hbs', { layout: 'main' });
});

router.get('/about', (req, res) => {
    res.render('bgprograms/about.hbs', { layout: 'main' });
});

router.get('/contact', (req, res) => {
    res.render('bgprograms/contact.hbs', { layout: 'main' });
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('bgprograms/profile.hbs', { layout: 'main' });
});

router.get('/programs', async(req, res) => {
    const programs = await DBBGP.query('SELECT * FROM Tbl_Programs WHERE user_id = ?', [req.user.id]);
    console.log(programs);

    res.render('bgprograms/programs.hbs', { layout: 'main', programs: programs });
});

module.exports = router;