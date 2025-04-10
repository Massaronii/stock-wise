import { Supplier } from "../entities/supplier";
import { SupplierRepository } from "../repositories/supplier-repository";

interface CreateSupplierUseCaseRequest {
    name: string;
    email: string;
    deliveryTime: string;
    address: string;
    phone: string;
}

export class CreateSupplier {

    constructor(private supplierRepository: SupplierRepository) { }

    async execute({ name, email, deliveryTime, address, phone }: CreateSupplierUseCaseRequest) {

        const supplier = new Supplier({name, email, deliveryTime, address, phone});

        await this.supplierRepository.create(supplier);

        return supplier;
    }
}

