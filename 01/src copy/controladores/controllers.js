// 1º PASSO: IMPORTAR BANCO DE DADOS 
const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');
const fs = require('fs/promises');

//2º PASSO: CRIAR A FUNÇÃO QUE SERÁ EXECUTADA NA ROTA E APÓS,  IMPLEMENTAR NO CÓDIGO DE EXECUÇÃO EM ROTAS NO NOME DA FUNÇÃO NO 6º PASSO:
const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos)
}

const filtrarProduto = async (req, res) => {
    const { idProduto } = req.params;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    })

    if (!produtoEncontrado) {
        return res.status(404).json({ "mensagem": "Não existe produto para o id informado. " });
    }
    return res.status(200).json(produtoEncontrado);
}


const calcularFrete = async (req, res) => {
    const { idProduto, cep } = req.params

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    })
    if (isNaN(idProduto)) {
        return res.status(400).json({ "mensagem": "Id invalido, favor informar um numero valido. " });
    }

    if (!produtoEncontrado) {
        return res.status(404).json({ "mensagem": "Não existe produto para o id informado. " });
    }

    try {
        const estado = await getStateFromZipcode(cep);
        if (estado === 'BA' || estado === 'SE' || estado === 'PE ' || estado === 'PB') {
            // Para os estados BA, SE, AL, PE e PB o valor do frete será de 10%
            const valorFrete = produtoEncontrado.valor * 0.1;
            return res.status(200).json({ produto: produtoEncontrado, estado, frete: valorFrete });
        }

        if (estado === 'RJ' || estado === 'SP') {
            // Para os estados SP e RJ o valor do frete será de 15%
            const valorFrete = produtoEncontrado.valor * 0.15;
            return res.status(200).json({ produto: produtoEncontrado, estado, frete: valorFrete });
        }
        const valorFrete = produtoEncontrado.valor * 0.12;
        return res.status(200).json({ produto: produtoEncontrado, estado, frete: valorFrete });


    } catch (erro) {
        return res.status(500).json({ "mensagem": erro.message });


    }

}

// 3º PASSO: EXPORTAR A FUNÇÃO/CONTROLADOR:
module.exports = {
    listarProdutos,
    filtrarProduto,
    calcularFrete
}