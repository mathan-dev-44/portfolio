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

import Experience from "../reactComponents/experience/Experience";
import Project from "../reactComponents/projectSection/Project";
import About from "../reactComponents/about/About";
import { Briefcase, FolderKanban, User } from "lucide-react";

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
      {/* EXPERIENCE SECTION */}
      <div>
        <div className="w-full flex items-center justify-center ">
          <div className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm sm:text-base font-semibold tracking-wide text-neutral-900 dark:text-white border border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-950/50 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] overflow-hidden">
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-cyan-400/10 to-pink-500/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.7)]" />
            EXPERIENCE{" "}
            <span className="text-purple-500 dark:text-purple-300">
              {" "}
              <Briefcase className="h-5 w-5" />
            </span>
          </div>
        </div>
        <Experience />
      </div>
      {/* PROJECT SECTION */}
      <div>
        <div className="w-full flex items-center justify-center  mb-6 sm:mb-8">
          <div className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm sm:text-base font-semibold tracking-wide text-neutral-900 dark:text-white border border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-950/50 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] overflow-hidden">
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-cyan-400/10 to-pink-500/20 flex items-center" />
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.7)]" />
            <span> PROJECT{" "}</span>
            <span className="text-purple-500 dark:text-purple-300">
              {" "}
              <FolderKanban className="h-5 w-5" />{" "}
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white/80  shadow-sm backdrop-blur-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950/60 ">
          <Project />
        </div>
      </div>
      {/* ABOUT SECTION */}
      <div className="w-full">
        <div className="w-full rounded-2xl p-3 sm:p-5 md:p-6">
          <div className="w-full flex items-center justify-center">
            <div className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm sm:text-base font-semibold tracking-wide text-neutral-900 dark:text-white border border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-950/50 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] overflow-hidden">
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-cyan-400/10 to-pink-500/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.7)]" />
              ABOUT{" "}
              <span className="text-purple-500 dark:text-purple-300">
                {" "}
                <User className="h-5 w-5" />
              </span>
            </div>
          </div>

          <About />
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
