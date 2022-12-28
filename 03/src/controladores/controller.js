const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');


const pesquisarEnderecos = async (req, res) => {
    const { cep } = req.params

    try {

        //ler o arquivo json
        const lerArquivoJson = await fs.readFile('./src/enderecos.json');
        //transformar em arrayJson
        const arrayEnderecos = JSON.parse(lerArquivoJson);
        let enderecos = arrayEnderecos.find((endereco) => {
            return endereco.cep.replace('-', '') === cep
        })
        if (enderecos) {
            return res.status(200).json(enderecos);
        }

        enderecos = await buscarEndereco(cep);

        if (enderecos.erro) {
            return res.status(400).json({ mensagem: "Endereço não encontrado" })
        }

        arrayEnderecos.push(enderecos);

        await fs.writeFile('./src/enderecos.json', JSON.stringify(arrayEnderecos))

        return res.json(enderecos)

    } catch (error) {
        return res.status(500).json({ mensage: error.message })
    }

}

module.exports = {
    pesquisarEnderecos
}