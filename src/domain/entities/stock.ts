import { Entity } from "../../core/entities/entity";
import { Optional } from "../../core/entities/types/optional";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";

interface StockProps {
    productId: UniqueEntityId;
    actualyQuantity: number;
    minimumQuantity: number;
    createdAt: Date;
    updatedAt?: Date;
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

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }

    static create(props: Optional<StockProps, 'createdAt'>, id?: UniqueEntityId) {
        const stock = new Stock({
            ...props,
            createdAt: new Date(),
        }, id);

        return stock;
    }
}