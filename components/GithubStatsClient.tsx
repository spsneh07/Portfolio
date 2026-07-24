"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Github, FolderGit2, Users, ArrowRight, Activity, Star, GitFork, Code2, Clock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const USERNAME = "spsneh07";

export function GithubStatsClient({ data }: { data: any }) {
  const { user, repos } = data;

  // Overview Stats
  const totalStars = repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
  const totalForks = repos.reduce((acc: number, repo: any) => acc + (repo.forks_count || 0), 0);
  const publicRepos = user?.public_repos || "-";
  const followers = user?.followers || "-";

  // Top Languages
  const langCounts: Record<string, number> = {};
  repos.forEach((repo: any) => {
    if (repo.language) {
      langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
    }
  });

  const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    "C++": "#f34b7d",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Jupyter: "#DA5B0B",
    "Jupyter Notebook": "#DA5B0B",
  };

  const totalReposWithLang = Object.values(langCounts).reduce((a, b) => a + b, 0);
  const topLangs = Object.entries(langCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      percent: Math.round((count / totalReposWithLang) * 100),
      color: langColors[name] || "#818CF8"
    }));

  // Featured Repositories (Top 4 by stars, ignoring forks if possible)
  const featuredRepos = [...repos]
    .filter((repo: any) => !repo.fork)
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  // Recent Activity (Latest 4 pushed repos)
  const recentActivity = [...repos]
    .sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // Reusing consistent design language from the rest of the portfolio
  const cardClass = "glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group";

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32">
      <SectionHeading
        eyebrow="08 · GitHub Activity"
        title="Developer Dashboard"
        description="A live, native snapshot of my open-source contributions, most used languages, and recent activity directly from the GitHub API."
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col gap-6"
      >
        {/* Top Row: Overview & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* GitHub Overview Card */}
          <motion.div variants={itemVariants} className={`${cardClass} p-8 flex flex-col justify-between`}>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] p-[2px] shadow-lg shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://github.com/${USERNAME}.png`} alt="Avatar" className="w-full h-full rounded-full border-2 border-[#080a12] object-cover" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl">{profile.name}</h3>
                <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-[#38BDF8] text-sm font-medium hover:underline">@{USERNAME}</a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-muted text-xs uppercase tracking-wider font-semibold flex items-center gap-1"><FolderGit2 className="w-3 h-3"/> Repos</span>
                <span className="text-white font-bold text-2xl">{publicRepos}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted text-xs uppercase tracking-wider font-semibold flex items-center gap-1"><Users className="w-3 h-3"/> Followers</span>
                <span className="text-white font-bold text-2xl">{followers}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted text-xs uppercase tracking-wider font-semibold flex items-center gap-1"><Star className="w-3 h-3 text-[#f1e05a]"/> Stars</span>
                <span className="text-white font-bold text-2xl">{totalStars}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted text-xs uppercase tracking-wider font-semibold flex items-center gap-1"><GitFork className="w-3 h-3 text-[#38BDF8]"/> Forks</span>
                <span className="text-white font-bold text-2xl">{totalForks}</span>
              </div>
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div variants={itemVariants} className={`${cardClass} p-8`}>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-[#818CF8]" />
              <h3 className="text-white font-semibold text-lg">Most Used Languages</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {topLangs.length > 0 ? (
                topLangs.map((lang, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: lang.color }} />
                        <span className="text-gray-300 font-medium">{lang.name}</span>
                      </div>
                      <span className="text-muted font-semibold">{lang.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full" 
                        style={{ backgroundColor: lang.color }} 
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-muted">No language data available.</div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Featured Repositories Grid */}
        <motion.div variants={itemVariants} className="mt-4">
          <div className="flex items-center gap-2 mb-6 px-1">
            <Star className="w-5 h-5 text-[#f1e05a]" />
            <h3 className="text-white font-semibold text-xl">Featured Repositories</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredRepos.map((repo: any) => (
              <a 
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#818CF8]/30 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-white font-medium text-lg group-hover:text-[#38BDF8] transition-colors">{repo.name}</h4>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-[#38BDF8] transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                  </div>
                  <p className="text-sm text-muted line-clamp-2 mb-6">
                    {repo.description || "No description provided."}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-muted">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColors[repo.language] || "#818CF8" }} />
                      {repo.language}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity Timeline */}
        <motion.div variants={itemVariants} className={`${cardClass} p-8 mt-4`}>
          <div className="flex items-center gap-2 mb-8">
            <Activity className="w-5 h-5 text-[#38BDF8]" />
            <h3 className="text-white font-semibold text-lg">Recent Activity</h3>
          </div>
          
          <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-8">
            {recentActivity.map((repo: any, idx: number) => {
              const date = new Date(repo.pushed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
              return (
                <div key={repo.id} className="relative pl-6 md:pl-8 group">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-150 transition-transform" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#38BDF8] transition-colors">
                      {repo.name}
                    </a>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Updated {date}
                    </span>
                  </div>
                  <p className="text-sm text-muted">Pushed new commits to the repository.</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 glass hover:bg-white/[0.03] rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View Full GitHub Profile</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300 text-[#38BDF8]" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
