import{ Document} from 'mongoose'

export interface Product extends Document {   
        readonly nombre: string;
        readonly descripcion: string;
        readonly precio: number ;
        readonly unidadmedida: string;    
        readonly imagenURL: [{ url:string}] ;
        readonly categoria: string;
        readonly estado: {type : string, enum:['Activo','Inactivo'], default: 'Activo'} ;
        readonly fechacreacion: Date;
}