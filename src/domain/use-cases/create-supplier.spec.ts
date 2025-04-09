import { describe, expect, it } from "vitest";
import { CreateSupplier } from "./create-supplier";

describe("CreateSupplier", () => {
    it("should create a supplier", () => {
        const supplier = new CreateSupplier().execute({
            name: "supplier name",
            email: "supplier email",
            deliveryTime: "supplier delivery time",
            address: "supplier address",
            phone: "supplier phone"
        });

        expect(supplier.name).toEqual('supplier name');
    });
});