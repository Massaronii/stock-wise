import { randomUUID } from "node:crypto";

export class Shopping {
    public id: string;
    public productId: string;
    public quantity: number;
    public date: Date;
    public priceUnit: number;
    public supplierId: string;
    public priceTotal: number;

    constructor(productId: string, quantity: number, date: Date, priceUnit: number, priceTotal: number, supplierId: string, id?: string) {
        this.id = id ?? randomUUID();
        this.productId = productId;
        this.quantity = quantity;
        this.date = date;
        this.priceUnit = priceUnit;
        this.priceTotal = priceTotal;
        this.supplierId = supplierId;
    }
}