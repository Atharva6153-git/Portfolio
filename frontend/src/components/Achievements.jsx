import React from "react";
import { motion } from "framer-motion";
import { Layers, Sparkles, Server, Trophy, Medal, Star } from "lucide-react";
import { stackNarratives, hackathons } from "../mock/mock";

const narrativeIcons = {
  layers: Layers,
  sparkles: Sparkles,
  server: Server,
};

const tierConfig = {
  gold: {
    label: "Winner",
    icon: Trophy,
    badgeClass: "achievement-badge--gold",
    cardClass: "achievement-card--gold",
  },
  silver: {
    label: "Finalist",
    icon: Medal,
    badgeClass: "achievement-badge--silver",
    cardClass: "achievement-card--silver",
  },
  neutral: {
    label: "Participated",
    icon: Star,
    badgeClass: "achievement-badge--neutral",
    cardClass: "",
  },
};

const StackNarrativeCard = ({ item, index }) => {
  const Icon = narrativeIcons[item.icon] ?? Layers;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="narrative-card group"
      style={{ "--narrative-color": item.color }}
    >
      <div className="narrative-card-icon-wrap">
        <Icon className="narrative-card-icon" />
      </div>
      <h3 className="narrative-card-title">{item.title}</h3>
      <p className="narrative-card-desc">{item.description}</p>
      <div className="narrative-card-tags">
        {item.stack.map((s) => (
          <span key={s} className="narrative-tag">{s}</span>
        ))}
      </div>
    </motion.div>
  );
};

const HackathonCard = ({ item, index }) => {
  const { icon: BadgeIcon, badgeClass, cardClass } = tierConfig[item.tier];
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className={`hackathon-card ${cardClass}`}
    >
      <div className={`achievement-badge ${badgeClass}`}>
        <BadgeIcon className="w-3.5 h-3.5" />
        <span>{item.result}</span>
      </div>
      <div className="hackathon-card-body">
        <h4 className="hackathon-card-name">{item.name}</h4>
        <p className="hackathon-card-org">{item.org}</p>
        <p className="hackathon-card-desc">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ how I build</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Stack that ships,<br />
            <span className="text-[hsl(var(--muted-foreground))]">proof that wins.</span>
          </h2>
        </motion.div>

        {/* Stack Narrative Cards */}
        <div className="narrative-grid mb-20">
          {stackNarratives.map((item, i) => (
            <StackNarrativeCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Hackathon divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">/ hackathons</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Built under pressure.
          </h3>
        </motion.div>

        {/* Hackathon Cards */}
        <div className="hackathon-grid">
          {hackathons.map((item, i) => (
            <HackathonCard key={item.name} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
