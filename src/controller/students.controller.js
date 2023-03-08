import { userModel } from "../services/db/models/students.js";
import mongoose from "mongoose";

export const createStudent = async(req, res) => {
    try{
        const newStudent = new userModel(req.body);
        const Estudiante = await newStudent.save();
        return res.send(Estudiante)
    } catch(err) {
        return res.status(500).send(err);
    }
}

export const getAllStudents = async(req, res) => {
    try {
        const Estudiantes = await userModel.find();
        return res.send(Estudiantes);
    } catch(err) {
        console.log(err)
        return res.status(500).send(err);
    }
}


