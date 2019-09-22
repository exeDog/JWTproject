const express = require('express');
const path = require('path');
const LocalStorage = require('node-localstorage').LocalStorage;
const bodyParser = require('body-parser');
const cors =  require('cors');
const app = express();
const localStorage = new LocalStorage(path.join(__dirname, 'fakeDB'));
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(cors());
localStorage.setItem('credentials','');

app.post('/login',function (req,res,next) {
    let hashStr = '';

    bcrypt.hash(req.body.passWord,32)
        .then(encrypted => hashStr = encrypted.toString())
        .catch(err => next(err));

    localStorage.setItem('credentials', JSON.stringify({[req.body.userName] : hashStr }));
    res.send({'success': true});
});

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});

