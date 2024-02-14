import React from "react";
import { MdMenu } from "react-icons/md";

interface SidebarMenuToggleProps {
  togglePosition: () => void;
}

export const SidebarMenuToggle: React.FC<SidebarMenuToggleProps> = ({
  togglePosition,
}: SidebarMenuToggleProps) => {
  return (
    <button
      className="outlineBorderForElement rounded-full p-1 bg-secondary-bg-color-light transition-all text-primary-text-color-light m-4 hover:bg-element-context-color hover:text-primary-text-color-dark dark:bg-sidebar-bg-color-dark dark:text-primary-text-color-dark dark:hover:bg-element-context-color"
      onClick={togglePosition}
    >
      <MdMenu className="size-6" />
    </button>
  );
};
