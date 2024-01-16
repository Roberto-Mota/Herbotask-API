// Replicar routers de ecodome para ecodome (talvez faça mais sentido ter um hub logo e o ecodome ser só um dos tipos de hub)
import express from "express";
import EcodomeController from "../controllers/ecodomeController.js";

// O express possui um metodo especifico para lidar com rotas:
const routes = express.Router();

routes.get("/ecodomes", EcodomeController.listarEcodomes);
routes.get("/ecodomes/:id", EcodomeController.listarEcodomePorId);
routes.post("/ecodomes", EcodomeController.createEcodome);
routes.put("/ecodomes/:id", EcodomeController.updateEcodome);
routes.delete("/ecodomes/:id", EcodomeController.deleteEcodome);

export default routes;