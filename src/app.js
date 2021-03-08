const express = require ('express');
const morgan = require ('morgan');
const exphbs = require ('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');


const {databaseBGP} = require('./keys.js');





//Initializations 
const app = express();
require('./lib/passport.js');


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middelwares
app.use(session({
    secret: 'BGPSession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(databaseBGP)
}));
app.use(flash());
app.use(morgan('dev'))
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Global Variables
app.use((req, res, next) =>{
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

// Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication'));
app.use('/balneario', require('./routes/balneario'));


// Public
app.use(express.static(path.join(__dirname,'public')));

// Starting The Server
app.listen(app.get('port'),() => {
    console.log('Server running at http://127.0.0.1:'+ app.get('port'));
})