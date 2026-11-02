import { Github, Linkedin, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const smoothScrollTo = (elementId: string, duration: number = 1500) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  const easeInOutCubic = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};

const useTypingEffect = (texts: string[], speed = 80, deleteSpeed = 40, pause = 2500) => {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.substring(0, display.length + 1));
        if (display.length === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setDisplay(current.substring(0, display.length - 1));
        if (display.length === 0) {
          setDeleting(false);
          setIdx((prev) => (prev + 1) % texts.length);
        }
      }
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, texts, speed, deleteSpeed, pause]);

  return display;
};

export const Hero = () => {
  const typedText = useTypingEffect(
    ["Full Stack Developer", "Backend Architect", "API Designer", "Problem Solver"],
    70, 40, 2500
  );

  return (
    <section className="min-h-screen relative flex items-center justify-center aurora-bg overflow-hidden">
      {/* Aurora blobs */}
      <div className="aurora-blob aurora-blob-1 top-[10%] left-[60%]" />
      <div className="aurora-blob aurora-blob-2 bottom-[20%] left-[10%]" />

      {/* Floating stat badges */}
      <div className="absolute top-[18%] right-[12%] animate-float-1 hidden lg:block z-10">
        <div className="glass-card px-5 py-3 text-center">
          <div className="text-2xl font-bold gradient-text">3+</div>
          <div className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">Years Exp</div>
        </div>
      </div>
      <div className="absolute bottom-[25%] right-[8%] animate-float-2 hidden lg:block z-10">
        <div className="glass-card px-5 py-3 text-center">
          <div className="text-2xl font-bold gradient-text">10+</div>
          <div className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">Projects</div>
        </div>
      </div>
      <div className="absolute top-[35%] left-[6%] animate-float-3 hidden lg:block z-10">
        <div className="glass-card px-5 py-3 text-center">
          <div className="text-2xl font-bold gradient-text">4</div>
          <div className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">Companies</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/50 font-medium">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-6 animate-slide-up">
          <span className="gradient-text-shimmer">Laraib</span>
          <br />
          <span className="text-white">Mujeeb</span>
        </h1>

        {/* Typing subtitle */}
        <div className="text-lg md:text-xl text-white/40 mb-4 h-8 animate-slide-up font-mono" style={{ animationDelay: '0.15s' }}>
          <span className="text-violet-400/60">{'> '}</span>
          <span className="text-white/70">{typedText}</span>
          <span className="cursor-blink" />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-white/35 max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          Crafting scalable web solutions with{" "}
          <span className="text-white/60">Node.js</span>,{" "}
          <span className="text-white/60">Laravel</span> &{" "}
          <span className="text-white/60">React</span>.
          Turning complex problems into clean, performant systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <button
            onClick={() => smoothScrollTo('projects', 1500)}
            className="btn-aurora cursor-pointer"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            <a href="https://github.com/laraibmujeeb" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/30 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/30 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:mujeeblaraib@gmail.com" aria-label="Email"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-violet-500/30 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => smoothScrollTo('about', 1500)}
          className="flex flex-col items-center text-white/20 hover:text-white/50 transition-colors animate-smooth-bounce cursor-pointer"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase mb-2">scroll</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
