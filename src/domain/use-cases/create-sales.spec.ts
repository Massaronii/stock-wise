import { describe, expect, it } from "vitest";
import { CreateSales } from "./create-sales";

describe("CreateSales", () => {
    it("should create a sales", () => {
        const sales = new CreateSales().execute({
            productId: "product id",
            quantity: 1,
            date: new Date(),
            priceTotal: 100,
            priceUnit: 10
        });

        expect(sales.productId).toEqual('product id');
    });
});