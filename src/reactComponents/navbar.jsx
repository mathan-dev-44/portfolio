import { useCallback, useEffect, useRef, useState } from "react";
import useDarkMode from "../hooks/useThemehook";
import { Sun, Moon, Github } from "lucide-react";
import { SiReact } from "react-icons/si";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "../lib/utils";
export default function Navbar({ handleToggleHoverColor }) {
  const { toggleDarkMode, isDarkMode, hoverColor } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.querySelector(".dot-grid");
    if (!el) return;

    const onScroll = () => setIsScrolled(el.scrollTop > 0);
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    handleToggleHoverColor(hoverColor);
  }, [hoverColor]);

  console.log("isScrolled", isScrolled);

  return (
    <nav
      className={cn(
        "  top-8 sm:top-10 z-50 text-sm sticky flex items-center justify-between px-8 py-4 ",
        isScrolled
          ? "bg-white/80 backdrop-blur-md  dark:bg-zinc-900/80  shadow -translate-y-8 md:rounded-3xl"
          : "bg-transparent "
      )}
    >
      <div className="flex items-center gap-3">
        <SiReact
          color="#53C1DE"
          size={40}
          className="animate-spin [animation-duration:6s] [animation-timing-function:linear]"
        />
      </div>
      <div className="flex gap-6 items-center text-[0.83vw] my-4 md:my-4 font-semibold ">
        <button
          className={cn(
            " transition  rounded-full text-zinc-800 dark:text-zinc-400 ",
            pathname === "/" &&
              "bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full"
          )}
        >
          <Link to="/">All </Link>
        </button>
        <span
          className={cn(
            " text-zinc-800 dark:text-zinc-400 transition-colors   rounded-full duration-200 ",
            pathname === "/experience" &&
              "bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full"
          )}
        >
          <Link to="/experience">Experience</Link>
        </span>
        <span
          className={cn(
            " text-zinc-800 dark:text-zinc-400 transition-colors  rounded-full duration-200 ",
            pathname === "/projects" &&
              "bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full"
          )}
        >
          <Link to="/projects">Projects</Link>
        </span>
        <span
          className={cn(
            " text-zinc-800 dark:text-zinc-400 transition-colors  rounded-full duration-200 ",
            pathname === "/about" &&
              "bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full"
          )}
        >
          <Link to="/about">About</Link>
        </span>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => window.open("https://github.com/mathan-dev-44")}
          className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <Github />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
