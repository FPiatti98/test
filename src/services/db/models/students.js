import mongoose from "mongoose";

const userCollection = 'Estudiantes';

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    age : {
        type : Number,
        require : true
    },
    id : {
        type : String,
        require : true
    },
    courses : {
        type : Array,
        require : true
    }
});

export const userModel = mongoose.model(userCollection, userSchema);