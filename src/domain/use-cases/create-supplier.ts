import { Supplier } from "../entities/supplier";

interface CreateSupplierUseCaseRequest {
    name: string;
    email: string;
    deliveryTime: string;
    address: string;
    phone: string;
}

export class CreateSupplier {

    execute({ name, email, deliveryTime, address, phone }: CreateSupplierUseCaseRequest) {

        const supplier = new Supplier({name, email, deliveryTime, address, phone});

        return supplier;
    }
}

