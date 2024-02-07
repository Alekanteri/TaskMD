import React from "react";
import Sidebar from "./layout/Sidebar";
import MainPage from "./layout/MainPage";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="grid grid-cols-[1fr_minmax(600px,_100%)] bg-primary-bg-color-light h-full text-primary-text-color-light dark:bg-primary-bg-color-dark dark:text-primary-text-color-dark">
      <Sidebar />
      <MainPage />
    </div>
  );
};
export default App;
