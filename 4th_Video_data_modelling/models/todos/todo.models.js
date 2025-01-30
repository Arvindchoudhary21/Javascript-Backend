import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
{
    //content of the todo 
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default: false,
    },//completeness of todo

    //kis user ne banaya h oske liye ye object
    createdBy : {
        type : mongoose.Schema.Types.ObjectId, // this is fixed just yad krlo
        ref : "User", // same name jo user.models.js ke export ke .models("","") first wala field me name h wahi because reference hum user se lenge jo create kiya h
    },

    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "SubTodo", // see file sub_todo_models.js osme se name dekho
        }
    ] // array of Sub-Todos

} , {timestamps:true});


export const Todo = mongoose.model("Todo" , todoSchema);