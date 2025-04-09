import { randomUUID } from "node:crypto";

export class Supplier {
    public id: string;
    public name: string;
    public email: string;
    public address: string;
    public phone: string;
    public deliveryTime: string;

    constructor(name: string, email: string, deliveryTime: string
        , address: string, phone: string, id?: string
    ) {
        this.id = id ?? randomUUID()
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.deliveryTime = deliveryTime;
    }
}