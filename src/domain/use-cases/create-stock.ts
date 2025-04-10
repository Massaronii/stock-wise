import { Stock } from "../entities/stock";
import { StockRepository } from "../repositories/stock-repository";

interface CreateStockUseCaseRequest {
    productId: string;
    actualyQuantity: number;
    minimumQuantity: number;
}

export class CreateStock {

    constructor(private stockRepository: StockRepository) { }

   async  execute({ productId, actualyQuantity, minimumQuantity }: CreateStockUseCaseRequest) {

        const stock = new Stock({productId, actualyQuantity, minimumQuantity});

        await this.stockRepository.create(stock);

        return stock;
    }
}
