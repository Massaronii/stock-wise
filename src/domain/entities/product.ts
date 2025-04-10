import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/entities/types/optional";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface ProductProps {
    name: string;
    description: string;
    size: string;
    color: string;
    category: string;
    costPrice: number;
    salePrice: number;
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

    get costPrice() {
        return this.props.costPrice;
    }

    get salePrice() {
        return this.props.salePrice;
    }

    setCostPrice(costPrice: number) {
        this.props.costPrice = costPrice;
        this.touch();
    }

    setSalePrice(salePrice: number) {
        this.props.salePrice = salePrice;
        this.touch();
    }

    private touch(){
        this.props.updatedAt = new Date();
    }

    static create(props: Optional<ProductProps, 'createdAt'>, id?: UniqueEntityId) {
        const product = new Product({
            ...props,
            createdAt: new Date(),
        }, id);

        return product;
    }
}
