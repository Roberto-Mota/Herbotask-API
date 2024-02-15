import express from "express";
import TasksController from "../controllers/taskController.js";

// O express possui um metodo especifico para lidar com rotas:
const routes = express.Router();

routes.get("/tasks", TasksController.listarTasks);
routes.get("/task/:id", TasksController.listarTaskPorId);
routes.post("/task", TasksController.createTask);
routes.put("/task/:id", TasksController.updateTask);
routes.delete("/task/:id", TasksController.deleteTask);

export default routes;