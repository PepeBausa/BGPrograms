const express = require ('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middelwares

// routes
app.use(require('./routes/index.js'));

// static files

// listeng the server on port:
app.listen(app.get('port'),() => {
    console.log('Server running at http://127.0.0.1:', app.get('port'));
})