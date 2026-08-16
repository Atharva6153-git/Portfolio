import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, AlertCircle, BookOpen, Users, Code2 } from "lucide-react";

const USERNAME = "Atharva6153-git";
const GH_API = "https://api.github.com";

// Language color map for common languages
const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
  Solidity: "#AA6746",
  Dockerfile: "#384d54",
};

// ─── Skeleton loader ──────────────────────────────────────────────────────────
const Skeleton = ({ className }) => (
  <div className={`animate-pulse rounded bg-[hsl(var(--muted))]/60 ${className}`} />
);

// ─── Stat card ────────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-[hsl(var(--border))]/50 bg-[hsl(var(--card))] p-5 text-center"
  >
    <Icon className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
    <p className="text-2xl font-bold tracking-tight">{value}</p>
    <p className="text-[10px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-medium">{label}</p>
  </motion.div>
);

// ─── Repo card ────────────────────────────────────────────────────────────────
const RepoCard = ({ repo, index }) => {
  const langColor = LANG_COLORS[repo.language] ?? "#8b949e";
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col gap-3 rounded-2xl border border-[hsl(var(--border))]/50 bg-[hsl(var(--card))] p-5 hover:border-[hsl(var(--border))] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="w-4 h-4 flex-shrink-0 text-[hsl(var(--muted-foreground))]" />
          <span className="font-semibold text-sm truncate group-hover:text-[hsl(var(--foreground))] transition-colors">
            {repo.name}
          </span>
        </div>
        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2 flex-1">
        {repo.description || "No description provided."}
      </p>

      <div className="flex items-center gap-4 text-xs text-[hsl(var(--muted-foreground))]">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3 h-3" />
          {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
};

// ─── Language bar ─────────────────────────────────────────────────────────────
const LanguageBar = ({ langMap }) => {
  const total = Object.values(langMap).reduce((a, b) => a + b, 0);
  if (total === 0) return null;
  const sorted = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-[hsl(var(--border))]/50 bg-[hsl(var(--card))] p-5 md:p-6"
    >
      <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[hsl(var(--muted-foreground))] mb-4">
        Languages across repos
      </p>

      {/* Stacked bar */}
      <div className="flex rounded-full overflow-hidden h-2.5 mb-4 gap-px">
        {sorted.map(([lang, count]) => {
          const pct = ((count / total) * 100).toFixed(1);
          return (
            <div
              key={lang}
              style={{ width: `${pct}%`, background: LANG_COLORS[lang] ?? "#8b949e" }}
              title={`${lang}: ${pct}%`}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {sorted.map(([lang, count]) => {
          const pct = ((count / total) * 100).toFixed(1);
          return (
            <div key={lang} className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))]">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: LANG_COLORS[lang] ?? "#8b949e" }} />
              {lang}
              <span className="opacity-60">{pct}%</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

// ─── Error / fallback ─────────────────────────────────────────────────────────
const ErrorState = () => (
  <div className="flex flex-col items-center gap-4 py-16 text-center">
    <div className="w-12 h-12 rounded-full bg-[hsl(var(--muted))]/50 flex items-center justify-center">
      <AlertCircle className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
    </div>
    <div>
      <p className="font-semibold mb-1">Couldn't reach GitHub API</p>
      <p className="text-sm text-[hsl(var(--muted-foreground))]">
        Rate limit or network issue — view the profile directly.
      </p>
    </div>
    <a
      href={`https://github.com/${USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-sm font-medium transition-opacity hover:opacity-90"
    >
      <Github className="w-4 h-4" />
      View on GitHub
    </a>
  </div>
);

// ─── Loading skeleton ─────────────────────────────────────────────────────────
const LoadingState = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)}
    </div>
    <Skeleton className="h-16 rounded-2xl" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-32 rounded-2xl" />)}
    </div>
  </div>
);

// ─── Main section ─────────────────────────────────────────────────────────────
const GitHubSection = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`${GH_API}/users/${USERNAME}`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(`${GH_API}/users/${USERNAME}/repos?sort=updated&per_page=30`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error("API error");

        const [profileData, reposData] = await Promise.all([
          profileRes.json(),
          reposRes.json(),
        ]);

        if (cancelled) return;
        setProfile(profileData);
        setRepos(Array.isArray(reposData) ? reposData : []);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    fetchAll();
    return () => { cancelled = true; };
  }, []);

  // Build language map from repos
  const langMap = repos.reduce((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    return acc;
  }, {});

  // Top repos by stars, then by updated date — max 6
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 6);

  return (
    <section id="github" className="relative py-24 md:py-32 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">/ open source</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Code in the<br />
              <span className="text-[hsl(var(--muted-foreground))]">open.</span>
            </h2>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-sm font-semibold hover:opacity-90 transition-opacity self-start md:self-auto"
            >
              <Github className="w-4 h-4" />
              @{USERNAME}
            </a>
          </div>
        </motion.div>

        {/* Content */}
        {status === "loading" && <LoadingState />}
        {status === "error"   && <ErrorState />}

        {status === "ready" && profile && (
          <div className="space-y-8">

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={BookOpen} label="Public Repos"   value={profile.public_repos} />
              <StatCard icon={Users}    label="Followers"      value={profile.followers} />
              <StatCard icon={Code2}    label="Languages Used" value={Object.keys(langMap).length} />
              <StatCard icon={Star}     label="Total Stars"    value={repos.reduce((s, r) => s + r.stargazers_count, 0)} />
            </div>

            {/* Language bar */}
            {Object.keys(langMap).length > 0 && <LanguageBar langMap={langMap} />}

            {/* Top repos */}
            {topRepos.length > 0 && (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 mb-5"
                >
                  <span className="text-xs uppercase tracking-[0.18em] font-bold text-[hsl(var(--muted-foreground))]">
                    Top Repositories
                  </span>
                  <span className="flex-1 h-px bg-[hsl(var(--border))]/50" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topRepos.map((repo, i) => (
                    <RepoCard key={repo.id} repo={repo} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* Bio / footer strip */}
            {profile.bio && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[hsl(var(--border))]/40 bg-[hsl(var(--card))] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                {profile.avatar_url && (
                  <img
                    src={profile.avatar_url}
                    alt={profile.login}
                    className="w-10 h-10 rounded-full border border-[hsl(var(--border))]"
                  />
                )}
                <p className="text-sm text-[hsl(var(--muted-foreground))] flex-1">{profile.bio}</p>
                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors flex-shrink-0"
                >
                  View all repos <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            )}

          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;
