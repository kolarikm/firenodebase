const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json')
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://project-arya-e0d3c.firebaseio.com'
});

const db = admin.database();
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({"title": "Hi Amanda"});
    console.log("GET request received");
});

router.post('/words', (req, res) => {
    const {name, word} = req.body;
    db.ref(`words/${name}`).push({word});
    console.log("POST request received");
    res.sendStatus(201);
})

app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, () => console.log('API listening on port 3001!'));
