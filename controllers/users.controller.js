var User = require('../models/users.model');

/*exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};*/

/*exports.create = function (req, res) {
    let smartphone = new Smartphone(
        {
            nome: req.body.nome,
            marca: req.body.marca
        }
    );
    smartphone.save(function (err) {
    if (err) {
        return next(err);
    }
        res.send('Registo de Smartphone criado com sucesso');
    })
};*/

/*exports.get = function (req, res) {
    User.find(function(error, users) {
        if(error) 
            res.send('Erro ao tentar Selecionar Todos os produtos...: ' + error);

        res.json(users);
    });
};*/

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

exports.list = function (req, res) {
    User.find(function(error, users) {
        if(error) 
            res.send('Erro ao tentar Selecionar Todos os produtos...: ' + error);

        res.json(users);
    });
};