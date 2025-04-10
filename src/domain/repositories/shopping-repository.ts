import { Shopping } from "../entities/shopping";

export interface ShoppingRepository {
    create(shopping: Shopping): Promise<void>;
}