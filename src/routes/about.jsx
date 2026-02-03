import { createFileRoute } from "@tanstack/react-router";
import Resume from "../reactComponents/resume/Resume";
import KeySkills from "../reactComponents/skillSet/KeySkills";

import { UserRound } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="w-full p-4 md:p-8 mt-2 ">
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
    </div>
  );
}
