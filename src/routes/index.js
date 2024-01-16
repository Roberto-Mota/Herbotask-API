import express from "express";
import plantas from "./plantasRoutes.js"
import ecodome from "./ecodomeRoutes.js"
// Ponto de entrada das rotas com middleware -?-
const routes = (app) => {
    app.use(express.json(), plantas, ecodome);
    // Aqui está pegando todas as rotas de plantas definidas no plantaRoutes,
    // passando pra dentro de Routes, dai o express consegue gerenciar tudo de uma vez
}

export default routes;

// By using app.use to register these middleware functions,
// the Express application will be able to handle requests
// for these routes defined in the plantas and ecodome routers