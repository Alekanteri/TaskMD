import React from "react";
import { MdOutlineSettings } from "react-icons/md";

interface MenuButtonProps {
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  onClick,
}: MenuButtonProps) => {
  return (
    <button
      className="outlineBorderForElement rounded-full p-1 bg-secondary-bg-color-light transition-all text-primary-text-color-light m-4 hover:bg-element-context-color hover:text-primary-text-color-dark dark:bg-sidebar-bg-color-dark dark:text-primary-text-color-dark dark:hover:bg-element-context-color"
      onClick={onClick}
    >
      <MdOutlineSettings className="size-6" />
    </button>
  );
};
