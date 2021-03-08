const express = require('express');
const passport = require('passport');
const {isLoggedIn} = require('../lib/auth.js');

const router = express.Router();


router.get('/signup', (req, res) => {
    res.render('auth/signup.hbs', { layout: 'main' });
});

router.post('/signup',  passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', (req, res) => {
    res.render('auth/signin.hbs', { layout: 'main' });
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('bgprograms/profile.hbs', { layout: 'main' });
});


router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/signin');
});

module.exports = router;