import React from 'react';
import { ThumbsDown, ThumbsUp, Timer, Briefcase } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Without vs With FounderOS</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-300">
              <ThumbsDown size={14} /> Without FounderOS
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3"><Timer className="mt-0.5 text-white/40" size={18} /> Drown in admin work and busywork</li>
              <li className="flex items-start gap-3"><Briefcase className="mt-0.5 text-white/40" size={18} /> Strategy, finance, marketing—all on you</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-white/40" /> Missed deadlines, burnout, missed revenue</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <ThumbsUp size={14} /> With FounderOS
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Autonomous AI handles operations 24/7</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> You focus on building and scaling</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Top-tier exec execution—instantly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
