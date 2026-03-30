import React from "react";
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
  SiVercel,
  SiGooglegemini,
} from "react-icons/si";

// Zustand has no Simple Icon — bold Z path
const ZustandIcon = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M2 3h20v5L8 16h14v5H2v-5l14-8H2z" />
  </svg>
);

// Monaco Editor — code bracket icon
const MonacoIcon = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

export const projects = [
  {
    title: "Torus Low Code Platform",
    tech: ["React", "Vite", "React Flow", "NestJS", "Redis"],
    points: [
      "Developed a low-code workflow automation platform with a node-based visual editor for designing and managing complex workflows.",
      "Designed reusable, schema-driven UI components to support configurable and extensible workflows.",
      `Built a WYSIWYG, low-code UI builder, allowing users to visually compose and position components using
grid-based layouts, accelerating UI assembly by 30%`,

      "Implemented interactive drag-and-drop functionality and parent–child relationships using React Flow.",
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
  {
    title: "JSON Drfit",
    link: "https://json-drift.vercel.app/",
    image: "/drift.jpg",
    tech: ["React", "React Flow", "Lodash", "monaco-editor", "Zustand"],
    points: [
      "Transforms raw JSON into an interactive node graph users can visually navigate nested structure",
      "Built a live-synced Monaco code editor with custom syntax highlighting and validating Json",
      "Designed a reactive multi-panel architecture using Zustand stores with adaptive layouts and clean separation between UI state and data logic.",
      `Designed a 31-theme system where every element canvas, editor, nodes, and icons adapts to the selected theme,persisted across sessions`,
    ],
  },
  {
    title: "Ai-Sdk-Chat-Bot",
    tech: ["React", "AiSdk", "NestJS", "TypeScript", "gemini-2.5-flash"],
    link: "https://ai-sdk-chat-beta.vercel.app/",
    image: "/aisdk.jpg",
    points: [
      "A full-stack AI chat application built with the Vercel AI SDK v5, featuring a React frontend and NestJS backend powered by Google Gemini.",
      `Streaming chat responses via streamText with pipeUIMessageStreamToResponse
Multi-step tool calling with tool response handling and dynamic message updates.`,
      "Rich AI-rendered UI elements: reasoning, sources, artifacts, canvas, code blocks, chain-of-thought, web preview, and more",
    ],
  },
];

export const techMeta = {
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
  AiSdk: { icon: SiVercel, color: "#888888", bg: "bg-neutral-500/15" },
  Zustand: { icon: ZustandIcon, color: "#F6A623", bg: "bg-amber-500/15" },
  "monaco-editor": { icon: MonacoIcon, color: "#007ACC", bg: "bg-blue-500/15" },
  "gemini-2.5-flash": {
    icon: SiGooglegemini,
    color: "#4285F4",
    bg: "bg-blue-500/15",
  },
};

const Project = () => {
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
                React , React Flow
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{ y: -6 }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: index * 0.07,
              }}
              viewport={{ once: true, amount: 0.1 }}
              style={{ willChange: "transform, opacity" }}
              className="
    group
    relative
    overflow-hidden
    rounded-2xl
    border
    border-neutral-200
    bg-white/95
    p-5
    shadow-sm
    transition-shadow duration-300
    hover:shadow-md
    dark:border-neutral-800
    dark:bg-neutral-950/90
    sm:p-6
  "
            >
              {/* glow layer */}
              <div
                className="
                group
                cursor-pointer
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

              {project.image && (
                <div className="relative mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04]"
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-80" />

                  {/* optional link badge */}
                  {project.link && (
                    <div className="absolute right-3 top-3 rounded-full bg-white/80 px-2 py-1 text-xs font-medium text-neutral-800 backdrop-blur dark:bg-black/50 dark:text-white">
                      <a
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-1"
                      >
                        Visit ↗
                      </a>
                    </div>
                  )}
                </div>
              )}
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
              <div className="relative z-10 mt-6 h-0.5 w-0 rounded-full bg-neutral-900 transition-all duration-300 group-hover:w-full dark:bg-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
