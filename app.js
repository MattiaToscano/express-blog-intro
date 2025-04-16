//Importo express 
const express = require('express');

//Assegno express a una variabile
const app = express();

//Definisco la porta
const port = 3000;

//Creo rotta
app.get("/", (req,res) =>{
    res.send("Server del mio Blog");
})