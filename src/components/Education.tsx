import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section id="education" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
          <span className="text-sm text-white/50 font-mono">04 —</span>
          <span className="text-sm text-white/70 font-medium">Education</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-14">
          Academic <span className="gradient-text">Background</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bento-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-wider">2015 – 2019</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                University Institute of Engineering and Technology
              </h3>
              <p className="text-violet-400 font-medium text-sm mb-3">Bachelor of Technology (B.Tech)</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Kanpur — Completed Bachelor's degree in Engineering, gaining comprehensive
                technical knowledge and problem-solving skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bento-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600">
                  <School className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-wider">Senior Secondary</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Halim Muslim English School
              </h3>
              <p className="text-cyan-400 font-medium text-sm mb-3">XII — CBSE Board</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Kanpur — Completed Senior Secondary Education with a strong
                academic foundation in science and mathematics.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
