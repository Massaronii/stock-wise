import { randomUUID } from "node:crypto";

interface SalesProps {
    productId: string;
    quantity: number;
    date: Date;
    priceTotal: number;
    priceUnit: number;
}

export class Sales {
    public id: string;
    public productId: string;
    public quantity: number;
    public date: Date;
    public priceTotal: number;
    public priceUnit: number;

    constructor( props: SalesProps, id?: string,) {
        this.id = id ?? randomUUID();
        this.productId = props.productId;
        this.quantity = props.quantity;
        this.date = props.date;
        this.priceTotal = props.priceTotal;
        this.priceUnit = props.priceUnit;
    }
}