import { Entity } from "../../core/entities/entity";

interface SupplierProps {
    name: string;
    email: string;
    deliveryTime: string;
    address: string;
    phone: string;
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
}