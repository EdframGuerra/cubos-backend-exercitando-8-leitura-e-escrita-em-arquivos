const express = require('express');
const { pesquisarEnderecos } = require('../controladores/controller');

const rotas = express.Router()

rotas.get('/enderecos/:cep', pesquisarEnderecos)

module.exports = rotas;