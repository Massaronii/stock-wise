import { randomUUID } from "node:crypto";

export class Product {
    public id: string;
    public name: string;
    public description: string;
    public size: string;
    public color: string;
    public category: string;

    constructor(name: string, description: string, size: string, color: string, category: string, id?: string,) {
        this.id = id ?? randomUUID();
        this.name = name;
        this.description = description;
        this.size = size;
        this.color = color;
        this.category = category;
    }
}
