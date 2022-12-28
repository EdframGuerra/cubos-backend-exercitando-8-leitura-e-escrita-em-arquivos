// 1º PASSO: IMPORTAR BANCO DE DADOS 
const { listarPokemons, detalharPokemon } = require('utils-playground')

//2º PASSO: CRIAR A FUNÇÃO QUE SERÁ EXECUTADA NA ROTA E APÓS,  IMPLEMENTAR NO CÓDIGO DE EXECUÇÃO EM ROTAS NO NOME DA FUNÇÃO NO 6º PASSO:
const listaDePokemons = async (req, res) => {
    const { pagina } = req.query;

    try {
        const pokemons = await listarPokemons(pagina);
        return res.status(200).json(pokemons.results);

    } catch (error) {
        return res.status(500).json({ mensagem: error.messagem });
    }

}

const filtrarPokemon = async (req, res) => {
    const { idOuNome } = req.params;

    try {

        const descricao = await detalharPokemon(idOuNome);
        const { id, name, height, weight, base_experience, forms, abilities, species } = descricao
        return res.status(200).json({ id, name, height, weight, base_experience, forms, abilities, species });

    } catch (error) {
        return res.status(500).json({ mensagem: error.messagem });
    }
}


// 3º PASSO: EXPORTAR A FUNÇÃO/CONTROLADOR
module.exports = {
    listaDePokemons,
    filtrarPokemon
}