// 1º PASSO: IMPORTAR A BIBLIOTECA EXPRESS:
const express = require('express');
const { getStateFromZipcode } = require('utils-playground');

// 5º PASSO: IMPORTAR OS CONTROLADORES:
const controllers = require('../controladores/controllers')

// 2º PASSO: CRIAR A CONSTANTE ROTAS PARA ESTANCIAR O EXPRESS:
const rotas = express.Router();

// 6º PASSO: USAR O MIDLEWARE (INTERMEDIARIOS) PARA FILTROS E VALIDAÇÕES DE ROTA:


// 4º PASSO: CRIAR A ROTA:// 7º PASSO: colocar após a vírgula o nome da função criada para rota:
rotas.get('/produtos', controllers.listarProdutos); //exibir relação de produtos
rotas.get('/produtos/:idProduto', controllers.filtrarProduto) // listar um produto
rotas.get('/produtos/:idProduto/frete/:cep', controllers.calcularFrete)//calcular o frete


// 3º PASSO: EXPORTAR A ROTA:
module.exports = rotas;

