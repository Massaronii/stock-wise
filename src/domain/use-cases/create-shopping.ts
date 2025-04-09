import { Shopping } from "../entities/shopping";

interface CreateShoppingUseCaseRequest {
    productId: string;
    quantity: number;
    date: Date;
    priceUnit: number;
    priceTotal: number;
    supplierId: string;
}

export class CreateShopping {

    execute({ productId, quantity, date, priceUnit, priceTotal, supplierId }: CreateShoppingUseCaseRequest) {

        const shopping = new Shopping(productId, quantity, date, priceUnit, priceTotal, supplierId);

        return shopping;
    }
}