import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/30 via-blue-500/20 to-amber-400/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket size={14} className="text-amber-300" />
          <span>FounderOS AI</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Your Autonomous AI Co-Founder
          <span className="block bg-gradient-to-r from-purple-300 via-blue-200 to-amber-200 bg-clip-text text-transparent">
            That Runs Your Startup 24/7
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/80 md:text-lg">
          83% of startups fail due to operational execution, not product. FounderOS AI runs your entire
          business—so you can finally just build.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Calendar size={16} /> Book Free Live Demo
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
          >
            <Play size={16} /> Start Free Trial
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-4 opacity-90 md:grid-cols-4">
          {[
            { label: 'Autonomous Ops', value: '24/7' },
            { label: 'Integrated Tools', value: '400+' },
            { label: 'Response Time', value: '<1s' },
            { label: 'Exec Agents', value: '7' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
              <div className="text-sm text-white/60">{stat.label}</div>
              <div className="mt-1 text-xl font-semibold text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
