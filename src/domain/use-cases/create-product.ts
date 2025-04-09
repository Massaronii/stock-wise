import { Product } from "../entities/product";

interface CreateProductUseCaseRequest {
    name: string;
    description: string;
    size: string;
    color: string;
    category: string;
}

export class CreateProduct {

    execute({ name, description, size, color, category }: CreateProductUseCaseRequest) {

        const product = new Product(name, description, size, color, category);

        return product;
    }
}