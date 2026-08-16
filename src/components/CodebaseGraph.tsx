import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Network, Zap, Cpu, Search, Layers, FileCode, CheckCircle2, ArrowRight } from 'lucide-react';

export const CodebaseGraph: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>('App');
  const [searchFilter, setSearchFilter] = useState('');

  const symbols = [
    {
      id: 'App',
      type: 'Component',
      file: 'src/App.tsx',
      tokensRaw: '4,850 tokens',
      tokensAST: '120 tokens (97.5% reduction)',
      calls: ['MemoryExplorer', 'HandoffWizard', 'MemoryGraph', 'CodebaseGraph', 'McpServerDocs'],
      exports: ['App'],
      doc: 'Root visualizer container managing reactive dark mode state, navigation tabs, and toast pipelines.',
    },
    {
      id: 'MemoryExplorer',
      type: 'Component',
      file: 'src/components/MemoryExplorer.tsx',
      tokensRaw: '2,420 tokens',
      tokensAST: '85 tokens (96.5% reduction)',
      calls: ['SAMPLE_MEMORIES', 'toast.success'],
      exports: ['MemoryExplorer'],
      doc: 'Interactive searchable memory browser with category filtering (Architecture, Bug Fixes, User Intent, Conventions).',
    },
    {
      id: 'HandoffWizard',
      type: 'Component',
      file: 'src/components/HandoffWizard.tsx',
      tokensRaw: '1,980 tokens',
      tokensAST: '70 tokens (96.4% reduction)',
      calls: ['toast.success'],
      exports: ['HandoffWizard'],
      doc: 'Cross-agent handoff generator supporting Antigravity, Cursor, Claude Code, and OpenAI Codex.',
    },
    {
      id: 'vibeMemoryMCP',
      type: 'MCP Server',
      file: 'bin/vibe-memory.js',
      tokensRaw: '3,100 tokens',
      tokensAST: '95 tokens (96.9% reduction)',
      calls: ['recall_memory', 'query_codebase_ast', 'create_handoff'],
      exports: ['mcpServerHandler'],
      doc: 'Dual-engine MCP server exposing stdio JSON-RPC endpoints for long-term memory and AST symbol lookup.',
    },
  ];

  const current = symbols.find((s) => s.id === selectedSymbol) || symbols[0];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase font-bold">
            <Network className="w-3.5 h-3.5" /> High-Performance AST & Symbol Intelligence Engine
          </div>
          <h3 className="text-xl font-bold text-foreground mt-1">
            Codebase Knowledge Graph & Token Optimizer
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
          <Zap className="w-3.5 h-3.5" /> 97% Context Token Savings
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Symbol Tree Navigator */}
        <div className="md:col-span-5 space-y-3">
          <label className="text-xs font-mono text-muted-foreground uppercase">
            Indexed Codebase Symbols (AST):
          </label>

          <div className="space-y-2">
            {symbols.map((sym) => (
              <button
                key={sym.id}
                onClick={() => setSelectedSymbol(sym.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  selectedSymbol === sym.id
                    ? 'border-primary bg-primary/10 text-foreground font-bold shadow-sm'
                    : 'border-border/80 bg-background/60 text-muted-foreground hover:bg-muted/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-foreground font-bold flex items-center gap-2">
                    <FileCode className="w-3.5 h-3.5 text-primary" /> {sym.id}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-muted text-muted-foreground">
                    {sym.type}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground mt-1 block">
                  {sym.file}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Symbol AST Inspector */}
        <div className="md:col-span-7 rounded-xl border border-border/80 bg-muted/30 p-5 space-y-4 font-mono text-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-foreground font-bold text-sm">// Symbol: {current.id}</span>
              <span className="text-emerald-500 font-bold">{current.tokensAST}</span>
            </div>

            <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
              {current.doc}
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="text-[11px] uppercase text-muted-foreground font-bold">Call Graph Dependencies:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {current.calls.map((c) => (
                  <span key={c} className="px-2.5 py-1 rounded-lg bg-card border border-border/80 text-[11px] text-foreground font-mono">
                    ➔ {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-background/80 border border-border/60 flex items-center justify-between text-[11px]">
            <span className="text-muted-foreground">Without AST Index: <span className="line-through text-red-500">{current.tokensRaw}</span></span>
            <span className="text-primary font-bold">With Vibe AST Index: {current.tokensAST.split(' ')[0]} tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
};
