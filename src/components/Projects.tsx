import { Card, CardContent } from "@/components/ui/card";
import { Database, FileText, ExternalLink, Briefcase, Smartphone } from "lucide-react";

const projects = [
  {
    title: "BESTKAAM",
    subtitle: "High-Traffic Job Portal",
    link: "https://bestkaam.com",
    image: "/bestkaam-dashboard.png",
    icon: Briefcase,
    gradient: "from-violet-500 to-purple-600",
    description: "Built and optimized BESTKAAM, a high-traffic job portal using Laravel, FilamentPHP, and Meilisearch.",
    features: ["Analytical dashboards", "Query optimization", "Real-time search"],
    technologies: ["Laravel", "FilamentPHP", "Meilisearch", "Redis"]
  },
  {
    title: "HelpRush",
    subtitle: "On-Demand Services",
    link: "https://helprush.in/",
    image: "/helprush-dashboard.png",
    icon: Smartphone,
    gradient: "from-emerald-500 to-teal-600",
    description: "On-demand service marketplace connecting users with verified providers.",
    features: ["Twilio call masking", "Razorpay payments", "Provider verification"],
    technologies: ["Laravel", "Twilio", "Razorpay"]
  },
  {
    title: "LMC Property Tax",
    subtitle: "Government Project",
    link: "https://lmclunglei.com",
    image: "/property-tax-dashboard.png",
    icon: Database,
    gradient: "from-blue-500 to-indigo-600",
    description: "Government project for Lunglei Municipal Corporation focused on digitizing property data.",
    features: ["Property profiling", "Tax generation", "Role management"],
    technologies: ["Laravel", "FilamentPHP", "Vue.js"]
  },
  {
    title: "School Fee System",
    subtitle: "Multi-tenant SaaS",
    image: "/school-fee-dashboard.png",
    icon: FileText,
    gradient: "from-orange-500 to-red-500",
    description: "Multi-tenant web app to automate fee collection for schools.",
    features: ["Multi-tenancy", "Automated invoicing", "Fee management"],
    technologies: ["Laravel", "Vue.js", "Quasar"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background - More vibrant in light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/60 via-white to-fuchsia-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 particles-bg opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="glass-card border-0 overflow-hidden group"
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Floating icon */}
                  <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-300">{project.subtitle}</p>
                  </div>
                </div>

                <CardContent className="pt-4 pb-5">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 text-xs rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
