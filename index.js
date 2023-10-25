// dotenv doit TJRS être importé en premier
// Dotenv sert à utiliser des variables stockées en dehors de notre serveur (dans le fichier .env)
require('dotenv').config();
// const dotenv = require('dotenv'):
// dotenv.config()

const express = require('express');
const router = require('./app/router');

const app = express();

const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

app.use(router);

app.use((req, res) => {
    res.status(404).render('404');
});


app.listen(PORT, () => {
    // Ici, on écrit l'adresse "locahost:PORT" Pour se simplifier la vie et ouvrir le navigateur rapidement à l'adresse de l'application
    console.log(`Listening on ${PORT} @ http://localhost:${PORT}`);
});