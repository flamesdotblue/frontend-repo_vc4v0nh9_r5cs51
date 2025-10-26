import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const items = [
    '7 Executive AI Agents (CEO, CFO, CMO, CTO, Sales, HR, Legal/Ops)',
    'Slack-native communications and approvals',
    '400+ integrations via n8n',
    'Unified analytics dashboard',
    'Human-in-the-loop for critical decisions',
    'Transparent, explainable reasoning logs',
  ];

  return (
    <section id="pricing" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Simple, founder-friendly pricing</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">Replace $300k/year in hires—get FounderOS AI for just $199/mo.</p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-5xl font-semibold tracking-tight">$199<span className="text-2xl text-white/60">/mo</span></div>
              <div className="mt-1 text-sm text-white/60">Billed monthly. Cancel anytime.</div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a href="#" className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black">Start Free Trial</a>
              <a href="#demo" className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white/90">Book a Demo</a>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {items.map((it) => (
              <div key={it} className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                <Check size={16} className="mt-0.5 text-emerald-300" /> {it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
