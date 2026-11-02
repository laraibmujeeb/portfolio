import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 px-6">
      {/* Gradient top border */}
      <div className="gradient-line mb-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
              LM
            </div>
            <span className="text-white/40 text-sm">
              © {currentYear} Laraib Mujeeb
            </span>
          </div>

          {/* Center text */}
          <p className="text-xs text-white/20 flex items-center gap-1.5 font-mono">
            crafted with <Heart className="h-3 w-3 text-pink-500/60 fill-pink-500/60" /> using React & Tailwind
          </p>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a href="https://github.com/laraibmujeeb" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="p-2 rounded-full text-white/20 hover:text-white/60 hover:bg-white/[0.04] transition-all">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="p-2 rounded-full text-white/20 hover:text-white/60 hover:bg-white/[0.04] transition-all">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:mujeeblaraib@gmail.com" aria-label="Email"
              className="p-2 rounded-full text-white/20 hover:text-white/60 hover:bg-white/[0.04] transition-all">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
