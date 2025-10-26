import React from 'react';
import { Crown, Banknote, Megaphone, Cpu, TrendingUp, UserCheck, Gavel, CheckCircle2, Workflow, MessageCircle, Brain, BarChart3, Shield, Layers, DollarSign } from 'lucide-react';

const agents = [
  { icon: Crown, title: 'CEO Agent', desc: 'Sets strategy, prioritizes work, and keeps teams aligned.' },
  { icon: Banknote, title: 'CFO Agent', desc: 'Owns cash flow, invoicing, and budget controls.' },
  { icon: Megaphone, title: 'CMO Agent', desc: 'Plans campaigns, tracks attribution, scales demand.' },
  { icon: Cpu, title: 'CTO Agent', desc: 'Ships roadmaps, manages tickets, supervises delivery.' },
  { icon: TrendingUp, title: 'Sales Agent', desc: 'Qualifies leads, sequences outreach, closes deals.' },
  { icon: UserCheck, title: 'HR Agent', desc: 'Sources talent, automates onboarding, keeps culture healthy.' },
  { icon: Gavel, title: 'Legal/Ops Agent', desc: 'Contracts, compliance, and process rigor—done right.' },
];

const features = [
  { icon: Brain, title: 'Truly Autonomous Decision-Making', desc: 'Acts on goals without micromanagement—safeguarded by policy.' },
  { icon: Workflow, title: 'Multi-Agent Strategic Collaboration', desc: 'Exec-level agents coordinate plans and unblock each other.' },
  { icon: Layers, title: '400+ Tool Integrations via n8n', desc: 'Connect CRM, billing, analytics, HRIS, and more in minutes.' },
  { icon: MessageCircle, title: 'Natural Slack-Based Communication', desc: 'Talk to FounderOS like a teammate—get updates and approvals.' },
  { icon: Shield, title: 'Institutional AI Memory', desc: 'Retains context and artifacts so knowledge compounds over time.' },
  { icon: CheckCircle2, title: 'Human-in-the-Loop Approvals', desc: 'You approve the critical moves—FounderOS handles the rest.' },
  { icon: DollarSign, title: 'Direct Revenue Generation', desc: 'Not just automation—meetings booked, invoices paid, cash in.' },
  { icon: Brain, title: 'Self-Improving AI', desc: 'Learns from outcomes to optimize playbooks and forecasts.' },
  { icon: BarChart3, title: 'Unified Analytics Dashboard', desc: 'Real-time KPIs across teams with transparent reasoning.' },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">How FounderOS Works</h2>
          <p className="max-w-2xl text-white/70">
            Seven specialized AI execs collaborate as your full founding team. You set goals; FounderOS plans,
            executes, and reports—across every function.
          </p>
        </div>

        {/* Agents grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon size={18} className="text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        {/* Feature list */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold">Key Features</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Icon size={18} className="text-blue-300" />
                </div>
                <div className="font-medium">{title}</div>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
            <h3 className="text-xl font-semibold">The Problem</h3>
            <p className="mt-2 text-white/70">
              305 million founders worldwide are held back by operational overload, not lack of ideas—FounderOS AI
              delivers what even a human co-founder can’t: relentless, tireless execution and strategic guidance.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
            <h3 className="text-xl font-semibold">The Solution</h3>
            <ul className="mt-2 space-y-2 text-white/80">
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-emerald-300" size={18} /> Seven specialized AI execs collaborate as your full founding team</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-emerald-300" size={18} /> Autonomous ops: Sales, finance, hiring, legal, marketing, product—handled</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-emerald-300" size={18} /> You interact via natural Slack chat, approve only what matters</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-emerald-300" size={18} /> No equity dilution, no onboarding, no burnout</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
