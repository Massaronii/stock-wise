import { describe, expect, it } from "vitest";
import { CreateStock } from "./create-stock";
import { StockRepository } from "../repositories/stock-repository";
import { Stock } from "../entities/stock";

const stockRepository: StockRepository = {
    create: async (stock: Stock) => {
        console.log(stock);
    }
};

describe("CreateStock", () => {
    it("should create a stock", async () => {

        const createStock = new CreateStock(stockRepository);

        const stock = await createStock.execute({
            productId: "product id",
            actualyQuantity: 1,
            minimumQuantity: 1
        });

        expect(stock.productId).toEqual('product id');
    });
});