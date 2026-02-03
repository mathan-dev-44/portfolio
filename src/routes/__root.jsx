import { useCallback, useRef, useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import Navbar from "../reactComponents/navbar";
import DotGrid from "../reactComponents/reactGridBits/dotGrid/dotGridCanvas";
import useDarkMode from "../hooks/useThemehook";

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
        dotSize={1}
        gap={12}
        baseColor={updateColor !== "#3b82f6" ? "#ffffff" : "#000000"}
        activeColor={updateColor}
        proximity={80}
        shockRadius={200}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      >
        <div className=" relative z-10 w-full flex min-h-screen    ">
          <div className="w-[15%] "></div>
          <div className="w-[70%] homePage ">
            <Navbar handleToggleHoverColor={handleToggleHoverColor} />
            <div className="dot-grid__page">
              <Outlet />
            </div>
          </div>
          <div className="w-[15%]"></div>
        </div>
          <footer className="text-sm md:text-lg flex w-full h-full justify-center p-4 bg-[#eff0f4] dark:bg-[#141414]    dark:border-zinc-300 border-zinc-700 rounded-md   dark:text-white">
        © {new Date().getFullYear()} Mathan. All rights reserved.
      </footer>
      </DotGrid>
    </div>
  );
}
