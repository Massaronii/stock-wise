import { randomUUID } from "node:crypto";

export class Stock {
    public id: string;
    public productId: string;
    public actualyQuantity: number;
    public minimumQuantity: number;

    constructor(productId: string, actualyQuantity: number, minimumQuantity: number, id?: string, ) {
        this.id = id ?? randomUUID()
        this.productId = productId;
        this.actualyQuantity = actualyQuantity;
        this.minimumQuantity = minimumQuantity;
    }
}