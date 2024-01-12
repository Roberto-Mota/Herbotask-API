import mongoose from "mongoose";

// Interface de interação com os "documentos" (coisas) de uma coleção db

// const matterSchema = new mongoose.Schema({
//     aquagen: { type: Number },
//     nourish: { type: Number },
//     luminum: { type: Number }
//   });

const plantaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, required: true },
    matter: {
        aquagen: { type: Number },
        nourish: { type: Number },
        luminum: { type: Number }
      },
    basePrice: { type: Number, required: true },
    description: { type: String, required: false }
}, { versionKey: false }); //Desligar algo que aumenta complexidade, configuração de versionamento

const planta = mongoose.model("plantas", plantaSchema) // Passo para o modelo qual coleção DB me refiro (no caso "plantas") e qual seu Schema

export default planta;

// Nesse contexto, Schema é um objeto de configuração que define a estrutura e as propriedades de um documento