/**
 * Connects to the database using the provided connection string, admin user, and admin password.
 * @returns {mongoose.Connection} The connection object for the database.
 */

import mongoose from "mongoose";

// Parte interna dessa função é conectar com o banco de dados, sendo necessário ser uma função assincrona
async function linkDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING, {
        user: process.env.DB_ADMIN_USER,
        pass: process.env.DB_ADMIN_PASSWORD
    }); 
    // encodeURIcomponent corrige unescaped characters, porém precisei usar os options do mongoose.connect, mudando a url de conexão do DB
    return mongoose.connection; // não é necessário adicionar await pois return já é implicitamente assíncrono
};

export default linkDatabase;
