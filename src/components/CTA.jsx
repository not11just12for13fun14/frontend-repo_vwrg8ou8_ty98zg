export default function CTA() {
  return (
    <section id="apply" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-1">
          <div className="rounded-[calc(1.5rem-4px)] bg-neutral-950 p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to build your internship story?</h3>
                <p className="mt-3 text-neutral-300">Submit your application and we'll match you to a mentor and a project sprint. Cohorts start monthly.</p>
              </div>
              <form className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input required type="text" placeholder="Full name" className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button type="submit" className="rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-white/90 transition">Apply</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
