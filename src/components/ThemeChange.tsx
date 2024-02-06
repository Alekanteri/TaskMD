import React, { useState, useEffect, ChangeEvent } from "react";

type LocalStorageType = string | null;

const ThemeChange: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState<LocalStorageType>(
    localStorage.getItem("app-theme"),
  );

  const themeSwitcher = (curTheme: LocalStorageType) => {
    if (curTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else if (curTheme == "light") {
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event: MediaQueryListEvent) => {
      const newColorScheme: string | null = event.matches ? "dark" : "light";
      localStorage.setItem("app-theme", newColorScheme);
      themeSwitcher(newColorScheme);
    });

  const handleChangeTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("app-theme", event.target.value);
    setTheme(localStorage.getItem("app-theme"));
  };

  useEffect(() => {
    themeSwitcher(theme);
  }, [theme]);

  return (
    <>
      <label className="relative">
        <select
          name="theme"
          id="selectTheme"
          defaultValue={theme as string}
          onChange={handleChangeTheme}
          className="optionSelector"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </label>
    </>
  );
};

export default ThemeChange;
