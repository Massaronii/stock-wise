import { Entity } from "../../core/entities/entity";

interface SalesProps {
    productId: string;
    quantity: number;
    date: Date;
    priceTotal: number;
    priceUnit: number;
}

export class Sales extends Entity<SalesProps> {

    get productId() {
        return this.props.productId;
    }

    get quantity() {
        return this.props.quantity;
    }

    get date() {
        return this.props.date;
    }   

    get priceTotal() {
        return this.props.priceTotal;
    }

    get priceUnit() {
        return this.props.priceUnit;
    }
}