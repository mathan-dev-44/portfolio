import { useState, useEffect, useCallback } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [hoverColor, setHoverColor] = useState("");

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const newDark = !prev;
      const html = document.documentElement;

      if (newDark) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newDark;
    });
  }, []);

  // Apply theme + update hover color **only here**
  useEffect(() => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add("dark");
      setHoverColor("#ffffff");
    } else {
      html.classList.remove("dark");
      setHoverColor("#3b82f6");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode, hoverColor };
}
