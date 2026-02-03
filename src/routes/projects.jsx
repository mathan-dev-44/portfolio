import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

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

function RouteComponent() {
  return (
    <div className="m-10 p-2 h-[80%]">
      <section className="m-10 max-w-5xl">
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
              rounded-xl
              border
              bg-white
              p-6
              dark:bg-neutral-900
            "
            >
              {/* Header */}
              <div className="flex flex-wrap items-baseline gap-2 p-2">
                <h3 className="text-base font-semibold text-black dark:text-white">
                  {project.title}
                </h3>

                <span className="text-sm text-neutral-500">
                  | {project.tech.join(", ")}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />

              {/* Body */}
              <ul className="space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
                {project.points.map((point, i) => (
                  <li key={i} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
