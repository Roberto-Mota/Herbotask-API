import mongoose from "mongoose"
import { plantaSchema } from "./planta.js"

// A type of hub, specialized in growing plants and other organisms

const ecodomeSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, required: true },
    totalMatter: {
        aquagen: { type: Number },
        nourish: { type: Number },
        luminum: { type: Number }
      },
      baseMatter: { // How much it produces or consumes per time
        aquagen: { type: Number },
        nourish: { type: Number },
        luminum: { type: Number }
      },
    basePrice: { type: Number, required: true },
    description: { type: String, required: false },
    plantas: plantaSchema  // Tipo de relação 1:N (1 ecodome pode ter N plantas), precisa importar o schema de planta
}, { versionKey: false });

const ecodome = mongoose.model("ecochambers", ecodomeSchema)

export { ecodome, ecodomeSchema }; // Exportando os dois pois o schema será usado no controller para validar o body da req - Cop's