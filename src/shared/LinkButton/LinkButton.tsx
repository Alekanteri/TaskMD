import React from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  children: React.ReactNode;
  to: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  to,
}: LinkButtonProps) => {
  return (
    <Link
      className="outlineBorderForElement py-2 px-4 transition-all text-primary-text-color-light text-center rounded-lg hover:bg-element-context-color hover:text-primary-text-color-dark dark:text-primary-text-color-dark"
      to={to}
    >
      {children}
    </Link>
  );
};
