import React from 'react';
import { Star, Play, MonitorSmartphone, MessageCircle } from 'lucide-react';

export default function ShowcaseSocial() {
  return (
    <section id="demo" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Demo / Screenshot */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">See FounderOS In Action</h2>
            <p className="mt-3 text-white/70">
              A multi-agent dashboard orchestrates your CEO, CFO, CMO, CTO, Sales, HR, and Legal/Ops. Review
              decisions, approve key moves, and watch goals execute automatically.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black">
                <Play size={16} /> Watch 2‑min Overview
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white/90">
                View Plans
              </a>
            </div>
            <div className="mt-6 text-xs text-white/50">
              Alt text: Stylized mockup of FounderOS dashboard showing agent avatars, Slack thread, and KPI widgets.
            </div>
          </div>

          <div className="relative">
            {/* Stylized mockup card */}
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 shadow-2xl">
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <MonitorSmartphone size={16} className="text-amber-300" />
                  Multi-Agent Dashboard
                </div>
                <span className="text-xs text-white/50">Live</span>
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                  <div className="text-xs text-white/60">Slack Conversation</div>
                  <div className="mt-2 space-y-2 text-[13px] leading-relaxed">
                    <div className="rounded-md bg-white/5 p-2"><strong>CEO:</strong> Priority updated: ship pricing revamp by Friday.</div>
                    <div className="rounded-md bg-white/5 p-2"><strong>Sales:</strong> 8 demos booked · 3 proposals sent.</div>
                    <div className="rounded-md bg-white/5 p-2"><strong>CFO:</strong> MRR +$4.2k this week. AR aging cleared.</div>
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                  <div className="text-xs text-white/60">Business Metrics</div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    {[
                      { k: 'MRR', v: '$28,400' },
                      { k: 'Pipeline', v: '$142k' },
                      { k: 'Active Deals', v: '37' },
                      { k: 'Burn', v: '$9.8k/mo' },
                    ].map((m) => (
                      <div key={m.k} className="rounded-md border border-white/10 bg-white/5 p-2">
                        <div className="text-xs text-white/60">{m.k}</div>
                        <div className="text-white">{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold">Loved by Solo Founders</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                name: 'Aria P.',
                handle: '@aria_builds',
                quote: 'FounderOS AI handles my fundraising pipeline while I sleep! I wake up to intros and decks ready.'
              },
              {
                name: 'Luis M.',
                handle: '@lm_product',
                quote: 'I finally build instead of babysitting ops. Sales calls booked, invoices paid, hiring on rails.'
              },
              {
                name: 'Rina K.',
                handle: '@rinak',
                quote: 'It’s like hiring 7 execs for the price of a SaaS. My time to ship doubled overnight.'
              },
            ].map((t, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
                <div className="mb-2 flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" className="text-amber-300" />
                  ))}
                </div>
                <p className="text-white/80">“{t.quote}”</p>
                <div className="mt-3 text-sm text-white/60">{t.name} · {t.handle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-amber-400/20 p-6 text-center md:flex-row md:text-left">
          <div>
            <div className="text-lg font-medium">Replace $300k/year in hires—get FounderOS AI for just $199/mo</div>
            <div className="text-sm text-white/70">Direct revenue generation, not just automation.</div>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a href="#pricing" className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black">Get Started</a>
            <a href="#demo" className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white/90">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
