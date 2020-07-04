import {Schema} from 'mongoose'


export const CategoriaSchema = new Schema({
     nombre: { type:String, required:true},
     descripcion: String,
     imagenURL: [{ type: String}] ,
     estado: String
});