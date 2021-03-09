const express = require('express');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth.js');

const router = express.Router();


router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup.hbs', { layout: 'main' });
});

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/auth/signup',
    failureFlash: true
}));

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin.hbs', { layout: 'main' });
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/auth/signin',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/auth/signin');
});

module.exports = router;