import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";

const MainPage: React.FC = (): JSX.Element => {
  return (
    <main className="grid place-items-center">
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/todo" element=<Todo /> />
      </Routes>
    </main>
  );
};

export default MainPage;
