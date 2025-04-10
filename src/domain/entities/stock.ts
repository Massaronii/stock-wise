import { randomUUID } from "node:crypto";

interface StockProps {
    productId: string;
    actualyQuantity: number;
    minimumQuantity: number;
}

export class Stock {
    public id: string;
    public productId: string;
    public actualyQuantity: number;
    public minimumQuantity: number;

    constructor(props: StockProps, id?: string, ) {
        this.id = id ?? randomUUID()
        this.productId = props.productId;
        this.actualyQuantity = props.actualyQuantity;
        this.minimumQuantity = props.minimumQuantity;
    }
}