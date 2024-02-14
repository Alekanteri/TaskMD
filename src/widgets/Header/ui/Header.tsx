import React from "react";
import { Settigns } from "../../../features/Settings";
import { ThemeChange } from "../../../pocesses/ThemeChange/ThemeChange";
import { SearchBar } from "./SearchBar";
import { SidebarMenuToggle } from "./SidebarMenuToggle";

interface HeaderProps {
  togglePosition: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  togglePosition,
}: HeaderProps): JSX.Element => {
  return (
    <header className="flex justify-between bg-primary-bg-color-light dark:bg-primary-bg-color-dark">
      <SidebarMenuToggle togglePosition={togglePosition} />
      <SearchBar />
      <Settigns>
        <div className="flex items-center justify-between gap-4">
          Change color theme: <ThemeChange />
        </div>
      </Settigns>
    </header>
  );
};
