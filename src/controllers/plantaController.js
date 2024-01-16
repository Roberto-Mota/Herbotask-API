import { planta } from '../models/planta.js';

class PlantaController {
    static async listarPlantas(req, res) { //static para poder usar o metodo da classe sem instanciar a mesma
        try {
            const listaPlantas = await planta.find({}); // Nesse caso basta um objeto vazio, para voltar tudo
            res.status(200).json(listaPlantas);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarPlantaPorId(req, res) {
        try {
            const plantaId = await planta.findById(req.params.id); //Aposento o meu "plantById", pois o mongoose já tem um metodo para isso
            res.status(200).json(plantaId);
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - planta não encontrada`});
        }
    }

    static async createPlanta(req, res) {
        try {
            const novaPlanta = await planta.create(req.body);
            res.status(201).json({ message: "planta criada com sucesso", planta: novaPlanta}); //novaPlanta será o retorno do método create
            // ----------------------------------------------------//
            // ou:
            // const planta = new Planta(req.body);
            // const plantaSalva = await planta.save();
            // res.status(201).json(plantaSalva);
            //-----------------------------------------------------//
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao criar planta` });
        }
    }

    static async updatePlanta(req, res) {
        try {
            const id = req.params.id; //params está na url, body está no corpo da requisição
            await planta.findByIdAndUpdate(id, req.body); //ID e o que será inserido. Aqui não preciso de uma variavel, pois o metodo findByIdAndUpdate já retorna o documento atualizado
            // ou:
            // const plantaId = await planta.findById(req.params.id);
            // const plantaAtualizada = await plantaId.updateOne(req.body); // updateOne é um metodo do mongoose, que atualiza apenas um documento
            res.status(200).json({ message: "planta atualizada com sucesso", planta: plantaAtualizada});
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - falha ao atualizar planta`});
        }
    }

    static async deletePlanta(req, res) {
        try {
            const id = req.params.id;
            await planta.findByIdAndDelete(id);
            // ou:
            // const plantaId = await planta.findById(req.params.id);
            // await plantaId.deleteOne();
            res.status(200).json({ message: "planta deletada com sucesso"});
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - falha ao deletar planta`});
        }
    }
};

export default PlantaController;
