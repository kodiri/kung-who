const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getProfiles = require('./profiles');
require('dotenv').config();

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

app.listen(port, () => console.log(`Server started on port ${port}!`));
