import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/entities/types/optional";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface ShoppingProps {
    productId: UniqueEntityId;
    quantity: number;
    date: Date;
    unitPrice: number;
    totalPrice: number;
    supplierId: UniqueEntityId;
    createdAt: Date;
    updatedAt?: Date;
}

export class Shopping extends Entity<ShoppingProps> {


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
        return this.props.unitPrice;
    }

    get priceTotal() {
        return this.props.totalPrice;
    }

    get supplierId() {
        return this.props.supplierId;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }

    static create(props: Optional<ShoppingProps, 'createdAt'>, id?: UniqueEntityId) {
        const shopping = new Shopping({
            ...props,
            createdAt: new Date(),
        }, id);

        return shopping;
    }
}