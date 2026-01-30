
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Sr. Web Developer",
    company: "Bestkaam",
    location: "Puducherry",
    period: "Oct 2025 - Jan 2026",
    description: "Designed and developed scalable backend services using Node.js, Express.js, and Laravel. Built REST APIs for job listings, analytics, and high-performance search with Meilisearch.",
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
    description: "Developed backend APIs for an on-demand service marketplace. Implemented booking workflows, provider onboarding, and integrated message queues for async processing.",
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
    description: "Built REST APIs using Node.js/Express.js and Laravel. Implemented authentication, authorization, and queue-based background processing for email notifications.",
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
    description: "Developed scalable backend services and REST APIs. Designed PostgreSQL schemas and implemented async job processing using message queues for high-volume tasks.",
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
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background - More vibrant in light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-orange-500 transform md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transform -translate-x-1.5 md:-translate-x-2 mt-6 animate-pulse-glow" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="glass-card-strong glow-on-hover border-0">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                          <p className="text-violet-600 dark:text-violet-400 font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{exp.description}</p>

                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-fuchsia-500 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
