import React, { useState, useEffect } from "react";

type LocalStorageType = string | null;

export const ThemeChange: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState<LocalStorageType>(
    localStorage.getItem("app-theme")
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

  const handleChangeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
          className="optionSelector appearance-none bg-purple-color text-primary-text-color-dark border-none rounded-sm min-w-[100px] cursor-pointer px-1 bg-no-repeat focus:outline-none"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </label>
    </>
  );
};
