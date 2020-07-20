const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app =  express();

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-mwm79.mongodb.net:27017,cluster0-shard-00-01-mwm79.mongodb.net:27017,cluster0-shard-00-02-mwm79.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);