import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Check, Copy, Sparkles, RefreshCw, Zap } from 'lucide-react';
import { toast } from 'sonner';

export const HandoffWizard: React.FC = () => {
  const [sourceAgent, setSourceAgent] = useState<'Antigravity' | 'Cursor' | 'Claude Code' | 'Codex'>('Antigravity');
  const [targetAgent, setTargetAgent] = useState<'Cursor' | 'Claude Code' | 'Antigravity' | 'Codex'>('Cursor');
  const [taskSummary, setTaskSummary] = useState('Building the reactive fleet telemetry module with Leaflet mapping.');
  const [completedSteps, setCompletedSteps] = useState('1. Setup Tailwind tokens\n2. Built GPS ingestion pipe\n3. Added 3 SA corridors');
  const [nextAction, setNextAction] = useState('Integrate live corridor polyline rendering and connect real-time incident pins.');
  const [copied, setCopied] = useState(false);

  const generatedSnapshot = `<!-- AGENT_HANDOFF_SNAPSHOT: ${sourceAgent.toUpperCase()} ➔ ${targetAgent.toUpperCase()} -->
# 🔄 Context Handoff (${new Date().toISOString()})

## 🎯 Active Objective
${taskSummary}

## ✅ Accomplished So Far
${completedSteps}

## 🚀 Immediate Next Actions for ${targetAgent}
${nextAction}

## 🧠 Memory Protocol Keys
- AGENT_MEMORY.md loaded
- Anti-AI Slop Guidelines Enforced
- Base URL: Relative ('./')
<!-- END_AGENT_HANDOFF -->`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSnapshot);
    setCopied(true);
    toast.success(`Handoff snapshot generated for ${targetAgent}! Paste in terminal/chat.`);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase font-bold">
          <Zap className="w-3.5 h-3.5" /> Universal Cross-Tool Handoff Engine
        </div>
        <h3 className="text-xl font-bold text-foreground mt-1">
          Seamless Agent-to-Agent Context Transfer
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Quit one agent mid-task and resume instantly in another tool without repeating context.
        </p>
      </div>

      {/* Agent Switcher Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-muted/50 border border-border/60">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-xs font-mono text-muted-foreground uppercase">Handoff From:</span>
          <select
            value={sourceAgent}
            onChange={(e) => setSourceAgent(e.target.value as any)}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="Antigravity">Antigravity</option>
            <option value="Cursor">Cursor</option>
            <option value="Claude Code">Claude Code</option>
            <option value="Codex">OpenAI Codex</option>
          </select>
        </div>

        <ArrowRight className="w-4 h-4 text-primary hidden sm:block" />

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-xs font-mono text-muted-foreground uppercase">Handoff To:</span>
          <select
            value={targetAgent}
            onChange={(e) => setTargetAgent(e.target.value as any)}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-bold text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="Cursor">Cursor</option>
            <option value="Antigravity">Antigravity</option>
            <option value="Claude Code">Claude Code</option>
            <option value="Codex">OpenAI Codex</option>
          </select>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase">Active Task Summary:</label>
          <input
            type="text"
            value={taskSummary}
            onChange={(e) => setTaskSummary(e.target.value)}
            className="w-full rounded-xl border border-border bg-background p-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase">Next Actions for {targetAgent}:</label>
          <input
            type="text"
            value={nextAction}
            onChange={(e) => setNextAction(e.target.value)}
            className="w-full rounded-xl border border-border bg-background p-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
      </div>

      {/* Generated Handoff Preview Box */}
      <div className="rounded-xl border border-border/80 bg-muted/40 p-4 space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between text-muted-foreground border-b border-border/60 pb-2">
          <span>// Formatted Vendor-Neutral Handoff Payload</span>
          <span className="text-emerald-500 font-bold">Ready</span>
        </div>
        <pre className="text-[11px] text-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {generatedSnapshot}
        </pre>
      </div>

      <button
        onClick={handleCopy}
        className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md active:scale-[0.99]"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
        <span>{copied ? 'Snapshot Copied to Clipboard!' : `Generate & Copy Handoff for ${targetAgent}`}</span>
      </button>
    </div>
  );
};
