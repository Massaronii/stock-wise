import { CreateProduct } from "./create-product";
import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

const productRepository: ProductRepository = {
    create: async (product: Product) => {
        console.log(product);
    }
};

describe("CreateProduct", () => {

    it("should create a product", async () => {

        const createProduct = new CreateProduct(productRepository)

        const product = await createProduct.execute({
            name: "product name",
            description: "product description",
            size: "product size",
            color: "product color",
            category: "product category",
            costPrice: 10,
            salePrice: 100
        });

        expect(product.name).toEqual('product name');
    });
});