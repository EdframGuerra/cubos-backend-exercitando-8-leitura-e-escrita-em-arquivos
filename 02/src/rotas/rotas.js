// 1º PASSO: IMPORTAR A BIBLIOTECA EXPRESS:
const express = require('express');
// const { listarPokemons, detalharPokemon } = require('utils-playground');

// 5º PASSO: IMPORTAR OS CONTROLADORES:
const controllers = require('../controladores/controllers')

// 2º PASSO: CRIAR A CONSTANTE ROTAS PARA ESTANCIAR O EXPRESS:
const rotas = express.Router();

// 3º PASSO: USAR O MIDLEWARE (INTERMEDIARIOS) PARA FILTROS E VALIDAÇÕES DE ROTA:


// 4º PASSO: CRIAR A ROTA //6º PASSO: colocar após a vírgula o nome da função criada para rota:
rotas.get('/pokemon', controllers.listaDePokemons);
rotas.get('/pokemon/:idOuNome', controllers.filtrarPokemon);




// 7º PASSO: EXPORTAR A ROTA:
module.exports = rotas;