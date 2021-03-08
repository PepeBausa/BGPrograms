const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {DBBGP} = require('../database.js');
const helpers = require('../lib/helpers.js');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    console.log(req.body);
    const rows = await DBBGP.query('SELECT * FROM Tbl_Usuarios WHERE email = ?', [email]);
    if (rows.length > 0){
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if (validPassword){
            done(null, user, req.flash('success', 'Welcome ' + user.username))
        } else {
            done (null, false, req.flash('message', 'Incorrect Password'));
        }
    } else {
        done (null, false, req.flash('message', 'The User does not Exist'));
    }
}));


passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {
    const {fullname, email} = req.body;
    const NewUser = {
        username,
        password,
        fullname,
        email
    };
    NewUser.password = await helpers.encryptPassword(password);
    const result = await DBBGP.query('INSERT INTO Tbl_Usuarios SET ?', [NewUser]);
    NewUser.id = result.insertId;
    return done(null, NewUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await DBBGP.query('SELECT * FROM Tbl_Usuarios WHERE id = ?', [id]);
    done(null, rows[0]);
});

