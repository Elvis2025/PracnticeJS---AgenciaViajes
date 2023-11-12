
// const express = require('express'); verción anterior 

import express from 'express'; //versión mas reciente
import router from './routers/index.js';
import db from './config/db.js';



const app = express();

// Conexion a la base de datos MySql 
db.authenticate()
    .then( ()=> console.log('conexion exitosa...'))
    .catch( error => console.log(error));



const port = process.env.PORT || 4000;




// Habilitar pug 
app.set('view engine','pug');

// middleware de express para obtener el año actual 
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.yearNew = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes"
    next();
})  

// Agregar body parser para poder leer datos del formulario 
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica 
app.use(express.static('public'));


// Agregar routers 
app.use('/',router);



app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});

