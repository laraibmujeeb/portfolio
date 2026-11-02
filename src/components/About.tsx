import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Zap, Code2 } from "lucide-react";

const techMarquee = [
  "Node.js", "Express.js", "React.js", "Laravel", "PostgreSQL", "MongoDB",
  "Redis", "TypeScript", "Tailwind CSS", "Docker", "AWS", "REST APIs",
  "Node.js", "Express.js", "React.js", "Laravel", "PostgreSQL", "MongoDB",
  "Redis", "TypeScript", "Tailwind CSS", "Docker", "AWS", "REST APIs",
];

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6 animate-fade-in">
          <span className="text-sm text-white/50 font-mono">01 —</span>
          <span className="text-sm text-white/70 font-medium">About</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-14">
          Who I <span className="gradient-text">Am</span>
        </h2>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Main bio card - spans 2 cols */}
          <div className="bento-card bento-span-2 flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/40 to-cyan-500/20 blur-sm" />
                <Avatar className="w-28 h-28 rounded-2xl relative border border-white/10">
                  <AvatarImage src="/lovable-uploads/laraib.png" alt="Laraib Mujeeb" className="object-cover rounded-2xl" />
                  <AvatarFallback className="text-2xl bg-violet-900/50 text-violet-300 rounded-2xl">LM</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white/60 leading-relaxed mb-4">
                I'm a <span className="text-white font-medium">Full Stack Developer</span> with over 3+ years
                of experience building robust, scalable, and user-centric web applications.
              </p>
              <p className="text-white/45 leading-relaxed mb-4">
                I specialize in <span className="text-violet-400">Node.js</span> and{" "}
                <span className="text-cyan-400">Laravel</span> for backend, with strong expertise in
                building scalable REST APIs, database design, and frontend frameworks like{" "}
                <span className="text-pink-400">React.js</span>.
              </p>
              <p className="text-white/35 leading-relaxed">
                Throughout my career, I've worked on diverse projects including high-traffic job portals,
                on-demand service marketplaces, multi-tenant SaaS applications, and government systems.
              </p>
            </div>
          </div>

          {/* Location card */}
          <div className="bento-card flex flex-col justify-between min-h-[160px]">
            <MapPin className="h-5 w-5 text-violet-400 mb-3" />
            <div>
              <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Based in</p>
              <p className="text-white font-semibold text-lg">India</p>
              <p className="text-white/40 text-sm">Open to remote work</p>
            </div>
          </div>

          {/* Experience counter */}
          <div className="bento-card flex flex-col justify-between min-h-[160px]">
            <Zap className="h-5 w-5 text-cyan-400 mb-3" />
            <div>
              <p className="text-5xl font-black gradient-text leading-none">3+</p>
              <p className="text-white/40 text-sm mt-2">Years of building</p>
              <p className="text-white/40 text-sm">production software</p>
            </div>
          </div>

          {/* Tech marquee card - spans 2 cols */}
          <div className="bento-card bento-span-2 overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4 text-pink-400" />
              <p className="text-xs text-white/30 uppercase tracking-wider font-mono">Tech Stack</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[rgba(255,255,255,0.02)] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[rgba(255,255,255,0.02)] to-transparent z-10" />
              <div className="flex gap-3 animate-marquee whitespace-nowrap">
                {techMarquee.map((tech, i) => (
                  <span key={i} className="tag-glass shrink-0">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
