import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Sales } from "../entities/sales";
import { SalesRepository } from "../repositories/sales-repository";

interface CreateSalesUseCaseRequest {
    productId: string;
    quantity: number;
    date: Date;
    priceTotal: number;
    priceUnit: number;

}

export class CreateSales {

    constructor(private salesRepository: SalesRepository) { }

    async execute({ productId, quantity, date, priceTotal, priceUnit }: CreateSalesUseCaseRequest) {

        const sales = Sales.create({ productId: new UniqueEntityId(productId), quantity, date, priceTotal, priceUnit });

        await this.salesRepository.create(sales);

        return sales;
    }
}

