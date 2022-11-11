const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome_produto: String,
    descricao_produto: String,
    categoria_produto: String,
    preco_produto: Number,
}, {
    timestamps: true
})

const produtos = mongoose.model('Produtos', DataSchema);
module.exports = produtos