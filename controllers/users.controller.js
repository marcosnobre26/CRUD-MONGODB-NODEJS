var User = require('../models/users.model');

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

exports.create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
        }
    );
    user.save(function (err) {
    if (err) {
        return next(err);
    }
        res.send('Registo de Usuario criado com sucesso');
    })
};

exports.details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
            res.send(user);
    })
};

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('Usuario atualizado.');
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Usuario deletado com sucesso!');
    })
};