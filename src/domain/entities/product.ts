import { Entity } from "../../core/entities/entity";
import { Optional } from "../../core/entities/types/optional";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";

interface ProductProps {
    name: string;
    description: string;
    size: string;
    color: string;
    category: string;
    createdAt: Date;
    updatedAt?: Date;
}
export class Product extends Entity<ProductProps> {

    get name() {
        return this.props.name;
    }

    get description() {
        return this.props.description;
    }

    get size() {
        return this.props.size;
    }

    get color() {
        return this.props.color;
    }

    get category() {
        return this.props.category;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get updatedAt() {
        return this.props.updatedAt;
    }

    static create(props: Optional<ProductProps, 'createdAt'>, id?: UniqueEntityId) {
        const product = new Product({
            ...props,
            createdAt: new Date(),
        }, id);

        return product;
    }
}
