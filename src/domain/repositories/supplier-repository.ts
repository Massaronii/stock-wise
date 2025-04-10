import { Supplier } from "../entities/supplier";

export interface SupplierRepository {
    create(supplier: Supplier): Promise<void>;
}