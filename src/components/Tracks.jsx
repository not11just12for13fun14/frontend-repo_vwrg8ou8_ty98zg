import { Code2, Database, Cloud, Globe2 } from "lucide-react";

const tracks = [
  {
    icon: Code2,
    title: "Full-Stack Web",
    desc: "Build modern web apps with React, APIs, and cloud-native tooling.",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Database,
    title: "Data & AI",
    desc: "Work with pipelines, analytics, ML models, and interactive dashboards.",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    desc: "Automate, containerize, and ship at scale with CI/CD and Kubernetes.",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Globe2,
    title: "Open Source",
    desc: "Contribute to real OSS projects and grow a world-class portfolio.",
    color: "from-purple-500 to-purple-700",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Choose your track</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">Curated internship paths designed by engineers. Learn by shipping real features.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className={`absolute -top-10 -right-10 h-32 w-32 bg-gradient-to-br ${color} rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-opacity`} />
              <div className="h-12 w-12 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">View curriculum →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
