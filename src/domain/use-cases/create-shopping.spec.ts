import { CreateShopping } from "./create-shopping";
import { ShoppingRepository } from "../repositories/shopping-repository";
import { Shopping } from "../entities/shopping";

const shoppingRepository: ShoppingRepository = {
    create: async (shopping: Shopping) => {
        console.log(shopping);
    }
};

describe("CreateShopping", () => {

    it("should create a shopping", async () => {

        const createShopping = new CreateShopping(shoppingRepository);

        const shopping = await createShopping.execute({
            productId: "product id",
            quantity: 1,
            date: new Date(),
            totalPrice: 10,
            unitPrice: 100,
            supplierId: "supplier id"
        });

        expect(shopping.productId).toEqual('product id');
    })

})