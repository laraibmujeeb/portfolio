import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Custom slow smooth scroll function
const smoothScrollTo = (elementId: string, duration: number = 1500) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Animated background - More vibrant in light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-orange-400/30 dark:from-violet-900/30 dark:via-fuchsia-900/30 dark:to-orange-900/30 animate-gradient" />

      {/* Particle dots */}
      <div className="absolute inset-0 particles-bg opacity-50" />

      {/* Floating blobs - More visible in light mode */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/40 dark:bg-violet-500/30 rounded-full blur-3xl morph-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/35 dark:bg-fuchsia-500/20 rounded-full blur-3xl morph-blob" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-400/35 dark:bg-orange-500/20 rounded-full blur-3xl morph-blob" style={{ animationDelay: '-2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Avatar with glow */}
        <div className="relative mx-auto w-48 h-48 mb-8 animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-xl opacity-50 animate-pulse-glow" />
          <Avatar className="w-48 h-48 border-4 border-white/20 shadow-2xl relative">
            <AvatarImage
              src="/lovable-uploads/laraib.png"
              alt="Laraib Mujeeb"
              className="object-cover"
            />
            <AvatarFallback className="text-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">LM</AvatarFallback>
          </Avatar>
        </div>

        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-scale-in">
          <span className="gradient-text">Laraib Mujeeb</span>
        </h1>

        {/* Tagline with typewriter effect */}
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          <span className="font-semibold text-violet-600 dark:text-violet-400">Full Stack Developer</span> crafting scalable web solutions with{" "}
          <span className="text-emerald-500 dark:text-emerald-400">Node.js</span>,{" "}
          <span className="text-fuchsia-600 dark:text-fuchsia-400">Laravel</span> &{" "}
          <span className="text-orange-500 dark:text-orange-400">React</span>
        </h2>

        {/* Social Links with glass effect */}
        <div className="flex gap-4 justify-center my-8" style={{ animationDelay: '0.2s' }}>
          <a
            href="https://github.com/laraibmujeeb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-4 rounded-2xl glass-card-strong glow-on-hover group"
          >
            <Github className="h-6 w-6 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-4 rounded-2xl glass-card-strong glow-on-hover group"
          >
            <Linkedin className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:mujeeblaraib@gmail.com"
            aria-label="Email Contact"
            className="p-4 rounded-2xl glass-card-strong glow-on-hover group"
          >
            <Mail className="h-6 w-6 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="tel:+918299371557"
            aria-label="Phone Contact"
            className="p-4 rounded-2xl glass-card-strong glow-on-hover group"
          >
            <Phone className="h-6 w-6 text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* CTA Button with gradient border */}
        <div className="pt-4">
          <button
            onClick={() => smoothScrollTo('about', 1500)}
            className="inline-flex items-center justify-center h-14 px-10 rounded-full text-lg font-semibold primary-gradient text-white glow-on-hover animate-pulse-glow cursor-pointer"
          >
            Explore My Work
          </button>
        </div>
      </div>

      {/* Scroll indicator - positioned at very bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => smoothScrollTo('about', 1500)}
          className="flex flex-col items-center text-gray-400 hover:text-violet-500 transition-colors animate-smooth-bounce cursor-pointer"
        >
          <span className="text-xs mb-2 font-medium tracking-wider uppercase opacity-70">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
