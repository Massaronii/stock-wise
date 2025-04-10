import { Entity } from "../../core/entities/entity";


interface ProductProps {
    name: string;
    description: string;
    size: string;
    color: string;
    category: string;
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

}
