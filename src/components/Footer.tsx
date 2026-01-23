import { Github, Linkedin, Mail, Phone, ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
            <div className="absolute inset-0 particles-bg opacity-20" />

            {/* Gradient overlay at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Back to Top Button */}
                <div className="flex justify-center mb-10">
                    <button
                        onClick={scrollToTop}
                        className="group p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md glow-on-hover transition-all"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="h-6 w-6 text-violet-400 group-hover:text-white transition-colors group-hover:-translate-y-1 duration-300" />
                    </button>
                </div>

                {/* Logo */}
                <div className="text-center mb-8">
                    <span className="text-4xl font-bold gradient-text">LM</span>
                    <p className="text-gray-400 mt-2">Full Stack Developer</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-10">
                    <a
                        href="https://github.com/laraibmujeeb"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md glow-on-hover group transition-all"
                    >
                        <Github className="h-5 w-5 text-gray-300 group-hover:text-violet-400 transition-colors" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md glow-on-hover group transition-all"
                    >
                        <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-fuchsia-400 transition-colors" />
                    </a>
                    <a
                        href="mailto:mujeeblaraib@gmail.com"
                        aria-label="Email"
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md glow-on-hover group transition-all"
                    >
                        <Mail className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
                    </a>
                    <a
                        href="tel:+918299371557"
                        aria-label="Phone"
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md glow-on-hover group transition-all"
                    >
                        <Phone className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400">
                    <a href="#about" className="hover:text-violet-400 transition-colors animated-underline">About</a>
                    <a href="#projects" className="hover:text-violet-400 transition-colors animated-underline">Projects</a>
                    <a href="#experience" className="hover:text-violet-400 transition-colors animated-underline">Experience</a>
                    <a href="#skills" className="hover:text-violet-400 transition-colors animated-underline">Skills</a>
                    <a href="#contact" className="hover:text-violet-400 transition-colors animated-underline">Contact</a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-1 mb-2">
                        Made with <Heart className="h-4 w-4 text-fuchsia-500 fill-fuchsia-500 animate-pulse" /> using React & Tailwind
                    </p>
                    <p>© {currentYear} Laraib Mujeeb. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
