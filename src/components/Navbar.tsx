import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState("");

    // Handle scroll detection for styling and active section tracking
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Find the currently visible section
            const sections = navLinks.map(link => link.href.substring(1));
            let currentSection = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is within the viewport (or close to top)
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                        break;
                    }
                }
            }

            if (currentSection) {
                setActiveHash(`#${currentSection}`);
            } else if (window.scrollY < 100) {
                setActiveHash("");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        setActiveHash(href);

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-2 glass-card shadow-lg"
                : "py-4 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            window.history.pushState(null, "", " ");
                            setActiveHash("");
                        }}
                        className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
                    >
                        LM
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`px-4 py-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium text-sm animated-underline ${activeHash === link.href
                                    ? "text-violet-600 dark:text-violet-400 font-semibold"
                                    : "text-gray-600 dark:text-gray-300"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/LARAIB_RESUME(2026).pdf"
                            download
                            className="ml-4 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full text-sm font-semibold primary-gradient text-white glow-on-hover"
                        >
                            <Download className="h-4 w-4" />
                            Resume
                        </a>
                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            className="p-2 rounded-xl glass-card hover:bg-white/10 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 mt-4 rounded-2xl glass-card animate-scale-in">
                        <div className="flex flex-col gap-1 p-2">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={`px-4 py-3 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/30 rounded-xl transition-all font-medium animate-slide-up ${activeHash === link.href
                                        ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30"
                                        : "text-gray-600 dark:text-gray-300"
                                        }`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="px-4 pt-2">
                                <a
                                    href="/LARAIB_RESUME(2026).pdf"
                                    download
                                    className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-xl text-sm font-semibold primary-gradient text-white"
                                >
                                    <Download className="h-4 w-4" />
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
