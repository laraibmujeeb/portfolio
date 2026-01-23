import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Send, Loader2, CheckCircle, Sparkles } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
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
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-200/50 via-fuchsia-100/50 to-orange-100/50 dark:from-violet-900/20 dark:via-fuchsia-900/20 dark:to-orange-900/20" />
      <div className="absolute inset-0 particles-bg opacity-30" />

      {/* Floating blobs - More visible in light mode */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-400/30 dark:bg-violet-500/20 rounded-full blur-3xl morph-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-400/30 dark:bg-fuchsia-500/20 rounded-full blur-3xl morph-blob" style={{ animationDelay: '-4s' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 mb-4">
            <Sparkles className="inline h-4 w-4 mr-1" />
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass-card-strong glow-on-hover border-0 animate-slide-up">
            <CardContent className="pt-6 pb-6">
              <h3 className="text-lg font-bold mb-4 gradient-text">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 glass-input text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 glass-input text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 transition-all"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 glass-input text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-0 glass-input text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 rounded-xl font-semibold primary-gradient text-white glow-on-hover disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
                  ) : status === "success" ? (
                    <><CheckCircle className="h-5 w-5" /> Sent!</>
                  ) : (
                    <><Send className="h-5 w-5" /> Send Message</>
                  )}
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="glass-card-strong glow-on-hover border-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6 pb-6 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-4 gradient-text">Contact Info</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>

              <div className="space-y-4 flex-1">
                <a
                  href="mailto:mujeeblaraib@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl glass-input hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    mujeeblaraib@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+918299371557"
                  className="flex items-center gap-4 p-3 rounded-xl glass-input hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-500">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                    +91 8299371557
                  </span>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Find me on</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/laraibmujeeb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card-strong glow-on-hover group"
                  >
                    <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-violet-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card-strong glow-on-hover group"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-fuchsia-500 transition-colors" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
