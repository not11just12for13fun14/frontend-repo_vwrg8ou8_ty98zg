import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-neutral-950 via-indigo-950 to-purple-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now accepting Summer '25 cohorts
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Land a coding internship with a vibe.
          </h1>
          <p className="mt-4 text-neutral-200 text-lg">
            Hands-on projects, real mentors, and a playful 3D space to explore. Build, ship, and get hired faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#apply" className="inline-flex items-center justify-center rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-white/90 transition">
              Apply now
            </a>
            <a href="#tracks" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 font-medium hover:bg-white/20 transition ring-1 ring-white/20">
              Explore tracks
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/90" />
    </section>
  );
}
