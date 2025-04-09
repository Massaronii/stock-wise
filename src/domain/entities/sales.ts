import { randomUUID } from "node:crypto";

export class Sales {
    public id: string;
    public productId: string;
    public quantity: number;
    public date: Date;
    public priceTotal: number;
    public priceUnit: number;

    constructor( productId: string, quantity: number, date: Date, priceTotal: number, priceUnit: number, id?: string,) {
        this.id = id ?? randomUUID();
        this.productId = productId;
        this.quantity = quantity;
        this.date = date;
        this.priceTotal = priceTotal;
        this.priceUnit = priceUnit;
    }
}