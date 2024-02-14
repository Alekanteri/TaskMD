import React, { createContext, useState } from "react";

import "./styles/styles.css";

import { Sidebar } from "../widgets/Sidebar/";
import { MainPage } from "../widgets/Main/";
import { Header } from "../widgets/Header";

type sidebarPositionContextProps = "absolute" | "relative";

export const SidebarPositionContext =
  createContext<sidebarPositionContextProps>("relative");

const App: React.FC = (): JSX.Element => {
  const [position, setPosition] =
    useState<sidebarPositionContextProps>("relative");

  const toggleSidebarPosition = () => {
    if (position === "relative") {
      setPosition("absolute");
    } else {
      setPosition("relative");
    }
  };
  return (
    <>
      <SidebarPositionContext.Provider value={position}>
        <div
          className={`grid ${
            position === "relative" ? "grid-cols-[1fr_minmax(1rem,_100%)]" : ""
          } bg-primary-bg-color-light h-full text-primary-text-color-light dark:bg-primary-bg-color-dark dark:text-primary-text-color-dark`}
        >
          <Sidebar />
          <div className="max-w-full h-full grid grid-cols-1 grid-rows-[auto_1fr]">
            <Header togglePosition={toggleSidebarPosition} />
            <MainPage />
          </div>
        </div>
      </SidebarPositionContext.Provider>
    </>
  );
};
export default App;
