import { randomUUID } from "node:crypto";


interface ProductProps {
    name: string;
    description: string;
    size: string;
    color: string;
    category: string;
}
export class Product {
    public id: string;
    public name: string;
    public description: string;
    public size: string;
    public color: string;
    public category: string;

    constructor(props: ProductProps, id?: string) {
        this.id = id ?? randomUUID();
        this.name = props.name;
        this.description = props.description;
        this.size = props.size;
        this.color = props.color;
        this.category = props.category;
    }
}
