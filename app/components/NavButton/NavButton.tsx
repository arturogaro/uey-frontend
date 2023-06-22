import { NavButtonProps } from "./NavButtonProps";

export default function NavButton({
  label,
  isSelected,
  onClick,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold text-sm 
        ${
          isSelected
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white"
        }`}
    >
      {label}
    </button>
  );
}
