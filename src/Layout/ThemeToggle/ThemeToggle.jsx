import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className=" swap swap-rotate"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {/* Sun icon for light mode */}
      {theme === "light" ? (
        <FaMoon className="text-blue-500 h-6 w-6" />

      ) : (
        <FaSun className="text-yellow-500 h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
