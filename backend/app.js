/// permet de construire plus facilement des api qu'avec nodejs (importe le package express)
const express = require('express');

///creer une application express
const app = express();

/// test premiere methode python :permet de creer un processus enfant qui va s'occuper de lancer un script python
const {spawn} = require('child_process');

/// test deuxieme methode :initialise la variable avec le nom du script python
var myPythonScriptPath = 'pythonScript/essaye.py'

// importe et execute pyton shell
const {PythonShell} = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);

///importation du schema créé
const Thing = require('./models/schema1');

///body parser
const bodyParser = require('body-parser');

/// import le package mangoose
const mongoose = require('mongoose');

/// conncection à la base de donnée du server
mongoose.connect('mongodb+srv://abdelhakim:29072001@cluster0.qg0oy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

///Pour gérer la requête POST venant de l'application front-end, on a besoin d'en extraire le corps JSON avec :
app.use(express.json());


/// permet d'ajouter  les autorisation necessaire au bon fonctionnement des requetes 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

/// permet d'intercepter les requetes get et d'envoyer le contenus de la base de donnée
app.get('/' + '', (req, res, next) => {
  Thing.find()
    .then(things=> res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

///permet de lancer un script python et d'envoyer les données au naviguateur sur le path /test/python
///projet abondoné par la suite en raison du fait que nous avions decider de transferer dirrectement l'information du script vers l'interface en utilisant plotly
app.get('/test/python', (req, res) => {
 
  var dataToSend;
  //  creer le nouveau process enfant qui va executer le script python
  const python = spawn('python3', ['pythonScript/essaye.py']);

    char=""
 // on collect les données du script
  python.stdout.on('data', function (data) {
    
    console.log('test2');
    console.log('on recupere les donnée du script ...');
    
    dataToSend = data.toString();
    char += dataToSend
    console.log(dataToSend)
    });

        ///on est sur que le processus enfant est fermé
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    
    //on envoie les données 
    res.send(tyug)
    })





  
 })






/// permet au autres fichier d'utiliser app.js notamment server.js
module.exports = app;