import { planta } from '../models/planta.js';

class PlantaController {
    static async listarPlantas(req, res) { //static para poder usar o metodo da classe sem instanciar a mesma
        try {
            console.log("Controller - listarPlantas");
            const listaPlantas = await planta.find({}); // Nesse caso basta um objeto vazio, para voltar tudo
            console.log("Resultado da requisição: " + listaPlantas);
            // listaPlantas = listaPlantas.map(planta => {
            //     planta.imagem = planta.imagem.toString("base64");
            // });
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
            console.log("Controller - createPlanta");
            console.log("Timestamp: " + Date.now());
            // console.log("Requisição: ");
            //console.log(req.body.);
            const plantaRecebida = req.body;
            console.log("Planta recebida: ");
            // console.log(plantaRecebida.imagem.slice(0, 40));
            


            // const imagem = novaPlanta.imagem;
            // Check if imagem exists and assign a default value if it is undefined
            //Transform the base64 of re.body.imagem and turn it into binary
            //console.log(plantaRecebida.imagem)
            console.log("DB 0")
            //  const imagemBSON = plantaRecebida.imagem ? new Buffer.from(plantaRecebida.imagem, "base64") : Buffer.from("", "base64");
            //  console.log(imagemBSON)
             // const novaPlanta = plantaRecebida;
             // novaPlanta.imagem = imagemBSON; 
             console.log("DB 1")
             console.log("Planta recebida: ");
            //console.log(plantaRecebida.imagem.slice(0, 40));
            

            const plantaCriada = await planta.create(plantaRecebida);

            res.status(201).json({ message: "planta criada com sucesso", planta: plantaCriada}); //novaPlanta será o retorno do método create
            // ----------------------------------------------------//
            // ou:
            // const planta = new Planta(req.body);
            // const plantaSalva = await planta.save();
            // res.status(201).json(plantaSalva);
            //-----------------------------------------------------//
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao criar planta: ${erro.log}` });
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
