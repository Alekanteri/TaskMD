import React from "react";
import { MdOutlineClose } from "react-icons/md";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
}: CloseButtonProps) => {
  return (
    <button
      className="absolute top-2 right-2 transition-all bg-secondary-bg-color-light p-2 rounded-full text-primary-text-color-light hover:text-primary-text-color-dark hover:bg-red-color dark:bg-sidebar-bg-color-dark dark:text-primary-text-color-dark dark:hover:bg-red-color"
      onClick={onClick}
    >
      <MdOutlineClose />
    </button>
  );
};
