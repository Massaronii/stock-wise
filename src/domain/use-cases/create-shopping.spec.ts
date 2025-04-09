import { describe, expect, it } from "vitest";
import { CreateShopping } from "./create-shopping";

describe("CreateShopping", () => {

    it("should create a shopping", () => {
        const shopping = new CreateShopping().execute({
            productId: "product id",
            quantity: 1,
            date: new Date(),
            priceUnit: 10,
            priceTotal: 100,
            supplierId: "supplier id"
        });

        expect(shopping.productId).toEqual('product id');
    })

})