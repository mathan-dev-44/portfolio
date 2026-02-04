import { createFileRoute } from "@tanstack/react-router";
import { memo } from "react";
import TextType from "../reactComponents/reactGridBits/EncryptText/textType";
import RotatingText from "../reactComponents/reactGridBits/RoatatingText/roatatingText";
import { cn } from "../lib/utils";
import { ReactFlowProvider } from "reactflow";
import FlowVector from "../reactComponents/flowComponents/flowVector";
import { UserRound } from "lucide-react";
import Resume from "../reactComponents/resume/Resume";
import KeySkills from "../reactComponents/skillSet/KeySkills";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 py-6 sm:py-10 ">
        {/* LEFT CONTENT */}
        <div className="flex-1 relative w-full p-2 sm:p-4 overflow-hidden">
          <div className="text-xs bg-zinc-100 dark:bg-gray-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
            <div className="size-2 rounded-full bg-indigo-700 font-medium animate-pulse" />
            Welcome to my FlowMatrix
          </div>
          {/* Headline */}
          <div className="mt-4 sm:mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-zinc-300 text-zinc-700">
                Hello,
              </h1>

              <div className="w-full lg:w-auto">
                <Title />
              </div>
            </div>
          </div>
          {/* Floating Tags (ALL screens, NO overlap) */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className="px-3 py-2 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
              React developer ⚛️
            </div>

            <div className="px-3 py-2 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000">
              <div className="flex w-full gap-2 items-center">
                <span>React Flow</span> <FlowIcon />
              </div>
            </div>
          </div>

          {/* Rotating Text */}
          {/* <div className="mt-5 flex flex-wrap items-center justify-start gap-2">
            <RotatingText
              texts={[
                "Software Engineer",
                "React Flow Explorer",
                "NestJS Developer",
                "User Interface & Experience Builder",
              ]}
              mainClassName={cn(
                "px-3 sm:px-4 bg-gray-200 dark:bg-[#a6a9af] text-black dark:text-white",
                "text-sm sm:text-base md:text-lg font-semibold overflow-hidden",
                "py-1 sm:py-1.5 md:py-2 justify-center rounded-lg",
                "[background:linear-gradient(to_bottom,var(--color-gray-100),var(--color-gray-200))]",
                "shadow-[inset_0_-1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-gray-300),_0_4px_8px_var(--color-gray-300)]",
                "dark:[background:linear-gradient(to_bottom,var(--color-neutral-700),var(--color-neutral-800))]",
                "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
              )}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div> */}
          {/* Description */}
          <div className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-6 sm:mt-10 font-bold leading-relaxed">
            React Flow Explorer ⚛️ | Nest.js Developer 🚀
            <br />
            <span className="font-normal italic">
              Crafting user-friendly web apps with scalable design and efficient
              code ✨📱
            </span>
          </div>
        </div>

        {/* RIGHT FLOW SECTION */}
        <div className="flex-1 z-50 rounded-md flex w-full">
          <div
            className="w-full rounded-2xl border  border-neutral-200/80
            shadow-md
            dark:border-neutral-800/80
            bg-white/40 dark:bg-black/20 backdrop-blur-sm overflow-hidden"
          >
            <div className="h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] w-full">
              <ReactFlowProvider>
                <FlowVector />
              </ReactFlowProvider>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="w-full mt-8 sm:mt-10 m-2">
        <div
          className="w-full bg-[#eff0f4] dark:bg-gray-900 rounded-2xl border border-neutral-200/80

            shadow-md
            dark:border-neutral-800/80 p-3 sm:p-5 md:p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full">
            {/* Resume */}
            <div className="lg:col-span-2 dark:bg-black/50 bg-white/50 p-2 sm:p-3 rounded-2xl ">
              <Resume />
            </div>

            {/* Profile + Skills */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl border p-2 sm:p-3 lg:col-span-3  border-neutral-200/80

            shadow-md
            dark:border-neutral-800/80">
              <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl p-4 sm:p-6 ">
                <div className="relative flex flex-col gap-6">
                  {/* Top */}
                  <div className="flex w-full items-center">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg border border-gray-600 p-2">
                        <UserRound className="h-4 w-4 text-black dark:text-neutral-400" />
                      </div>

                      <div>
                        <p className="text-lg sm:text-xl font-medium">
                          Mathan G
                        </p>
                        <p className="text-sm sm:text-base text-neutral-500 font-medium uppercase">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-balance text-black dark:text-white">
                      Building visual systems that turn complex logic into
                      intuitive workflows.
                    </h3>

                    <h2 className="text-sm sm:text-base text-black dark:text-neutral-400 leading-relaxed">
                      I build node-based workflows, schema mappers, and UI
                      builders that help teams configure and evolve systems
                      without manual complexity.
                    </h2>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Expertise</h3>
                    <KeySkills />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export const Title = memo(() => {
  return (
    <h1
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
        font-bold tracking-tight
        dark:text-zinc-300 text-zinc-700
        whitespace-nowrap
        leading-none
      "
    >
      <TextType
        text={["Im Mathan"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </h1>
  );
});

export const FlowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="6" height="6" fill="#6366f1" />
    <rect x="16" y="2" width="6" height="6" fill="#6366f1" />
    <rect x="2" y="16" width="6" height="6" fill="#6366f1" />
    <rect x="16" y="16" width="6" height="6" fill="#6366f1" />
    <line x1="5" y1="5" x2="19" y2="5" stroke="#6366f1" strokeWidth="2" />
    <line x1="5" y1="5" x2="5" y2="19" stroke="#6366f1" strokeWidth="2" />
    <line x1="19" y1="5" x2="19" y2="19" stroke="#6366f1" strokeWidth="2" />
    <line x1="5" y1="19" x2="19" y2="19" stroke="#6366f1" strokeWidth="2" />
  </svg>
);

Title.displayName = "Title";
