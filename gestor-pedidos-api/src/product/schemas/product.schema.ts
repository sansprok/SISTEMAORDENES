import {Schema} from 'mongoose'


export const ProductSchema = new Schema({
     nombre: { type:String, required:true},
     descripcion: String,
     precio: Number ,
     unidadmedida: String,   
     imagenURL: [String] ,
     categoria: String,
     estado: {type : String, enum:['Activo','Inactivo'], default: 'Activo'} ,
     fechacreacion: {
         type:Date,
         default: Date.now
     }
});