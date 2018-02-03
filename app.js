const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json')
const express = require('express');
const app = express();
const bodyParser = require('body-parser-json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://project-arya-e0d3c.firebaseio.com'
});

const db = admin.database();
const router = express.Router();

router.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3001, () => console.log('API listening on port 3001!'));
