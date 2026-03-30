import { memo } from "react";
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
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#ffc820" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const KeySkills = () => {
  return (
    <motion.div
      className="
      grid gap-3 p-1
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-4
    "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {skills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <motion.div
            key={index}
            variants={badgeVariants}
            whileHover="hover"
            style={{ "--skill-color": skill.color }}
            className="
            group relative flex aspect-square w-full flex-col items-center justify-center gap-2
            rounded-2xl border bg-[#eff0f4]
            transition-shadow dark:bg-neutral-900
          "
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at center, color-mix(in srgb, var(--skill-color) 25%, transparent) 0%, transparent 70%)",
              }}
            />

            {/* Icon */}
            <motion.div
              variants={{ hover: { scale: 1.15 } }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative z-10"
            >
              <Icon className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 text-gray-400 transition-colors duration-300 group-hover:text-[color:var(--skill-color)]" />
            </motion.div>

            {/* Text */}
            <span className="relative z-10 text-xs sm:text-sm font-medium tracking-wide text-neutral-600 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default memo(KeySkills);
