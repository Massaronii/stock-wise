import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Shopping } from "../entities/shopping";
import { ShoppingRepository } from "../repositories/shopping-repository";

interface CreateShoppingUseCaseRequest {
    productId: string;
    quantity: number;
    date: Date;
    priceUnit: number;
    priceTotal: number;
    supplierId: string;
}

export class CreateShopping {

    constructor(private shoppingRepository: ShoppingRepository) { }

   async execute({ productId, quantity, date, priceUnit, priceTotal, supplierId }: CreateShoppingUseCaseRequest) {

        const shopping = Shopping.create({ productId: new UniqueEntityId(productId), quantity, date, priceUnit, priceTotal, supplierId: new UniqueEntityId(supplierId) });

        await this.shoppingRepository.create(shopping);

        return shopping;
    }
}