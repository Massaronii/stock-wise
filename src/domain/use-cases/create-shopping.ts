import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Shopping } from "../entities/shopping";
import { ShoppingRepository } from "../repositories/shopping-repository";

interface CreateShoppingUseCaseRequest {
    productId: string;
    quantity: number;
    date: Date;
    totalPrice: number;
    unitPrice: number;
    supplierId: string;
}

export class CreateShopping {

    constructor(private shoppingRepository: ShoppingRepository) { }

    async execute({ productId, quantity, date, totalPrice, unitPrice, supplierId }: CreateShoppingUseCaseRequest) {

        const shopping = Shopping.create(
            {
                productId: new UniqueEntityId(productId),
                quantity, date,
                unitPrice, totalPrice,
                supplierId: new UniqueEntityId(supplierId)
            });

        await this.shoppingRepository.create(shopping);

        return shopping;
    }
}