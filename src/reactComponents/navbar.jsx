import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useThemehook";
import { Sun, Moon, Github, Menu, X } from "lucide-react";
import { SiReact } from "react-icons/si";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "../lib/utils";

export default function Navbar({ handleToggleHoverColor }) {
  const { toggleDarkMode, isDarkMode, hoverColor } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { label: "All", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ];

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

  // ✅ close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-6 sm:top-8 z-50 w-full">
      {/* NAV ONLY (sticky height never changes = no stuck/jump) */}
      <nav
        className={cn(
          `
            w-full
            flex
            items-center
            justify-between
            gap-3
            px-4
            sm:px-6
            py-3
            sm:py-4
            transition-all
            duration-300
            rounded-3xl
            border
            backdrop-blur-xl
          `,
          isScrolled
            ? `
              border-neutral-200/60
              bg-white/75
              shadow-md
              dark:border-neutral-800/60
              dark:bg-neutral-950/55
            `
            : `
              border-neutral-200/30
              bg-white/40
              shadow-sm
              dark:border-neutral-800/40
              dark:bg-neutral-950/30
            `,
        )}
      >
        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-2xl
              border border-neutral-200/60
              bg-white/50
              shadow-sm
              backdrop-blur-xl
              dark:border-neutral-800/60
              dark:bg-neutral-900/30
            "
          >
            <SiReact
              color="#53C1DE"
              size={22}
              className="animate-spin [animation-duration:6s] [animation-timing-function:linear]"
            />
          </div>

          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
              Mathan
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Software Engineer
            </p>
          </div>
        </div>

        {/* CENTER: LINKS (DESKTOP ONLY) */}
        <div
          className="
            hidden
            sm:flex
            items-center
            gap-1
            rounded-2xl

            bg-white/40
            px-2
            py-2
            shadow-sm
            backdrop-blur-xl

            dark:bg-neutral-900/20
          "
        >
          {navLinks.map((item) => {
            const active = pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  `
                    relative
                    rounded-2xl
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    transition
                    duration-200
                  `,
                  active
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-2">
          {/* Github */}
          <button
            onClick={() => window.open("https://github.com/mathan-dev-44")}
            className="
              h-10 w-10 rounded-2xl
              border border-neutral-200/60
              bg-white/50
              shadow-sm
              backdrop-blur-xl
              transition
              hover:bg-neutral-100
              dark:border-neutral-800/70
              dark:bg-neutral-900/30
              dark:hover:bg-neutral-800/60
              flex items-center justify-center
            "
          >
            <Github className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="
              h-10 w-10 rounded-2xl
              border border-neutral-200/60
              bg-white/50
              shadow-sm
              backdrop-blur-xl
              transition
              hover:bg-neutral-100
              dark:border-neutral-800/70
              dark:bg-neutral-900/30
              dark:hover:bg-neutral-800/60
              flex items-center justify-center
            "
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
            )}
          </button>

          {/* Hamburger ONLY MOBILE */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="
              sm:hidden
              h-10 w-10 rounded-2xl
              border border-neutral-200/60
              bg-white/50
              shadow-sm
              backdrop-blur-xl
              transition
              hover:bg-neutral-100
              dark:border-neutral-800/70
              dark:bg-neutral-900/30
              dark:hover:bg-neutral-800/60
              flex items-center justify-center
            "
          >
            {open ? (
              <X className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
            ) : (
              <Menu className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
            )}
          </button>
        </div>
      </nav>

      {/* ✅ MOBILE DROPDOWN (outside nav = no sticky jump) */}
      <div
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 mt-3" : "max-h-0",
        )}
      >
        <div
          className="
            rounded-3xl
            border
            border-neutral-200/60
            bg-white/80
            shadow-lg
            backdrop-blur-xl
            dark:border-neutral-800/60
            dark:bg-neutral-950/70
            px-3
            py-3
            space-y-2
          "
        >
          {navLinks.map((item) => {
            const active = pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  `
                    block
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition
                  `,
                  active
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                    : "text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800/60",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
