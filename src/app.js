import express from "express";
import linkDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await linkDatabase() //Uso da interface do moongose

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("**Conexão com banco de dados feita com sucesso**")
})

const app = express(); //|Pega a ideia: O conjunto de código de todas as funções Express 
                        //  |vão para dentro de app
                       //   | Aqui vou usar o Express para cuidar das requests HTTP pra mim, abstraindo meu trabalho
routes(app);

//--------------------------------------------------------------------------------//
//Criação de um middleware:
// app.use(express.json()); //"app.use()" -> Acesso a resposta enquanto ela é feita e modifico como quiser
// No caso o express.json() será executado em todas as req que chegam e são gerenciadas pelo express
// servirá para garantir que os bodys não sejam string e sim json
// passando esse app.use para os routes
// Busca o livro na base
// function plantById(id) {
//     console.log("Procurando planta: " + id)
//     const plantId = plantas.findIndex(planta => {
//         //console.log("planta.id: " + planta.id)
//         return Number(planta.id) === Number(id); // === se tratar de number com number, o que não era o caso
//     })
//     console.log("plantId:" + plantId)
//     return plantId;
// }

//Crud sem controller:
// app.get("/", (req, res) => {
//     res.status(200).send("Default page");
// });
//
// app.get("/plants", async (req, res) => {
//     const listaPlantas = await planta.find({}) // Nesse caso basta um objeto vazio, para voltar tudo
//     res.status(200).json(listaPlantas);
// })
//
// app.get("/plants/:id", (req, res) => {
//     const index = plantById(req.params.id); // Req precisa estar enviando esse param
//     console.log("Planta encontrada: " + index)
//     if (index != -1) {
//         res.status(200).json(plantas[index]);
//     }
//     else {
//         res.status(404).json("Planta não encontrada")
//     }
// })
// app.put("/plants/:id", (req, res) => {
//     const index = plantById(req.params.id); // Req precisa estar enviando esse param
//     console.log("Planta encontrada: " + index)
//     if (index != -1) {
//         plantas[index].nome = (req.body.nome);
//         res.status(201).json(plantas[index]);
//     }
//     else {
//         res.status(404).json("Planta não encontrada")
//     }
// })
// app.post("/plants", (req, res) => {
//     //N'um array normal uso funcão do JS msm pra preencher o corpo da requsição com o que quero
//     // let qtdPlantas = 
//     plantas.push(req.body); 
//     res.status(201).send("Plantas cadastradas no total: " + (Number(plantas.length)) )
// })
// app.delete("/plants/:id", (req, res) => {
//     const index = plantById(req.params.id);
//     plantas.splice(index, 1);
//     res.status(200).send("Planta deletada com sucesso")
// })
//--------------------------------------------------------------------------------//

export default app;