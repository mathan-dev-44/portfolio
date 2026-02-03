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
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-stretch gap-20 p-4 md:p-8">
        <div className="flex-1 relative w-full lg:w-auto p-2">
          <div className="text-xs bg-zinc-100 dark:bg-gray-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
            <div className="size-2 rounded-full bg-indigo-700 font-medium animate-pulse" />
            Welcome to my FlowMatrix
          </div>
          <div className="flex flex-row gap-4 items-center my-4 lg:my-0 lg:block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight my-4 md:my-8 dark:text-zinc-300 text-zinc-700">
              Hello<span className="lg:hidden">,</span>
            </h1>

            <Title />
          </div>

          {/* Responsive positioning for floating elements */}
          <div className="px-3 py-2  hidden sm:block absolute top-12 left-18 sm:left-48 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
            React developer ⚛️
          </div>

          <div className="px-3 py-2  sm:block absolute top-24 right-4 sm:right-10 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000  ">
            <div className="flex w-full gap-2 items-center">
              <span>React Flow </span> <FlowIcon />{" "}
            </div>
          </div>

          {/* <div className="px-3 py-2 hidden sm:block absolute bottom-36 right-2 sm:right-20 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-wiggle duration-1000">
          Innovation
        </div> */}

          <div className="flex items-center justify-center md:justify-start">
            <div>
              <RotatingText
                texts={[
                  "Software Engineer",
                  "React Flow Explorer",
                  "NestJS Developer",
                  "User Interface & Experience Builder",
                ]}
                mainClassName={cn(
                  "px-2 sm:px-2 md:px-3 bg-gray-200 dark:bg-[#a6a9af]  text-black dark:text-white text-lg font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg",
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
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
          <div className="text-lg text-zinc-600 dark:text-zinc-400 my-6 md:my-10 font-bold">
            React Flow Explorer ⚛️ | Nest.js Developer 🚀
            <br />{" "}
            <span className="font-normal italic">
              Crafting user-friendly web apps with scalable design and efficient
              code ✨📱
            </span>
          </div>
        </div>

        <div className="flex-1 z-50 rounded-md  h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] flex w-full mt-8 lg:mt-0">
          <ReactFlowProvider>
            <FlowVector />
          </ReactFlowProvider>
        </div>
      </div>
      <div className="w-full p-4 md:p-8 mt-8">
        <div className="w-full  bg-[#eff0f4] dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            <div className="col-span-1 md:col-span-1 lg:col-span-2 dark:bg-black/50 bg-white/50 p-0 order-2 md:order-1">
              <Resume />
            </div>

            <div className="relative h-full   bg-white  dark:bg-gray-900 rounded-2xl border p-2 md:rounded-3xl md:p-3 col-span-1 md:col-span-2 lg:col-span-3 order-1 md:order-2">
              <div className="border-0.75  relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <div className="relative flex flex-1 flex-col gap-6">
                  <div className="flex w-full md:flex-row  items-center ">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg border border-gray-600 p-2">

                        <UserRound className="h-4 w-4 text-black dark:text-neutral-400" />
                      </div>

                      <div>
                        <p className="text-lg sm:text-xl relative z-20 mt-2 font-medium">
                          Mathan G
                        </p>

                        <p className="relative z-20 text-sm sm:text-base text-neutral-500 font-medium uppercase">
                          Software Engineer
                        </p>
                      </div>
                    </div>


                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <h3 className="pt-0.5 text-lg font-bold text-balance text-black md:text-4xl dark:text-white">
                      Building visual systems that turn complex logic into
                      intuitive workflows.
                    </h3>
                    <h2 className="text-sm/[1.125rem] pt-1 text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                      I build node-based workflows, schema mappers, and UI
                      builders that help teams configure and evolve systems
                      without manual complexity.
                    </h2>
                  </div>

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
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700">
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
