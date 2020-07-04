import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema} from './schemas/product.schema'
import { CategoriaSchema } from './schemas/categoria.schema';

@Module({
    imports:[
        MongooseModule.forFeature([
            {name:'Product', schema: ProductSchema},
            {name:'Categoria', schema: CategoriaSchema}
        ])
    ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}


//aqui se hacen los metodos para conectarnos con la base de datos
//es el indice el proyecto