// TODO

import { task } from '../models/task.js';

class TaskController {
    static async listarTasks(req, res) { 
        try {
            console.log("Controller - listarTasks");
            const listaTasks = await task.find({}); 
            console.log("Resultado da requisição: " + listaTasks);
            res.status(200).json(listaTasks);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarTaskPorId(req, res) {
        try {
            const taskId = await task.findById(req.params.id);
            res.status(200).json(taskId);
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - task não encontrada`});
        }
    }
    

    static async createTask(req, res) {
        try {
            console.log("Controller - createTask");
            console.log("Timestamp: " + Date.now());
            const taskRecebida = req.body;
            const taskCriada = await task.create(taskRecebida);

            res.status(201).json({ message: "task criada com sucesso", task: taskCriada}); //novaTask será o retorno do método create
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao criar task: ${erro.log}` });
        }
    }

    static async updateTask(req, res) {
        try {
            const id = req.params.id; //params está na url, body está no corpo da requisição
            await task.findByIdAndUpdate(id, req.body); //ID e o que será inserido. Aqui não preciso de uma variavel, pois o metodo findByIdAndUpdate já retorna o documento atualizado
            // ou:
            // const taskId = await task.findById(req.params.id);
            // const taskAtualizada = await taskId.updateOne(req.body); // updateOne é um metodo do mongoose, que atualiza apenas um documento
            res.status(200).json({ message: "task atualizada com sucesso", task: taskAtualizada});
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - falha ao atualizar task`});
        }
    }

    static async deleteTask(req, res) {
        try {
            const id = req.params.id;
            await task.findByIdAndDelete(id);
            // ou:
            // const taskId = await task.findById(req.params.id);
            // await taskId.deleteOne();
            res.status(200).json({ message: "task deletada com sucesso"});
        } catch (erro) {
            res.status(404).json({ message: `${erro.message} - falha ao deletar task`});
        }
    }
};

export default TaskController;
