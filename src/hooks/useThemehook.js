import { useState, useCallback } from "react";

function getInitialDark() {
  const saved = localStorage.getItem("theme");
  return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const dark = getInitialDark();
    // Apply class immediately during init — no useEffect needed
    document.documentElement.classList.toggle("dark", dark);
    return dark;
  });

  const [hoverColor, setHoverColor] = useState(() =>
    getInitialDark() ? "#ffffff" : "#3b82f6"
  );

  const toggleDarkMode = useCallback(() => {
    // Freeze all CSS transitions for 2 frames so colors snap instantly
    document.documentElement.classList.add("theme-switching");

    setIsDarkMode((prev) => {
      const newDark = !prev;
      document.documentElement.classList.toggle("dark", newDark);
      localStorage.setItem("theme", newDark ? "dark" : "light");
      setHoverColor(newDark ? "#ffffff" : "#3b82f6");
      return newDark;
    });

    // Re-enable transitions after the browser has painted the new theme
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document.documentElement.classList.remove("theme-switching")
      )
    );
  }, []);

  return { isDarkMode, toggleDarkMode, hoverColor };
}
