import { IProduct } from "./product";

export interface IIsle {
    id: string;
    name: string;
    description?: string;
    products: IProduct[];
}