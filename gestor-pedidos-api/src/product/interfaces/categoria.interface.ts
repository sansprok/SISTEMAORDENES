import{ Document} from 'mongoose'

export interface Categoria extends Document{
    readonly nombre:string;
    readonly descripcion:string;
    readonly imagenes:[{url:string}];
    readonly estado:{type : string, enum:['Activo','Inactivo'],default: 'Activo'} ;

}