//TODO: Replicar controller de ecodome para ecodome (talvez faça mais sentido ter um hub logo e o ecodome ser só um dos tipos de hub)
import { ecodome } from '../models/ecodome.js';

class EcodomeController {
    static async listarEcodomes(req, res) { //static para poder usar o metodo da classe sem instanciar a mesma
        try {
            const listaEcodomes = await ecodome.find({}); // Nesse caso basta um objeto vazio, para voltar tudo
            res.status(200).json(listaEcodomes);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarEcodomePorId(req, res) {
        try {
            const ecodomeId = await ecodome.findById(req.params.id); //Aposento o meu "plantById", pois o mongoose já tem um metodo para isso
            res.status(200).json(ecodomeId);
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - ecodome não encontrada`});
        }
    }

    static async createEcodome(req, res) {
            // const novaEcodome = req.body
        try {
            const novaEcodome = { ...req.body, plantas: [] }
            res.status(201).json({ message: "ecodome criada com sucesso", ecodome: novaEcodome}); //novaEcodome será o retorno do método create
            // ----------------------------------------------------//
            // ou:
            // const ecodome = new Ecodome(req.body);
            // const ecodomeSalva = await ecodome.save();
            // res.status(201).json(ecodomeSalva);
            //-----------------------------------------------------//
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao criar ecodome` });
        }
    }

    static async updateEcodome(req, res) {
        try {
            const id = req.params.id; //params está na url, body está no corpo da requisição
            await ecodome.findByIdAndUpdate(id, req.body); //ID e o que será inserido. Aqui não preciso de uma variavel, pois o metodo findByIdAndUpdate já retorna o documento atualizado
            // ou:
            // const ecodomeId = await ecodome.findById(req.params.id);
            // const ecodomeAtualizada = await ecodomeId.updateOne(req.body); // updateOne é um metodo do mongoose, que atualiza apenas um documento
            res.status(200).json({ message: "ecodome atualizada com sucesso", ecodome: ecodomeAtualizada});
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - falha ao atualizar ecodome`});
        }
    }

    static async deleteEcodome(req, res) {
        try {
            const id = req.params.id;
            await ecodome.findByIdAndDelete(id);
            // ou:
            // const ecodomeId = await ecodome.findById(req.params.id);
            // await ecodomeId.deleteOne();
            res.status(200).json({ message: "ecodome deletada com sucesso"});
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - falha ao deletar ecodome`});
        }
    }
};

export default EcodomeController;

