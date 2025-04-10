import { randomUUID } from "node:crypto";

interface SupplierProps {
    name: string;
    email: string;
    deliveryTime: string;
    address: string;
    phone: string;
}

export class Supplier {
    public id: string;
    public name: string;
    public email: string;
    public address: string;
    public phone: string;
    public deliveryTime: string;

    constructor(props: SupplierProps, id?: string) {
        this.id = id ?? randomUUID()
        this.name = props.name;
        this.email = props.email;
        this.address = props.address;
        this.phone = props.phone;
        this.deliveryTime = props.deliveryTime;
    }
}