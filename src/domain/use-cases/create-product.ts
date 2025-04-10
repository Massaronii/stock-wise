import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

interface CreateProductUseCaseRequest {
    name: string;
    description: string;
    size: string;
    color: string;
    category: string;
}

export class CreateProduct {

    constructor(private productRepository: ProductRepository) {}

    async execute({ name, description, size, color, category }: CreateProductUseCaseRequest) {

        const product = Product.create({
            name,
            description,
            size,
            color,            
            category
        })

        await this.productRepository.create(product);

        return product;
    }
}