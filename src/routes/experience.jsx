import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

const experienceData = [
  {
    company: "Torus Innovations",
    year: "Oct 2023 – Apr 2026",
    logo: (
      <svg
        className="w-full h-full"
        viewBox="0 0 46 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_930_1065)">
          <path
            d="M27.6127 12.9658C23.6683 19.2637 23.1462 25.5314 23.1593 28.8276C22.9984 26.1128 22.1901 19.292 18.5825 13.1093C17.8415 11.8388 16.0789 9.06549 12.9933 6.36208C8.05346 2.03322 2.76931 0.558806 0 0H0.190858C5.04464 0.534264 8.95162 1.61412 11.7041 2.55427C15.7364 3.93052 20.0364 5.44647 24.2203 9.25428C25.7733 10.6683 26.8923 12.0162 27.6127 12.9658Z"
            fill="#0736C4"
          />
          <path
            d="M34.8312 5.17462C34.8499 5.15951 34.8667 5.1463 34.8854 5.13308C34.0004 4.73475 32.6999 4.1816 31.1001 3.61336C28.153 2.56937 23.7146 1.29507 13.2343 0.511609C9.81566 0.256749 5.39038 0.0207664 0.19043 0H45.8616C44.4433 0.337927 39.6793 1.58014 34.8312 5.17462Z"
            fill="#FFC723"
          />
          <path
            d="M34.8854 5.13309C34.8667 5.1463 34.8499 5.15952 34.8312 5.17462C34.7226 5.25391 34.6122 5.33697 34.5 5.42382C34.412 5.49178 34.3222 5.55974 34.2324 5.63148C34.1108 5.72587 33.9891 5.82404 33.8675 5.92221C33.8058 5.97129 33.744 6.02227 33.6823 6.07324C32.8795 6.73776 32.0282 7.51367 31.1712 8.41041C29.9063 9.7338 28.8977 11.0402 28.1044 12.2126C28.0501 12.2918 27.9977 12.3692 27.9472 12.4466C27.8312 12.6241 27.7189 12.7959 27.6122 12.9658C26.8918 12.0162 25.7729 10.6683 24.2198 9.25428C20.0359 5.44647 15.736 3.93052 11.7037 2.55427C8.95119 1.61412 5.04421 0.534264 0.19043 0C5.39038 0.0207664 9.81566 0.256749 13.2343 0.511609C23.7146 1.29507 28.153 2.56937 31.1001 3.61336C32.6999 4.18161 34.0004 4.73475 34.8854 5.13309Z"
            fill="#00BFFF"
          />
          <path
            d="M45.8354 0.00561523C43.6219 0.536103 33.7459 3.16966 27.6122 12.9658C23.6678 19.2636 23.1458 25.5313 23.1589 28.8275C23.142 28.5349 23.1158 28.1932 23.0803 27.8081C22.9156 25.7163 22.5358 23.2357 21.7368 20.5323C21.3869 19.3543 20.9958 18.2574 20.586 17.2493H20.5842C20.0397 15.8731 19.3791 14.476 18.582 13.1111C19.5625 11.7821 21.1156 9.90743 23.361 8.04978C27.4195 4.69128 31.3789 3.34712 34.7844 2.22574C37.3011 1.39697 40.8862 0.456813 45.3302 0.0641388L45.8354 0.00750309V0.00561523Z"
            fill="#2AE38F"
          />
        </g>
        <defs>
          <clipPath id="clip0_930_1065">
            <rect width="45.8621" height="28.8276" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    points: [
      "Developed full-stack applications using React and TypeScript on the frontend and NestJS on the backend.",
      `Built node-based workflow editors using React Flow, enabling users to visually model complex workflows
with custom nodes, edges, and grouping, reducing workflow configuration time by 40%`,
      "Designed reusable, schema-driven UI components to support configurable and extensible workflow systems.",
      `Develop node-based workflow components for SQL and NoSQL database schema creation using tables/collections as
nodes and relationships as edges, reducing schema design iteration cycles by 45%.`,
      "Implemented interactive drag-and-drop functionality and parent–child relationships using React Flow.",
      ` Built a WYSIWYG, low-code UI builder, allowing users to visually compose and position components using
grid-based layouts, accelerating UI assembly by 30%.
`,
      ` Built a real-time node and component property editors, enabling instant updates to layout and behavior,
improving feedback loops and developer productivity.
`,
      `Built OpenAPI-based JSON schema mapping and nested JSON visualization/editors to support configurable,
workflow-based systems`,

      "Worked on scalable, multi-tenant backend services with proper API versioning and tenant isolation.",
      "Ensured strong frontend–backend contracts through consistent API design and validation.",
    ],
  },
];

function RouteComponent() {
  return (
    <div className="w-full px-4 sm:px-3  py-10">
      <div className="mx-auto w-full">
        <div className="relative  w-full space-y-8 sm:space-y-10">
          {/* Vertical line */}
          {/* <div className="absolute left-[18px] top-0 h-full w-px bg-neutral-200 dark:bg-neutral-800" /> */}

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative  lg:pl-12 sm:pl-0"
            >
              {/* Timeline dot */}
              {/* <div className="absolute left-[10px] top-7 z-20 h-4 w-4 rounded-full border-2 border-neutral-900 bg-white dark:border-neutral-200 dark:bg-neutral-900" /> */}

              {/* Card */}
              <div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950/60 sm:p-6">
                {/* HEADER */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  {/* Left side: company + logo */}
                  <div className="flex items-start gap-3">
                    {/* Logo box */}
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                      <div className="h-6 w-6">{exp.logo}</div>
                    </div>

                    {/* Company name */}
                    <div>
                      <h4 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-lg">
                        {exp.company}
                      </h4>

                      {/* Mobile year */}
                      <div className="mt-0.5 text-sm font-medium text-neutral-500 sm:hidden">
                        {exp.year}
                      </div>
                    </div>
                  </div>

                  {/* Desktop year */}
                  <div className="hidden whitespace-nowrap text-sm font-medium text-neutral-500 sm:block">
                    {exp.year}
                  </div>
                </div>

                {/* Points */}
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-[15px]">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
