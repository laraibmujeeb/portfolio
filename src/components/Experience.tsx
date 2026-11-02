import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Sr. Web Developer",
    company: "Bestkaam",
    location: "Puducherry",
    period: "Oct 2025 - Jan 2026",
    description: "Designed and developed scalable backend services using Node.js, Express.js, and Laravel. Built REST APIs for job listings, analytics, and high-performance search.",
    achievements: [
      "Built REST APIs with Node.js/Express.js and Laravel",
      "Integrated Redis caching for traffic spikes",
      "Optimized PostgreSQL and MySQL queries",
      "Developed background jobs with message queues"
    ],
    technologies: ["Node.js", "Express.js", "Laravel", "PostgreSQL", "Redis", "Meilisearch"]
  },
  {
    title: "Sr. Web Developer",
    company: "Helprush",
    location: "Srinagar",
    period: "May 2025 - Oct 2025",
    description: "Developed backend APIs for an on-demand service marketplace. Implemented booking workflows, provider onboarding, and message queues.",
    achievements: [
      "Built Node.js/Express.js backend services",
      "Integrated Twilio for call masking",
      "Implemented Razorpay payment processing",
      "Designed MongoDB and PostgreSQL schemas"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Twilio", "Razorpay"]
  },
  {
    title: "Full Stack Developer",
    company: "Lailen",
    location: "Aizawl",
    period: "Nov 2024 - Apr 2025",
    description: "Built REST APIs using Node.js/Express.js and Laravel. Implemented authentication, authorization, and queue-based background processing.",
    achievements: [
      "Developed clean, responsive UIs with React.js",
      "Built authentication/authorization systems",
      "Implemented queue-based background jobs",
      "Created admin panels with Laravel Filament"
    ],
    technologies: ["Node.js", "Express.js", "React.js", "Laravel", "Tailwind CSS"]
  },
  {
    title: "Web Developer",
    company: "Bracketworks",
    location: "Dubai",
    period: "Nov 2022 - Oct 2024",
    description: "Developed scalable backend services and REST APIs. Designed PostgreSQL schemas and implemented async job processing.",
    achievements: [
      "Built REST APIs with Node.js and Laravel",
      "Designed PostgreSQL database schemas",
      "Implemented async message queue processing",
      "Worked with React frontend teams"
    ],
    technologies: ["Node.js", "Express.js", "Laravel", "PostgreSQL", "React"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="aurora-blob aurora-blob-2 top-[20%] right-[-10%]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
          <span className="text-sm text-white/50 font-mono">03 —</span>
          <span className="text-sm text-white/70 font-medium">Career</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
          Work <span className="gradient-text">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Timeline gradient line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="timeline-dot" style={{ top: '1.5rem' }} />

                {/* Card */}
                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-violet-400 font-medium">@ {exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end text-xs text-white/30 font-mono gap-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/40 text-sm mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-1.5 text-sm text-white/35 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-violet-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag-glass">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
