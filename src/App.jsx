import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Tracks />
        <WhyUs />
        <CTA />
      </main>
      <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} CodeVibe Internships. Build with vibe, ship with pride.
      </footer>
    </div>
  );
}

export default App;
