import React from "react";
import ThemeChange from "./layout/ThemeChange";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="bg-primary-bg-color-light h-100swh dark:bg-primary-bg-color-dark">
      hello world <ThemeChange />
    </div>
  );
};
export default App;
