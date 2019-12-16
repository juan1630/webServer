const http = require('http');


http.createServer( (req, resp) => {


    // resp.write('Hola mundo');
    // resp.end();

    resp.writeHead(200, {'Content-Type':'application/json'});


    let salida = {
        nombre: 'Juan',
        edad: 32,
        url: req.url
    }

    resp.write(JSON.stringify(salida));

    resp.end();

})
.listen(8080)


console.log('Servidor corriendo en el puerto 8080');
