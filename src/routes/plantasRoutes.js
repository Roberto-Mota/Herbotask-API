import express from "express";
import PlantaController from "../controllers/plantaController.js";

// O express possui um metodo especifico para lidar com rotas:
const routes = express.Router();

routes.get("/plantas", PlantaController.listarPlantas);
routes.get("/plantas/:id", PlantaController.listarPlantaPorId);
routes.post("/plantas", PlantaController.createPlanta);
routes.put("/plantas/:id", PlantaController.updatePlanta);
routes.delete("/plantas/:id", PlantaController.deletePlanta);

export default routes;