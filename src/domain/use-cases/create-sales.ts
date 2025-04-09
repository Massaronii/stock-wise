import { Sales } from "../entities/sales";

interface CreateSalesUseCaseRequest {
    productId: string;
    quantity: number;
    date: Date;
    priceTotal: number;
    priceUnit: number;
}

export class CreateSales {
    execute({ productId, quantity, date, priceTotal, priceUnit }: CreateSalesUseCaseRequest) {

        const sales = new Sales(productId, quantity, date, priceTotal, priceUnit);

        return sales;
    }
}

