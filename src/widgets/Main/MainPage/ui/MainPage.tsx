import React from "react";
import { Route, Routes } from "react-router-dom";
import { Notes } from "../../../../pages/Notes";
import { Reminders } from "../../../../pages/Reminders";

export const MainPage: React.FC = (): JSX.Element => {
  return (
    <main className="grid place-items-center">
      <Routes>
        <Route path="/" element=<Notes /> />
        <Route path="/reminders" element=<Reminders /> />
      </Routes>
    </main>
  );
};
