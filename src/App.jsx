import React from 'react';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import ShowcaseSocial from './components/ShowcaseSocial';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-medium text-white/90">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" aria-hidden="true" />
            FounderOS AI
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#how" className="hover:text-white">How it Works</a>
            <a href="#demo" className="hover:text-white">Live Demo</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="rounded-lg bg-white px-4 py-2 font-medium text-black">Start Free Trial</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Comparison />
        <div id="how"><HowItWorks /></div>
        <ShowcaseSocial />
        <Pricing />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-white/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" aria-hidden="true" />
              FounderOS AI
            </div>
            <p className="mt-3 text-sm">Your autonomous AI co-founder that runs your startup 24/7.</p>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Company</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Blog</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Legal</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white" href="#">Security</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Support</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Help Center</a></li>
              <li><a className="hover:text-white" href="#">Status</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 text-xs text-white/50">© {new Date().getFullYear()} FounderOS AI. All rights reserved.</div>
      </footer>
    </div>
  );
}
