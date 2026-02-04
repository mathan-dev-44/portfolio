import { useCallback, useRef, useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../reactComponents/navbar";
import DotGrid from "../reactComponents/reactGridBits/dotGrid/dotGridCanvas";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [updateColor, setUpdateColor] = useState("#ffffff");
  const handleToggleHoverColor = useCallback((color) => {
    setUpdateColor(color);
  }, []);

  return (
    <div
      style={{ width: "100%" }}
      className=" bg-white dark:bg-black  min-h-screen   dark:text-white"
    >
      <DotGrid
        dotSize={0.2}
        gap={12}
        baseColor={updateColor !== "#3b82f6" ? "#ffffff" : "#000000"}
        activeColor={updateColor}
        proximity={80}
        shockRadius={200}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      >
        <div className="relative z-10 min-h-screen w-full">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 ">
            <Navbar handleToggleHoverColor={handleToggleHoverColor} />
            <div className="dot-grid__page">
              <Outlet />
            </div>
          </div>
        </div>
        <footer className="mt-10 text-sm md:text-lg flex w-full justify-center p-4 bg-[#eff0f4] dark:bg-[#141414] dark:border-zinc-300 border-zinc-700 rounded-md dark:text-white">
          © {new Date().getFullYear()} Mathan. All rights reserved.
        </footer>
      </DotGrid>
    </div>
  );
}
