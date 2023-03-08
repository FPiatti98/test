import mongoose from "mongoose";

const coursesCollection = 'Cursos';

const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description : String,
    teacherName : {
        type : String,
        require : true
    },
    students : {
        type : Array,
        require : true
    }
});

export const courseModel = mongoose.model(coursesCollection, courseSchema);