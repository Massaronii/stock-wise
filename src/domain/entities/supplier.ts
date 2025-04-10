import { Entity } from "../../core/entities/entity";
import { Optional } from "../../core/entities/types/optional";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";

interface SupplierProps {
    name: string;
    email: string;
    deliveryTime: string;
    address: string;
    phone: string;
    createdAt: Date;
    updatedAt?: Date;
}

export class Supplier extends Entity<SupplierProps> {

    get name() {
        return this.props.name;
    }

    get email() {
        return this.props.email;
    }

    get deliveryTime() {
        return this.props.deliveryTime;
    }

    get address() {
        return this.props.address;
    }

    get phone() {
        return this.props.phone;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }

    static create(props: Optional<SupplierProps, 'createdAt'>, id?: UniqueEntityId) {
        const supplier = new Supplier({
            ...props,
            createdAt: new Date(),
        }, id);

        return supplier;
    }
}