import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    color: "violet",
    skills: ["React.js", "Vue.js", "Tailwind CSS", "TypeScript", "Livewire", "Quasar"],
  },
  {
    name: "Backend",
    color: "cyan",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    name: "Scalable Systems",
    color: "pink",
    skills: ["BullMQ", "RabbitMQ", "Background Jobs", "Database Design", "Query Optimization", "Webhooks"],
  },
  {
    name: "DevOps & Tools",
    color: "emerald",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Meilisearch", "Payment Gateways"],
  },
];

const colorMap: Record<string, { dot: string; tag: string; tagHover: string }> = {
  violet: {
    dot: "bg-violet-500",
    tag: "hover:border-violet-500/40 hover:text-violet-300 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.12)]",
    tagHover: "text-violet-300",
  },
  cyan: {
    dot: "bg-cyan-500",
    tag: "hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]",
    tagHover: "text-cyan-300",
  },
  pink: {
    dot: "bg-pink-500",
    tag: "hover:border-pink-500/40 hover:text-pink-300 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.12)]",
    tagHover: "text-pink-300",
  },
  emerald: {
    dot: "bg-emerald-500",
    tag: "hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]",
    tagHover: "text-emerald-300",
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div className="aurora-blob aurora-blob-1 bottom-[10%] left-[-5%]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
          <span className="text-sm text-white/50 font-mono">05 —</span>
          <span className="text-sm text-white/70 font-medium">Skills</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-14">
          Tech <span className="gradient-text">Arsenal</span>
        </h2>

        <div className="space-y-10">
          {skillCategories.map((cat, catIdx) => {
            const colors = colorMap[cat.color] || colorMap.violet;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                  <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest">{cat.name}</h3>
                </div>

                {/* Skills cloud */}
                <div className="flex flex-wrap gap-2 pl-5">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIdx * 0.08 + i * 0.04 }}
                      className={`px-4 py-2 text-sm rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 cursor-default transition-all duration-300 ${colors.tag}`}
                      style={{
                        '--float-duration': `${3 + Math.random() * 3}s`,
                        '--float-delay': `${Math.random() * 2}s`,
                      } as React.CSSProperties}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
