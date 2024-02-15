import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {type: String, required: true },
    description: {type: String},
    relatedPlantName: {type: String},
    // frequencia: {
    //     tipo: String,
    //     detalhes: {
    //         diasNaSemana: [String],
    //         meses: [String]
    //     }
    // },
    tempoSomado: {type: mongoose.Schema.Types.Number},
    // status: {type: String},
    // prioridade: {type: String},
    //dataInicio: {Date, default: null},//Date.now},
    dataConclusao: {type: mongoose.Schema.Types.Date},
    notas: {type: String},
    usuarioResponsavel: {
        //idUsuario: { type: mongoose.Schema.Types.ObjectId },
        nomeUsuario: {type: String}
    }
});

const task = mongoose.model('tasks', taskSchema);

export { task, taskSchema };

//https://mongoosejs.com/docs/timestamps.html timestamps já do mongoose


