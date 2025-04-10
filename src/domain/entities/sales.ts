import { Entity } from "../../core/entities/entity";
import { Optional } from "../../core/entities/types/optional";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";

interface SalesProps {
    productId: UniqueEntityId;
    quantity: number;
    date: Date;
    priceTotal: number;
    priceUnit: number;
    createdAt: Date;
    updatedAt?: Date;
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

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }

    static create(props: Optional<SalesProps, 'createdAt'>, id?: UniqueEntityId) {
        const sales = new Sales({
            ...props,
            createdAt: new Date(),
        }, id);

        return sales;
    }
}