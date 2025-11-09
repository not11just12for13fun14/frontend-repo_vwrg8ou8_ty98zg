import { Rocket, Code2, Users } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/70 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
              <Code2 size={18} />
            </div>
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white group-hover:opacity-90 transition-opacity">CodeVibe Internships</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 dark:text-neutral-300">
            <a href="#tracks" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Tracks</a>
            <a href="#mentors" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1">
              <Users size={16} /> Mentors
            </a>
            <a href="#apply" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
              <Rocket size={16} /> Apply
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
