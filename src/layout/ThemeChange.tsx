import React from "react";

const ThemeChange: React.FC = () => {
  const darkIcon = <span className="material-symbols-outlined">dark_mode</span>;
  const lightIcon = (
    <span className="material-symbols-outlined">light_mode</span>
  );
  const [theme, setTheme] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setTheme(newColorScheme);
    });

  const handleChangeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  React.useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      className="p-2 m-2 rounded-full bg-black border-none w-[40px] h-[40px] text-white"
      onClick={handleChangeTheme}
    >
      {theme == "dark" ? darkIcon : lightIcon}
    </button>
  );
};

export default ThemeChange;
