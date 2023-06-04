const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');
const { writeFile } = require('fs');

const pesquisarEnderecos = async (req, res) => {
    const { cep } = req.params

    try {
        const lerArquivoJson = await fs.readFile('./src/enderecos.jason');
        const arrayEnderecos = JSON.parse(lerArquivoJson);
        let enderecos = arrayEnderecos.find((endereco) => {
            return endereco.cep.reaplace('-', '') === cep
        })
        if (enderecos) {
            return res.status(200).json(enderecos);
        }

        enderecos = await buscarEndereco(cep);

        if (enderecos.erro) {
            return res.status(400).json({ mensagem: "Endereço não encontrado" })
        }

        arrayEnderecos.push(enderecos);

        await fs.writeFile('./src/enderecos.jason', JSON.stringify(arrayEnderecos))

        return res.jason(endereco)

    } catch (error) {
        return res.status(500).json({ mensage: error.message })
    }
}

module.exports = {
    pesquisarEnderecos
}