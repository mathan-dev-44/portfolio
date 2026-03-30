import { useEffect, useRef } from "react";
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import Lenis from "lenis";
import Navbar from "../reactComponents/navbar";
import DotBackground from "../reactComponents/DotBackground";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, smoothTouch: true, duration: 1.4 });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf); }
    rafId = requestAnimationFrame(raf);

    return () => { cancelAnimationFrame(rafId); lenis.destroy(); lenisRef.current = null; };
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    lenisRef.current
      ? lenisRef.current.scrollTo(0, { immediate: true })
      : window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="bg-white dark:bg-black min-h-screen dark:text-white">
      <DotBackground />

      <div className="relative z-10 min-h-screen w-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-10 text-sm md:text-lg flex w-full justify-center p-4 bg-[#eff0f4] dark:bg-[#141414] dark:border-zinc-300 border-zinc-700 rounded-md dark:text-white">
        © {new Date().getFullYear()} Mathan G. All rights reserved.
      </footer>
    </div>
  );
}
