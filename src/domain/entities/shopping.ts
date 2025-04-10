import { Entity } from "../../core/entities/entity";

interface ShoppingProps {
    productId: string;
    quantity: number;
    date: Date;
    priceUnit: number;
    priceTotal: number;
    supplierId: string;
}

export class Shopping  extends Entity<ShoppingProps> {


    get productId() {
        return this.props.productId;
    }

    get quantity() {
        return this.props.quantity;
    }

    get date() {
        return this.props.date;
    }

    get priceUnit() {
        return this.props.priceUnit;
    }   

    get priceTotal() {
        return this.props.priceTotal;
    }

    get supplierId() {
        return this.props.supplierId;
    }   
}