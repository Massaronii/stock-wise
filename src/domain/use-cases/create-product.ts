import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

interface CreateProductUseCaseRequest {
    name: string;
    description: string;
    size: string;
    color: string;
    category: string;
    costPrice: number;
    salePrice: number;
}

export class CreateProduct {

    constructor(private productRepository: ProductRepository) {}

    async execute({ name, description, size, color, category, costPrice, salePrice }: CreateProductUseCaseRequest) {

        const product = Product.create({
            name,
            description,
            size,
            color,            
            category,
            costPrice,
            salePrice
        })

        await this.productRepository.create(product);

        return product;
    }
}