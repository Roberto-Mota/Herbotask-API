import http from "http";
import app from "./src/app.js";

const PORT = 1234;

//----------------------------------------------------------------------------//
// Aqui é um exemplo de servidor criado na unha pelo JS, apenas com o http:
//
// const rotas = {
//   "/": "Default route",
//   "/plants": "Returning Plants",
//   "/ecochambers": "Returning Ecochambers",
// };

//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]) //Pega o objeto "url" de req e escreve na resposta o que foi estabelecido na req -?-;

// });

// server.listen(PORT, () => {
//     console.log("Servidor escutando")
// });
//----------------------------------------------------------------------------//

app.listen(PORT, () => {
  console.log("Servidor escutando");
});
