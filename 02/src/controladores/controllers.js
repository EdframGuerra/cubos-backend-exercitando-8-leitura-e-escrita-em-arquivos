const { listarPokemons, detalharPokemon } = require('utils-playground')

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

module.exports = {
    listaDePokemons,
    filtrarPokemon
}