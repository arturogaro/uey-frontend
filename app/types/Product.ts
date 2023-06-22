import { ProductType } from "./ProductType";
import { RentType } from "./RentType";

export interface Product {
  id: string;

  name: string;

  slug: string;

  seller: string;

  imageUrl: string;

  price: number;

  type: ProductType;

  stock?: number;

  rentType?: RentType;

  latitude?: number;

  longitude?: number;
}
