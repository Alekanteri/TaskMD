import React from "react";

import ThemeChange from "../components/ThemeChange";
import Settigns from "../components/Settings";

import { Link } from "react-router-dom";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <nav className="flex flex-col justify-between bg-sidebar-bg-color-light max-w-[250px] min-w-max dark:bg-sidebar-bg-color-dark">
      <div className="flex flex-col gap-2">
        <Link className="navigationButton" to={"/"}>
          Home
        </Link>
        <Link className="navigationButton" to={"/todo"}>
          Todo
        </Link>
      </div>
      <Settigns>
        <div className="flex items-center justify-between gap-4">
          Change color theme: <ThemeChange />
        </div>
      </Settigns>
    </nav>
  );
};

export default Sidebar;
