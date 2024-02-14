import React, { useContext } from "react";
import Logo from "../../../app/assets/logo.svg";
import { SidebarPositionContext } from "../../../app/App";
import { LinkButton } from "../../../shared/LinkButton/LinkButton";

export const Sidebar: React.FC = (): JSX.Element => {
  const position = useContext(SidebarPositionContext);

  const absolutePositionStyles =
    "absolute h-fit top-1/2 transform -translate-y-1/2 rounded-e-lg";

  return (
    <nav
      className={`${
        position === "absolute" ? absolutePositionStyles : "relative"
      } flex flex-col justify-between bg-sidebar-bg-color-light max-w-[250px] dark:bg-sidebar-bg-color-dark`}
    >
      <div className="flex flex-col gap-2 m-4">
        <LinkButton to={"/"}>Notes</LinkButton>
        <LinkButton to={"/reminders"}>Reminders</LinkButton>
      </div>
      <img src={Logo} alt="svg logo" className="size-24 self-center" />
    </nav>
  );
};
