import { Injectable } from '@nestjs/common';

import {Model, TagSet} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { Product} from './interfaces/product.interface';
import { CreateCategoriaDTO, CreateProductDTO } from './dto/product.dto';


@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async getProducts():Promise<Product[]>{
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productID:string):Promise<Product>{
        const product = await this.productModel.findById(productID);
        return product;
    }
    async createProduct(createProductDTO:CreateProductDTO):Promise<Product>{
        const product = new this.productModel(createProductDTO);
        await product.save();
        return product;
    }
    async updateProduct(productID: string, createProductDTO: CreateProductDTO):Promise<Product>{
        const updateproduct =await this.productModel.findByIdAndUpdate(productID,createProductDTO, {new :true});
        return updateproduct;

    }
    async deleteProduct(productID:string):Promise<Product>{
        const deletedproduct = await this.productModel.findByIdAndDelete(productID);
        return deletedproduct;

    }


}
