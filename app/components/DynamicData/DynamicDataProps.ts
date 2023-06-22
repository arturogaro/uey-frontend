import { ProductType } from "../../types/ProductType";
import { RentType } from "../../types/RentType";

export interface DynamicDataProps {
  id: string;
  rentType: RentType | undefined;
  productType: ProductType;
}
