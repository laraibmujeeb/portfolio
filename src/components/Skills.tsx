
import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  const skills = {
    "Frontend": ["React.js", "Vue.js", "Tailwind CSS", "TypeScript", "Livewire", "Quasar"],
    "Backend": ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Redis"],
    "Scalable Systems": ["Message Queues (BullMQ/RabbitMQ)", "Background Jobs", "Database Design", "Query Optimization", "Webhooks"],
    "DevOps & Tools": ["Git", "Docker", "AWS", "CI/CD", "Meilisearch", "Payment Gateways"]
  };

  const skillColors: Record<string, string> = {
    "Frontend": "from-violet-500 to-purple-600",
    "Backend": "from-emerald-500 to-teal-600",
    "Scalable Systems": "from-fuchsia-500 to-pink-600",
    "DevOps & Tools": "from-orange-500 to-red-500"
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background - More vibrant in light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100/60 via-white to-violet-100/60 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 particles-bg opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300 mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <Card
              key={category}
              className="glass-card glow-on-hover border-0 overflow-hidden group"
            >
              {/* Gradient header */}
              <div className={`h-1 bg-gradient-to-r ${skillColors[category] || 'from-violet-500 to-fuchsia-500'}`} />

              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillColors[category] || 'from-violet-500 to-fuchsia-500'}`} />
                  <span className="text-gray-800 dark:text-gray-200">{category}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:text-violet-700 dark:hover:text-violet-300 transition-all cursor-default hover:scale-105 hover:shadow-md"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
