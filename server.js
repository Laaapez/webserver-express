const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/home'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    //res.send('Hello World')
    let salida = {
        nombre: 'Francisco',
        edad: 24,
        url: req.url
    }
    res.render('home', {
        nombre: 'World',
    });
})

app.get('/data', function(req, res) {
    res.send('Wena po data')
})
app.get('/about', function(req, res) {
    res.render('about')
})
app.listen(port, () => {
    console.log(`Escuchando petición del puerto ${ port }`);
})