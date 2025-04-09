import { CreateProduct } from "./create-product";
import { Product } from "../entities/product";
import { describe, expect, it } from "vitest";

describe("CreateProduct", () => {

    it("should create a product", () => {
        const product = new CreateProduct().execute({
            name: "product name",
            description: "product description",
            size: "product size",
            color: "product color",
            category: "product category"
        });

        expect(product.name).toEqual('product name');
    });
});