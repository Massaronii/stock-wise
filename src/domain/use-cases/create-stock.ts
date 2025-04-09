import { Stock } from "../entities/stock";

interface CreateStockUseCaseRequest {
    productId: string;
    actualyQuantity: number;
    minimumQuantity: number;
}

export class CreateStock {
    execute({ productId, actualyQuantity, minimumQuantity }: CreateStockUseCaseRequest) {

        const stock = new Stock(productId, actualyQuantity, minimumQuantity);

        return stock;
    }
}
