import { ExternalLink, Briefcase, Smartphone, Database, FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "BESTKAAM",
    subtitle: "High-Traffic Job Portal",
    link: "https://bestkaam.com",
    image: "/bestkaam-dashboard.png",
    icon: Briefcase,
    gradient: "from-violet-600 to-indigo-600",
    description: "Built and optimized BESTKAAM, a high-traffic job portal with scalable REST APIs, Redis caching, and Meilisearch integration for lightning-fast search.",
    technologies: ["Node.js", "Express.js", "Laravel", "PostgreSQL", "Meilisearch", "Redis"]
  },
  {
    title: "HelpRush",
    subtitle: "On-Demand Services",
    link: "https://helprush.in/",
    image: "/helprush-dashboard.png",
    icon: Smartphone,
    gradient: "from-cyan-600 to-teal-600",
    description: "On-demand service marketplace with async message queues, booking workflows, Twilio call masking, and Razorpay payment processing.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Twilio", "Razorpay"]
  },
  {
    title: "LMC Property Tax",
    subtitle: "Government Project",
    link: "https://lmclunglei.com",
    image: "/property-tax-dashboard.png",
    icon: Database,
    gradient: "from-blue-600 to-violet-600",
    description: "Government project for digitizing property data with automated tax generation, background job processing, and comprehensive reporting.",
    technologies: ["Node.js", "Express.js", "Laravel", "PostgreSQL"]
  },
  {
    title: "School Fee System",
    subtitle: "Multi-tenant SaaS",
    image: "/school-fee-dashboard.png",
    icon: FileText,
    gradient: "from-pink-600 to-rose-600",
    description: "Multi-tenant web app with queue-based background jobs for invoice generation, payment reminders, and notification systems.",
    technologies: ["Node.js", "Express.js", "React.js", "Laravel"]
  }
];

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
              <span className="text-sm text-white/50 font-mono">02 —</span>
              <span className="text-sm text-white/70 font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Scroll controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.08] disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.08] disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="horizontal-scroll -mx-6 px-6"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="w-[85vw] md:w-[550px] lg:w-[600px] group"
              >
                <div className="glass-card overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-52 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-[#06060f]/40 to-transparent" />

                    {/* Icon badge */}
                    <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Title on image */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <ExternalLink className="h-3.5 w-3.5 text-white" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-white/50">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-white/45 text-sm leading-relaxed mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tag-glass">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
