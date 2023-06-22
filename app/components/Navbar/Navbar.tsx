import { ProductType } from "@/app/types/ProductType";
import NavButton from "../NavButton/NavButton";
import { NavbarProps } from "./NavbarProps";

export default function Navbar({ selectedTab, onSelectTab }: NavbarProps) {
  return (
    <nav className="flex space-x-4">
      <NavButton
        label="Todo"
        isSelected={selectedTab === ProductType.ALL}
        onClick={() => onSelectTab(ProductType.ALL)}
      />
      <NavButton
        label="Simple"
        isSelected={selectedTab === ProductType.SIMPLE}
        onClick={() => onSelectTab(ProductType.SIMPLE)}
      />
      <NavButton
        label="Renta"
        isSelected={selectedTab === ProductType.RENTABLE}
        onClick={() => onSelectTab(ProductType.RENTABLE)}
      />
      <NavButton
        label="Espacio"
        isSelected={selectedTab === ProductType.SPACE}
        onClick={() => onSelectTab(ProductType.SPACE)}
      />
    </nav>
  );
}
