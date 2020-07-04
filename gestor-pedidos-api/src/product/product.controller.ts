import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateCategoriaDTO, CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createproductDTO: CreateProductDTO){//el body es para recibir los datos del navegador
        //console.log(createproductDTO);
       const product = await this.productService.createProduct(createproductDTO);
        return res.status(HttpStatus.OK).json({

            message:'Producto agregado',
            product:product
        })
    }
    @Get('/')
    async getProduct(@Res() res){
        const productos= await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            //message:"Relacion de productos"
            products: productos
        });
    }

    @Get(':productoID')
    async getProducto(@Res() res, @Param('productoID') productid){
        const producto = await this.productService.getProduct(productid);
        if(!producto) throw new NotFoundException('Producto no encontrado');    
        return res.status(HttpStatus.OK).json(producto);
    }
    //http://localhost:3000/product/delete/product?productID=5f001a4b2e93d54b3c303aad
    @Delete('/delete')
    async deleteProducto(@Res() res, @Query('productID') productID ){
       const productoEliminado =  await this.productService.deleteProduct(productID);
       if(!productoEliminado) throw new NotFoundException('Producto no encontrado');
       return res.status(HttpStatus.OK).json({
            message:'Producto eliminado satisfacoriamente',
            productoEliminado
       }) 
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID){
        const updateProduct = await this.productService.updateProduct(productID,createProductDTO);
        if(!updateProduct) throw new NotFoundException('Producto no encontrado');
        return res.status(HttpStatus.OK).json({
            message:"Producto actulizado satisfactoriamente",
            updateProduct
        });
    }

}


//en el controlador se definen las rutas del servidor