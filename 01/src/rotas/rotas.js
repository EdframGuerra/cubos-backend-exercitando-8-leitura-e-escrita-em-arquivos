const express = require('express');
const { getStateFromZipcode } = require('utils-playground');

const controllers = require('../controladores/controllers')

const rotas = express.Router();

rotas.get('/produtos', controllers.listarProdutos); 
rotas.get('/produtos/:idProduto', controllers.filtrarProduto) 
rotas.get('/produtos/:idProduto/frete/:cep', controllers.calcularFrete)

module.exports = rotas;