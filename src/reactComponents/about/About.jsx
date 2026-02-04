import React from "react";
import Resume from "../resume/Resume";
import KeySkills from "../skillSet/KeySkills";
import { UserRound } from "lucide-react";

const About = () => {
  return (
    <div>
      {" "}
      <div className="w-full">
        <div className="w-full p-3 sm:p-4 md:p-8 mt-2">
          <div className="w-full rounded-xl md:rounded-2xl border border-neutral-200 bg-white/80   p-3 sm:p-4 md:p-6 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950/60">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 w-full">
              {/* Resume */}
              <div className="lg:col-span-2 dark:bg-black/50 bg-white/50 rounded-xl overflow-hidden border border-gray-200  dark:border-neutral-800 order-1 lg:order-1">
                <Resume />
              </div>

              {/* About Card */}
              <div className="relative h-full bg-white dark:bg-neutral-950/60 rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-800 p-3 sm:p-4 md:p-6 lg:col-span-3 order-2 lg:order-2">
                <div className=" relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6  shadow-[0px_0px_5px_0px_#cfd9df] dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                  <div className="relative flex flex-1 flex-col gap-6">
                    {/* Header */}
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="rounded-lg border border-gray-600  p-2 shrink-0">
                          <UserRound className="h-4 w-4 text-black dark:text-neutral-400" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-lg sm:text-xl relative z-20 mt-1 font-medium truncate">
                            Mathan G
                          </p>

                          <p className="relative z-20 text-sm sm:text-base text-neutral-500 font-medium uppercase">
                            Software Engineer
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Intro */}
                    <div className="flex flex-col gap-2 text-left">
                      <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-balance text-black dark:text-white">
                        Building visual systems that turn complex logic into
                        intuitive workflows.
                      </h3>

                      <h2 className="text-sm sm:text-base text-black dark:text-neutral-400">
                        I build node-based workflows, schema mappers, and UI
                        builders that help teams configure and evolve systems
                        without manual complexity.
                      </h2>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        Expertise
                      </h3>
                      <KeySkills />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
