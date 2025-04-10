import { CreateSupplier } from "./create-supplier";
import { SupplierRepository } from "../repositories/supplier-repository";
import { Supplier } from "../entities/supplier";

const supplierRepository: SupplierRepository = {
    create: async (supplier: Supplier) => {
        console.log(supplier);
    }
};


describe("CreateSupplier", () => {
    it("should create a supplier", async () => {

        const createSupplier = new CreateSupplier(supplierRepository);

        const supplier = await createSupplier.execute({
            name: "supplier name",
            email: "supplier email",
            deliveryTime: "supplier delivery time",
            address: "supplier address",
            phone: "supplier phone"
        });

        expect(supplier.name).toEqual('supplier name');
    });
});