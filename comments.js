//Create web server
const express = require('express');
const app = express();
const port = 3000;

//create connection to database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comments'
});

//connect to database
connection.connect(function(error) {
    if (error) {
        console.log('Error connecting to database');
    } else {
        console.log('Connected to database');
    }
});

//create a route
app.get('/comments', function(req, res) {
    //query the database
    connection.query('SELECT * FROM comments', function(error, results) {
        if (error) {
            console.log('Error querying the database');
        } else {
            console.log('Query successful');
            res.send(results);
        }
    });
});

//start server
app.listen(port, function() {
    console.log('Server started on port ' + port);
});