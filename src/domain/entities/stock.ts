import { Entity } from "../../core/entities/entity";

interface StockProps {
    productId: string;
    actualyQuantity: number;
    minimumQuantity: number;
}

export class Stock extends Entity<StockProps> {

    get productId() {
        return this.props.productId;
    }

    get actualyQuantity() {
        return this.props.actualyQuantity;
    }       

    get minimumQuantity() {
        return this.props.minimumQuantity;
    }

}