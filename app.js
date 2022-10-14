const port = process.env.port || 3306

const express = require('express')
const mysql = require('mysql2')

var app = express()
var bodyParser = require('body-parser')
var con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'celisSOLIS1027',
    database: 'prueba',


})

con.connect()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('public'))

app.post('/agregarPersonaje', (req, res) => {
    let nombre = req.body.personaje
    let description = req.body.descripcion
    let bandera = 0;
    con.query('insert into characters values ("' + nombre + '", "' + description + '")', (err, respuesta, fields) => {
        if (err) return console.log('Error', err)
        //return res.send('<h1> Nombre:'+nombre+'</h1>')
        return res.sendFile("C:/Users/champ/Desktop/SDRC_Crud_Nodejs/public/Add.html");
    })
})
//--------------------------
app.post('/agregarMonstruo', (req, res) => {
    let nombre = req.body.monstruo
    let description = req.body.descripcion
    let bandera = 0;
    con.query('insert into monsters values ("' + nombre + '", "' + description + '")', (err, respuesta, fields) => {
        if (err) return console.log('Error', err)
        //return res.send('<h1> Nombre:'+nombre+'</h1>')
        return res.sendFile("C:/Users/champ/Desktop/SDRC_Crud_Nodejs/public/Add.html");
    })
})
//----------------
app.post('/agregarBioma', (req, res) => {
    let nombre = req.body.bioma
    let description = req.body.descripcion
    let bandera = 0;
    con.query('insert into biome values ("' + nombre + '", "' + description + '")', (err, respuesta, fields) => {
        if (err) return console.log('Error', err)
        //return res.send('<h1> Nombre:'+nombre+'</h1>')
        return res.sendFile("C:/Users/champ/Desktop/SDRC_Crud_Nodejs/public/Add.html");
    })
})

//---------------------------delete
app.post('/deleteAll', (req, res) => {
    let nombre = req.body.deleteall
    con.query('delete from characters where (idcharacters = "'+nombre+'")', (err, respuesta, fields) => {
        if (err) return console.log('Error', err)
        //return res.send('<h1> Nombre:'+nombre+'</h1>')
        return res.sendFile("C:/Users/champ/Desktop/SDRC_Crud_Nodejs/public/Add.html");
    })
})


app.post('/deleteAll2', (req, res) => {
    let nombre = req.body.deleteall
    con.query('delete from monsters where (idmonsters = "'+nombre+'")', (err, respuesta, fields) => {
        if (err) return console.log('Error', err)
        //return res.send('<h1> Nombre:'+nombre+'</h1>')
        return res.sendFile("C:/Users/champ/Desktop/SDRC_Crud_Nodejs/public/Add.html");
    })
})

app.post('/deleteAll3', (req, res) => {
    let nombre = req.body.deleteall
    con.query('delete from biome where (idbiome = "'+nombre+'")', (err, respuesta, fields) => {
        if (err) return console.log('Error', err)
        //return res.send('<h1> Nombre:'+nombre+'</h1>')
        return res.sendFile("C:/Users/champ/Desktop/SDRC_Crud_Nodejs/public/Add.html");
    })
})










//------------------------------------ characters
app.get('/getbpersonaje', (req, res) => {

    con.query('SELECT * FROM characters', (err, respuesta, field) => {
        if (err) return console.log('Error:', err)
        var userHTML='';
        var i = 0;
        console.log(respuesta)
        const myJSON = JSON.stringify(respuesta);        
        return res.send(`<table>
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="Style_Show_Character_Two.css">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navegation</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="Index.html">Home</a>
                    <a class="nav-link" href="Show_Characters.html">view characters</a>
                    <a class="nav-link" href="Add.html">add characters</a>
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </div>
    </nav>
    <center>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>NOMBRE DEL PERSONAJE</h1>
                    <h3 id="h3np">${myJSON}</h3>
                    <h3 id="h3np"></h3>
                    <h3 id="h3np"></h3>
                    <h3 id="h3np"></h3>
                    <h3 id="h3np"></h3>
                    <h3 id="h3np"></h3>
                    <h3 id="h3np"></h3>
                </div>
                <div class="col">
                    <h1>DESCRIPCIÓN</h1>
                    <h3 id="h3ds">${myJSON}</h3>
                    <h3 id="h3ds"></h3>
                    <h3 id="h3ds"></h3>
                    <h3 id="h3ds"></h3>
                    <h3 id="h3ds"></h3>
                    <h3 id="h3ds"></h3>
                    <h3 id="h3ds"></h3>
                    <h3 id="h3ds"></h3>
                </div>
            </div>

        </div>
    </center>


</body>

</html>   
        
        `)
       
    })
})





//--------------------------------monsters
app.get('/getbmostruo', (req, res) => {

    con.query('SELECT * FROM monsters', (err, respuesta, field) => {
        if (err) return console.log('Error:', err)

        var userHTML = '';
        var i = 0;
        console.log(respuesta)
        const myJSON2 = JSON.stringify(respuesta);        
        return res.send(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navegation</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="Index.html">Home</a>
                    <a class="nav-link" href="Show_Characters.html">view characters</a>
                    <a class="nav-link" href="Add.html">add characters</a>
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </div>
    </nav>

    <center>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>NOMBRE DEL MONSTRUO</h1>
                    <h3 id="h3np">${myJSON2}</h3>

                </div>
                <div class="col">
                    <h1>DESCRIPCIÓN</h1>
                    <h3 id="h3np">${myJSON2}</h3>

                </div>
            </div>

        </div>
    </center>


</body>

</html>
        
        `)

    })
})

//----------------------------biomes
app.get('/getbbioma', (req, res) => {

    con.query('SELECT * FROM biome', (err, respuesta, field) => {
        if (err) return console.log('Error:', err)

        var userHTML = '';
        var i = 0;
        console.log(respuesta)
        const myJSON3 = JSON.stringify(respuesta);        
        return res.send(`
        
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navegation</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="Index.html">Home</a>
                    <a class="nav-link" href="Show_Characters.html">view characters</a>
                    <a class="nav-link" href="Add.html">add characters</a>
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </div>
    </nav>

    <center>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>NOMBRE DEL BIOMA</h1>
                    <h3 id="h3np">${myJSON3}</h3>

                </div>
                <div class="col">
                    <h1>DESCRIPCIÓN</h1>
                    <h3 id="h3np">${myJSON3}</h3>

                </div>
            </div>

        </div>
    </center>


</body>

</html>
        
        `)

    })
})

const puerta = process.env.port || 3000

app.listen(puerta, ()=>{
    console.log(`Escuchando desde el puerto: ${port}`)
})


/*
app.listen(3000, () => {
    console.log("Servidor escuchando el puerto 3000")
})
*/