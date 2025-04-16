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


app.get("/bacheca", (req,res) =>{
    const posts = [
        {       titolo: "Primo Post", 
                contenuto: "Contenuto del primo post",
                immagine:"<img src= 'img/ciambellone.jpeg' alt='ciambellone'/>",
                tags: [`tag1`, `tag2`, `tag3`]
        },
        {       titolo: "Secondo Post", 
                contenuto: "Contenuto del secondo post",
                immagine:"img/post2.jpg",
                tags: [`tag1`, `tag2`, `tag3`],
        },
        {       titolo: "Terzo Post", 
                contenuto: "Contenuto del terzo post",
                immagine:"",
                tags: [`tag1`, `tag2`, `tag3`]
        },
        {       titolo: "Quarto Post", 
                contenuto: "Contenuto del quarto post",
                immagine:"",
                tags: [`tag1`, `tag2`, `tag3`]
        },
        {       titolo: "Quinto Post", 
                contenuto: "Contenuto del quinto post",
                immagine:"",
                tags: [`tag1`, `tag2`, `tag3`]
        },
    ];
    res.json(posts);
});





app.listen(port,() => {
    console.log(`Server in ascolto sulla porta ${port}`);
})