import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, Github, Linkedin, Loader2, Check } from "lucide-react";
import { personalInfo, emailjsConfig } from "../mock/mock";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", doubt: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.doubt) {
      toast({ title: "Missing fields", description: "Please fill in all fields before sending." });
      return;
    }

    setStatus("sending");

    const configured =
      emailjsConfig.serviceId !== "YOUR_SERVICE_ID" &&
      emailjsConfig.templateId !== "YOUR_TEMPLATE_ID" &&
      emailjsConfig.publicKey !== "YOUR_PUBLIC_KEY";

    try {
      if (configured) {
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          { publicKey: emailjsConfig.publicKey }
        );
      } else {
        await new Promise((r) => setTimeout(r, 900));
        console.log("[EmailJS not configured] Simulated send:", form);
      }
      setStatus("success");
      toast({
        title: "Message sent",
        description: configured
          ? "Thanks! I'll get back to you soon."
          : "Simulated — add EmailJS keys in .env to deliver real emails.",
      });
      setForm({ name: "", phone: "", doubt: "" });
      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast({ title: "Failed to send", description: "Something went wrong. Try again." });
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ contact</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's build<br />
            <span className="text-[hsl(var(--muted-foreground))]">something together.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/30 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[hsl(var(--muted-foreground))]">Email</p>
                <p className="text-sm font-medium truncate">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/30 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">GitHub</p>
                <p className="text-sm font-medium">@Atharva6153-git</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))]/30 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">LinkedIn</p>
                <p className="text-sm font-medium">Atharva Jadhav</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 p-6 md:p-8 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full bg-transparent border-b border-[hsl(var(--border))] py-2 text-sm outline-none focus:border-[hsl(var(--foreground))] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full bg-transparent border-b border-[hsl(var(--border))] py-2 text-sm outline-none focus:border-[hsl(var(--foreground))] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Message</label>
              <textarea
                name="doubt"
                value={form.doubt}
                onChange={onChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-2 w-full bg-transparent border-b border-[hsl(var(--border))] py-2 text-sm outline-none focus:border-[hsl(var(--foreground))] transition-colors resize-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                Prefer email? — <a className="underline hover:text-[hsl(var(--foreground))]" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === "success" && <Check className="w-4 h-4" />}
                {status !== "sending" && status !== "success" && <Send className="w-4 h-4" />}
                <span>
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Sent!"
                    : "Send Message"}
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
