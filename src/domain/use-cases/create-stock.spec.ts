import { describe, expect, it } from "vitest";
import { CreateStock } from "./create-stock";

describe("CreateStock", () => {
    it("should create a stock", () => {
        const stock = new CreateStock().execute({
            productId: "product id",
            actualyQuantity: 1,
            minimumQuantity: 1
        });

        expect(stock.productId).toEqual('product id');
    });
});