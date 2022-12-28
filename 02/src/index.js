// 1º PASSO: IMPORTAR A BIBLIOTECA EXPRES:
const express = require('express');
const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

// 4º PASSO: IMPORTAR AS ROTAS:
const rotas = require('./rotas/rotas');

// 2º PASSO: INSTANCIAR O express:
const app = express();

// 6º PASSO: ESTANCIAR O MIDLEWARE express.json(), PARA RECEBER AS REQUISIÇÕES EM FORMATO DE OBJETO:
app.use(express.json());

// 5ºPASSO: ESTANCIAR O MIDLEWARE ROTAS DO 4º PASSO;
app.use(rotas);

// 3º PASSO: ABRIR A PORTA DE ESCUTA/EXECUÇÃO DO SERVIDOR:
app.listen(8000);