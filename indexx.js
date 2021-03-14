const express = require('express');
const bodyParser = require('body-parser');
// Importa Routes
const smartphones = require('./routes/smartphones.route'); 
const us = require('./routes/users.route'); 
var User = require('./models/users.model');
const app = express();
//Acesso à BD
const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/test_for_chicago';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', smartphones);
//Servidor
let porto = 8000;
app.listen(porto, () => {
 console.log('Servidor em execução no porto: ' + porto);
});


app.use('/', smartphones);

app.get('/Notifies', function (req, res) {

    // BAD! Creates a new connection pool for every request
    console.log('connected');
    mongoose.connect('mongodb://localhost:27017/test_for_chicago', function (err, db) {
        if (err) throw err;

        var coll = db.collection('users');
        var arr = [];
        coll.find({}, function (err, docs) {
            //console.log(docs);
            docs.each(function (err, doc) {
                if (doc) {
                    //console.log(doc);
                    arr.push(doc);

                } else {
                    res.end();
                }
            });
            console.log('test');
            console.log(doc);
            return res.json(arr);
            //return res.send(docs);
        });
        //return res.json(coll);
    });
});

app.get(function(req, res) {
    Produto.find(function(error, users) {
        if(error) 
            res.send('Erro ao tentar Selecionar Todos os produtos...: ' + error);

        res.json(users);
    });
});

//let url = 'mongodb://bd_user:abcd1234@ds111234.mlab.com:123213/smartphones';