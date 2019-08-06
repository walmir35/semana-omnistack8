const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb://localhost:27017/omnistack8', 
{
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333, console.log('Server Listen on port 3333'));