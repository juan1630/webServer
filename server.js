const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const app = express()
 
app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/partials');


// Express engine hbs
app.set('view engine', 'hbs');


app.get('/',  (req, res) => {

    res.render('home',{
        nombre: 'juan patròn'
    });
});


app.get('/about', (req, res) => {

    res.render('about');

    }); 

 
app.listen(3000, ()=>{
    console.log('Escuchando peticiones en el puerto 3000');
})