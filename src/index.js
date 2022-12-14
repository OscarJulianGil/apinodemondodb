const express = require('express');
const mongoose = require('mongoose');
const empresaRoutes = require('../src/routes/empresa');
require('dotenv').config();


const app = express();

//Express configurado para json
app.use(express.json());
//Definimos las rutas de empresa
app.use(empresaRoutes);

//Root por default responde a localhost:port
app.get("/",(req,res) => {
    res.send("Servidor Node js inicializado V2.0.")
});


mongoose.connect(process.env.mongoDbConnection)
.then(()=> {
    console.log("Conectado a mongoDB")
}).catch((error) => {
    console.log("Error conectado e mongo DB" + error);
})

app.listen(process.env.port,() => {
    console.log("El servidor esta listo y funcionando...");
})

