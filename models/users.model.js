const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    nome: {type: String},
});
// Exportar o modelo
module.exports = mongoose.model('User', UserSchema);