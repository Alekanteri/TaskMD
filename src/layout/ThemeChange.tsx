import { FC, useState, useEffect } from "react";

const ThemeChange: FC = (): JSX.Element => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("app-theme"),
  );

  const themeSwitcher = (curTheme: string | null) => {
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
    .addEventListener("change", (event) => {
      const newColorScheme: string | null = event.matches ? "dark" : "light";
      localStorage.setItem("app-theme", newColorScheme);
      themeSwitcher(newColorScheme);
    });

  const handleChangeTheme = (event: any) => {
    localStorage.setItem("app-theme", event.target.value);
    setTheme(localStorage.getItem("app-theme"));
  };

  useEffect(() => {
    themeSwitcher(theme);
  }, [theme]);

  return (
    <>
      <select
        name="theme"
        id="selectTheme"
        defaultValue={theme as string}
        onChange={handleChangeTheme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      {theme}
    </>
  );
};

export default ThemeChange;
