import { ProductType } from "../../types/ProductType";

export interface NavbarProps {
  selectedTab: ProductType;
  onSelectTab: (tab: ProductType) => void;
}
