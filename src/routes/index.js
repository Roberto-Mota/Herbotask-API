import express from "express";
import plantas from "./plantasRoutes.js"
import tasks from "./tasksRoutes.js"
import ecodome from "./ecodomeRoutes.js"
import cors from "cors";
// Ponto de entrada das rotas com middleware -?-

// const corsOptions = {
    // origin: 'http://your-ip-address:port', // substitua pelo seu endereço IP e porta
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

const routes = (app) => {   
app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
app.use(plantas);
app.use(ecodome);
app.use(tasks);

    // Aqui está pegando todas as rotas de plantas definidas no plantaRoutes,
    // passando pra dentro de Routes, dai o express consegue gerenciar tudo de uma vez
}

export default routes;

// By using app.use to register these middleware functions,
// the Express application will be able to handle requests
// for these routes defined in the plantas and ecodome routers