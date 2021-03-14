const express = require('express');
const bodyParser = require('body-parser');
// Importa Routes
const users = require('./routes/users.route'); 
const app = express();

//Acesso à BD
const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/test_for_chicago';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', users);

//Servidor
let porto = 8000;
app.listen(porto, () => {
 console.log('Servidor em execução no porto: ' + porto);
});