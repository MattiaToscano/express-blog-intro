//Importo express 
const express = require('express');

//Assegno express a una variabile
const app = express();

//Definisco la porta
const port = 3000;

// Configuro gli asset statici
app.use(express.static("public")); 

//Creo rotta
app.get("/", (req,res) =>{
    res.send("Server del mio Blog");
})

//creo altra rotta
app.get("/bacheca", (req,res) =>{
    const posts = [
        {       titolo: "Ciambellone", 
                contenuto: "Contenuto del primo post",
                immagine: "<images/ciambellone.jpeg>",
                tags: [`tag1`, `tag2`, `tag3`]
        },
        {       titolo: "Cracker alla barbabietola", 
                contenuto: "Contenuto del secondo post",
                immagine: "<images/cracker_barbabietola.jpeg>",
                tags: [`tag1`, `tag2`, `tag3`]
        },
        {       titolo: "pane fritto dolce", 
                contenuto: "Contenuto del terzo post",
                immagine: "<images/pane_fritto_dolce.jpeg>",
                tags: [`tag1`, `tag2`, `tag3`]
        },
        {       titolo: "pasta alla barbabietola", 
                contenuto: "Contenuto del quarto post",
                immagine: "<images/pasta_barbabietola.jpeg>",
                tags: [`tag1`, `tag2`, `tag3`]
        },
        {       titolo: "torta paesana", 
                contenuto: "Contenuto del quinto post",
                immagine: "<images/torta_paesana.jpeg>",
                tags: [`tag1`, `tag2`, `tag3`]
        },
    ];
    res.json(posts);
});

app.listen(port,() => {
    console.log(`Server in ascolto sulla porta ${port}`);
})