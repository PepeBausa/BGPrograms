const mysql = require ('mysql');

const {promisify} = require ('util');

const { databaseBGP } = require('./keys.js');
const { databaseBalneario } = require('./keys.js');

const poolBGP = mysql.createPool(databaseBGP);
const poolBalneario = mysql.createPool(databaseBalneario);


poolBGP.getConnection((err, connection) => {
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (connection) connection.release();
    console.log('DB BGP IS CONNECTED');
    return;

});
poolBalneario.getConnection((err, connection) => {
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (connection) connection.release();
    console.log('DB BALNEARIO IS CONNECTED');
    return;

});


// Promisify Pool Querys
poolBGP.query = promisify(poolBGP.query);
poolBalneario.query = promisify(poolBalneario.query);

module.exports = {"DBBGP": poolBGP, "DBBalneario": poolBalneario};
