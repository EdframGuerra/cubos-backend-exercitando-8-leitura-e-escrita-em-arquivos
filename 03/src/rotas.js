// 1º PASSO: IMPORTAR A BIBLIOTECA EXPRESS:
const express = require('express');

// 5º PASSO: IMPORTAR OS CONTROLADORES:
const { cadastroEndereco } = require('./controladores/BuscadorCep');
const { pesquisarEnderecos } = require('./controladores/controladorBuscaCep');

// 2º PASSO: CRIAR A CONSTANTE ROTAS PARA ESTANCIAR O EXPRESS:
const rotas = express();

// 3º PASSO: USAR O MIDLEWARE (INTERMEDIARIOS) PARA FILTROS E VALIDAÇÕES DE ROTA:
// rotas.use();

// 4º PASSO: CRIAR A ROTA: // 6º PASSO: colocar após a vírgula o nome da função criada para rota:
rotas.get('/enderecos/:cep', pesquisarEnderecos)

// 7º PASSO: EXPORTAR A ROTA:
module.exports = rotas; 