import express from 'express';
import __dirname from './util.js';

import mongoose from 'mongoose';
//import studentRouter from './routes/students.router.js'
//import studentsRouter from './routes/students.router.js'
import{ default as routerStudents } from './routes/students.router.js';


//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/students', routerStudents);


//Declaración de Routers:


const SERVER_PORT = 9090;
app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/colegio?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1');
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();