//data transfer object

export class CreateProductDTO{
    readonly nombre: string;
    readonly descripcion: string;
    readonly precio: number ;
    readonly unidadmedida: string;    
    readonly imagenURL: [{ url:string}] ;
    readonly categoria: string;
    readonly estado: {type : string, enum:['Activo','Inactivo'], default: 'Activo'} ;
    readonly fechacreacion: Date;
}

export class CreateCategoriaDTO{
    readonly nombre:string;
    readonly descripcion:string;
    readonly imagenes:[{url:string}];
    readonly estado:{type : string, enum:['Activo','Inactivo'],default: 'Activo'} ;
}