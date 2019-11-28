// server.js
// load the things we need
var express = require('express');
const path = require('path');

var app = express();

// set the view engine to ejs
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});
// app.get('/parcours', function(req, res) {
//     res.render('pages/parcours');
// });
// app.get('/experience', function(req, res) {
//     res.render('pages/experience');
// });
// app.get('/contact', function(req, res) {
//     res.render('pages/contact');
// });
// app.get('/cv', function(req, res) {
//     res.render('pages/cv');
// });

// app.get('/parcour', function(req,res) {
//     res.render('pages/parcour')
// });

app.listen(3000);