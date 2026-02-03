import React from "react";
import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNestjs,
  SiRedis,
  SiGithub,
  SiVite,
  SiJavascript,
  SiGit,
} from "react-icons/si";

const KeySkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" }, // React cyan
    { name: "Vite", icon: SiVite, color: "#ffc820" }, // Vite purple
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, // JS yellow
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, // TS blue
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, // Tailwind teal
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" }, // Nest red
    { name: "Redis", icon: SiRedis, color: "#DC382D" }, // Redis red
    { name: "Git", icon: SiGit, color: "#F05032" }, // Git orange
  ];

  return (
    <motion.div
      className="flex flex-wrap gap-4 p-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <motion.div
            key={index}
            variants={badgeVariants}
            whileHover="hover"
            style={{ "--skill-color": skill.color }}
            className="group relative flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border bg-[#eff0f4] transition-shadow dark:bg-neutral-900"
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at center, color-mix(in srgb, var(--skill-color) 25%, transparent) 0%, transparent 70%)",
              }}
            />

            {/* Icon (animated, NOT the card) */}
            <motion.div
              variants={{ hover: { scale: 1.15 } }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative z-10"
            >
              <Icon className="h-12 w-12 text-gray-400 transition-colors duration-300 group-hover:text-[color:var(--skill-color)]" />
            </motion.div>

            {/* Skill name */}
            <span className="relative z-10 text-sm font-medium tracking-wide text-neutral-600 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default KeySkills;
