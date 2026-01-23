
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient - More vibrant in light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/80 via-white to-fuchsia-100/80 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Who I Am
          </h2>
        </div>

        <Card className="glass-card-strong glow-on-hover border-0">
          <CardContent className="pt-8 pb-8">
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              <p className="animate-slide-up">
                I'm a <span className="font-semibold text-violet-600 dark:text-violet-400">Full Stack Developer</span> with over 3+ years of experience building robust, scalable, and user-centric web applications.
              </p>
              <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                I specialize in <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">PHP (Laravel)</span> for backend development and have strong expertise in JavaScript frameworks like <span className="font-semibold text-orange-500 dark:text-orange-400">React.js</span> and <span className="font-semibold text-emerald-500 dark:text-emerald-400">Vue.js</span> for frontend.
              </p>
              <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Throughout my career, I've worked on diverse projects including high-traffic job portals, on-demand service marketplaces, multi-tenant SaaS applications, and government systems.
              </p>
              <p className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                I'm passionate about solving real-world problems with clean code, collaborating with amazing teams, and constantly learning cutting-edge technologies to deliver modern digital solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">4</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Companies</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
