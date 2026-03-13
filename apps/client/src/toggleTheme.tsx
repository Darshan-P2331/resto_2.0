import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-xl m-4 cursor-pointer shadow-md"
    >
      {theme === "dark" ? (
        <SunIcon className="size-6 dark:text-white" />
      ) : (
        <MoonIcon className="size-6" />
      )}
    </button>
  );
};
