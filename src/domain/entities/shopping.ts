import { randomUUID } from "node:crypto";

interface ShoppingProps {
    productId: string;
    quantity: number;
    date: Date;
    priceUnit: number;
    priceTotal: number;
    supplierId: string;
}

export class Shopping {
    public id: string;
    public productId: string;
    public quantity: number;
    public date: Date;
    public priceUnit: number;
    public supplierId: string;
    public priceTotal: number;

    constructor(props: ShoppingProps, id?: string) {
        this.id = id ?? randomUUID();
        this.productId = props.productId;
        this.quantity = props.quantity;
        this.date = props.date;
        this.priceUnit = props.priceUnit;
        this.priceTotal = props.priceTotal;
        this.supplierId = props.supplierId;
    }
}