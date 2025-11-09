import { Sparkles, BadgeCheck, Globe } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Built for builders</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            We mix real-world projects with expert mentorship. You'll ship weekly, demo often, and graduate with a portfolio that speaks louder than any resume.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center"><Sparkles size={18} /></div>
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Project-first learning</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Ship real features for real users. No fluff, just code.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center"><BadgeCheck size={18} /></div>
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">1:1 mentor feedback</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Weekly code reviews and career guidance from senior engineers.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-purple-600 text-white flex items-center justify-center"><Globe size={18} /></div>
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Remote & global teams</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Work async with talented peers across timezones.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />
          <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 shadow-xl">
            <div className="aspect-video rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 text-sm">
              Live coding session preview
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">Weekly sprints</div>
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">Standups & demos</div>
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">Portfolio reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
