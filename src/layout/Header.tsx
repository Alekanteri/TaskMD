import React from "react";

import Settigns from "../components/Settings";
import ThemeChange from "../components/ThemeChange";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="flex justify-between bg-primary-bg-color-light dark:bg-primary-bg-color-dark">
      <input type="text" />
      <Settigns>
        <div className="flex items-center justify-between gap-4">
          Change color theme: <ThemeChange />
        </div>
      </Settigns>
    </header>
  );
};

export default Header;
