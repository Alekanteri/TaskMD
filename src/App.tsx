import React from "react";

import Sidebar from "./layout/Sidebar";
import MainPage from "./layout/MainPage";
import Header from "./layout/Header";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-[1fr_minmax(1rem,_100%)] bg-primary-bg-color-light h-full text-primary-text-color-light dark:bg-primary-bg-color-dark dark:text-primary-text-color-dark">
        <Sidebar />
        <div className="max-w-full h-full grid grid-cols-1 grid-rows-[auto_1fr]">
          <Header />
          <MainPage />
        </div>
      </div>
    </>
  );
};
export default App;
