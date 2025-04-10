import { Sales } from "../entities/sales";

export interface SalesRepository {
    create(sales: Sales): Promise<void>;
}