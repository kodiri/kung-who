const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getProfiles = require('./profiles');
const jwtSimple = require('jwt-simple');
require('dotenv').config();

const http = require('http').createServer(app);
const io = require('socket.io')(http);
 
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('message: ' + JSON.stringify(msg));
        io.emit('chat message', msg);
    });
});

app.get('/rest/profiles/:id', (req, res) => {
    res.send(getProfiles().find(profile => profile.id === req.params.id));
});

app.get('/rest/profiles', (req, res) => {
    res.send(JSON.stringify(getProfiles()))
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});   

app.post('/rest/login', jsonParser, (req, res) => {
    const id_token = req.headers['authorization'].replace('Bearer ', '');
    console.log("id_token is : ", id_token);
    fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`).then(res => {
        return res.ok ? res.json() : Promise.reject();
    }).then(decodedToken => {
        console.log('Our decoded token is: ', decodedToken);
        res.end(JSON.stringify({
            result: 'Hi',
            decodedToken
        }));
    })
    // console.log(req);
    // console.log(req.body);
    // console.log(parsed);
    // res.end(JSON.stringify({
    //     result: 'Hi'
    // }));
    // let token = jwtSimple.decode(parsed.hg.id_token);
    // let response = {token, hd: 'https://kung-who.herokuapp.com/', secret: 'gmRXBkluAd9oG_fvQGHJjMTP'}
    // console.log(response)
    // res.send(response)
}); 

// app.listen(port, () => console.log(`Server started on port ${port}!`));

var server = http.listen(port, () => {
    console.log('server is running on port', server.address().port);
});
