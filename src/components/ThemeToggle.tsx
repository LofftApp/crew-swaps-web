import { useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { Moon, Sun } from "lucide-react";

const themes = {
  dark: "darkcrew",
  light: "lightcrew",
};

function ThemeToggle() {
  const { value: theme, setValue: setTheme } = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light,
    "theme",
  );

  useEffect(() => {
    if (theme === themes.dark) {
      document.documentElement.setAttribute("data-theme", themes.dark);
    } else {
      document.documentElement.setAttribute("data-theme", themes.light);
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          onChange={handleToggleTheme}
          checked={theme === themes.dark}
        />
        <Sun className="swap-off h-8 w-8 hover:scale-110" />
        <Moon className="swap-on h-8 w-8 hover:scale-110" />
      </label>
    </div>
  );
}

export default ThemeToggle;
