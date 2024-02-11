import React from "react";

import Logo from "../assets/logo.svg";

import { MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <nav className="flex flex-col bg-sidebar-bg-color-light max-w-[250px] min-w-max dark:bg-sidebar-bg-color-dark">
      <div className="relative">
        <img src={Logo} alt="svg logo" className="size-20 block" />
        <button className="absolute right-0 top-0 rounded-full p-1 bg-secondary-bg-color-light transition-all text-primary-text-color-light m-[1rem_auto] hover:bg-purple-color hover:text-primary-text-color-dark dark:bg-sidebar-bg-color-dark dark:text-primary-text-color-dark dark:hover:bg-purple-color">
          <MdMenu className="size-6" />
        </button>
      </div>
      <div className="flex flex-col gap-2 m-4">
        <Link className="navigationButton" to={"/"}>
          Home
        </Link>
        <Link className="navigationButton" to={"/todo"}>
          Todo
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
