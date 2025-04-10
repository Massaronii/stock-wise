import { CreateSales } from "./create-sales";
import { Sales } from "../entities/sales";
import { SalesRepository } from "../repositories/sales-repository";

const salesRepository: SalesRepository = {
    create: async (sales: Sales) => {
        console.log(sales);
    }
};

describe("CreateSales", () => {
    it("should create a sales", async () => {
        const createSales = new CreateSales(salesRepository);

        const sales = await createSales.execute({
            productId: "product id",
            quantity: 1,
            date: new Date(),
            totalPrice: 100,
            unitPrice: 10
        });

        expect(sales.productId).toEqual('product id');
    });
});