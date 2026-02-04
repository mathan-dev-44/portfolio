import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  SiReact,
  SiVite,
  SiNestjs,
  SiRedis,
  SiReactrouter,
  SiTypescript,
  SiJavascript,
  SiLodash,
} from "react-icons/si";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

const projects = [
  {
    title: "Torus Low Code Platform",
    tech: ["React", "Vite", "React Flow", "NestJS", "Redis"],
    points: [
      "Developed a low-code workflow automation platform with a node-based visual editor for designing and managing complex workflows.",
      "Designed reusable, schema-driven UI components to support configurable and extensible workflows.",
    ],
  },
  {
    title: "Node-Based API Schema Mapper",
    tech: ["React", "React Flow", "Lodash"],
    points: [
      "Built a visual, node-based JSON schema mapper for designing and editing OpenAPI request and response schemas.",
      "Used Lodash to compare new and existing schemas for validating changes and safely merging schema updates.",
      "Implemented edge-level validation to ensure accurate request–response field mapping across connected nodes.",
      "Built reusable components for schema visualization to accelerate future workflow development.",
    ],
  },
];

const techMeta = {
  React: { icon: SiReact, color: "#61DAFB", bg: "bg-sky-500/15" },
  Vite: { icon: SiVite, color: "#FFC820", bg: "bg-yellow-500/15" },
  NestJS: { icon: SiNestjs, color: "#E0234E", bg: "bg-rose-500/15" },
  Redis: { icon: SiRedis, color: "#DC382D", bg: "bg-red-500/15" },
  "React Flow": {
    icon: SiReactrouter,
    color: "#7C3AED",
    bg: "bg-violet-500/15",
  },
  TypeScript: { icon: SiTypescript, color: "#3178C6", bg: "bg-blue-500/15" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E", bg: "bg-yellow-500/15" },
  Lodash: { icon: SiLodash, color: "#3492FF", bg: "bg-blue-500/15" },
};

function RouteComponent() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-neutral-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600" />
            Featured Projects
          </div>

          {/* Subtitle CARD */}
          <div className="mt-5 rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/40 sm:p-6">
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
              A few projects I built with{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                React Flow
              </span>
              ,{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                NestJS
              </span>
              , and workflow-driven systems — focused on{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                clean UI
              </span>
              ,{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                scalability
              </span>
              , and{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                performance
              </span>
              .
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-neutral-200
                bg-white/80
                p-5
                shadow-sm
                backdrop-blur-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
                dark:border-neutral-800
                dark:bg-neutral-950/60
                sm:p-6
              "
            >
              {/* glow layer */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.18), transparent 55%)",
                }}
              />

              {/* Title */}
              <h3 className="relative z-10 text-base font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-lg">
                {project.title}
              </h3>

              {/* Tech chips */}
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => {
                  const meta = techMeta[t] || null;
                  const Icon = meta?.icon;

                  return (
                    <span
                      key={t}
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-neutral-200
                        bg-neutral-50
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-neutral-700
                        shadow-[0_1px_0_rgba(0,0,0,0.03)]
                        transition
                        hover:scale-[1.02]
                        dark:border-neutral-800
                        dark:bg-neutral-900
                        dark:text-neutral-200
                        ${meta?.bg ?? ""}
                      `}
                    >
                      {/* Icon Circle */}
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full"
                        style={{
                          background: meta?.color
                            ? `color-mix(in srgb, ${meta.color} 18%, transparent)`
                            : "rgba(0,0,0,0.08)",
                        }}
                      >
                        {Icon ? (
                          <Icon
                            className="h-3.5 w-3.5"
                            style={{ color: meta.color }}
                          />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-neutral-400" />
                        )}
                      </span>

                      {t}
                    </span>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="relative z-10 my-5 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

              {/* Points */}
              <ul className="relative z-10 space-y-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-[15px]">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom hover line */}
              <div className="relative z-10 mt-6 h-[2px] w-0 rounded-full bg-neutral-900 transition-all duration-300 group-hover:w-full dark:bg-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
