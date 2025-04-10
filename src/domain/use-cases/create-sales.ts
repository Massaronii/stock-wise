import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Sales } from "../entities/sales";
import { SalesRepository } from "../repositories/sales-repository";

interface CreateSalesUseCaseRequest {
    productId: string;
    quantity: number;
    date: Date;
    totalPrice: number;
    unitPrice: number;

}

export class CreateSales {

    constructor(private salesRepository: SalesRepository) { }

    async execute({ productId, quantity, date, totalPrice, unitPrice }: CreateSalesUseCaseRequest) {

        const sales = Sales.create({ productId: new UniqueEntityId(productId), quantity, date, totalPrice, unitPrice });

        await this.salesRepository.create(sales);

        return sales;
    }
}

