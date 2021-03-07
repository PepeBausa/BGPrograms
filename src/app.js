const express = require ('express');
const morgan = require ('morgan');
const exphbs = require ('express-handlebars');
const path = require('path');


//Initializations 
const app = express();

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
app.use(morgan('dev'))
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Global Variables
app.use((req, res, next) =>{
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