import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Loader2, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7980ba2c-7aa9-4440-bdcb-d65c6ebf2614",
          ...formData,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden aurora-bg">
      <div className="aurora-blob aurora-blob-1 top-[10%] right-[10%]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              <span className="text-sm text-white/70 font-medium">Let's Connect</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              <span className="text-white">Let's build</span>
              <br />
              <span className="gradient-text-shimmer">something amazing</span>
              <br />
              <span className="text-white">together.</span>
            </h2>

            <p className="text-white/35 text-lg leading-relaxed mb-10 max-w-md">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <a href="mailto:mujeeblaraib@gmail.com"
                className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-violet-500/30 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all">
                  <Mail className="h-4 w-4 text-white/40 group-hover:text-violet-400 transition-colors" />
                </div>
                <span className="text-white/50 group-hover:text-white/80 transition-colors">mujeeblaraib@gmail.com</span>
              </a>
              <a href="tel:+918299371557"
                className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all">
                  <Phone className="h-4 w-4 text-white/40 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="text-white/50 group-hover:text-white/80 transition-colors">+91 8299371557</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/laraibmujeeb" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="gradient-border-slow p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text" name="name" placeholder="Name"
                    value={formData.name} onChange={handleChange} required
                    className="input-glass"
                  />
                  <input
                    type="email" name="email" placeholder="Email"
                    value={formData.email} onChange={handleChange} required
                    className="input-glass"
                  />
                </div>
                <input
                  type="text" name="subject" placeholder="Subject"
                  value={formData.subject} onChange={handleChange} required
                  className="input-glass"
                />
                <textarea
                  name="message" placeholder="Your message..."
                  value={formData.message} onChange={handleChange} required
                  rows={5} className="input-glass resize-none"
                />
                <button
                  type="submit" disabled={status === "loading"}
                  className="w-full btn-aurora disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                  ) : status === "success" ? (
                    <><CheckCircle className="h-4 w-4" /> Message Sent!</>
                  ) : (
                    <><Send className="h-4 w-4" /> Send Message</>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
