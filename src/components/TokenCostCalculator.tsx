import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Cpu, Sparkles, ArrowRight, Zap, TrendingDown } from 'lucide-react';

export const TokenCostCalculator: React.FC = () => {
  const [fileCount, setFileCount] = useState(50);
  const [queriesPerDay, setQueriesPerDay] = useState(20);

  // Average 2,500 tokens per file
  const rawTokensPerQuery = fileCount * 2500;
  // AST Progressive Disclosure uses ~3,200 tokens regardless of repository size
  const astTokensPerQuery = 3200;

  // Assume Claude 3.5 Sonnet / GPT-4o input rate: $3.00 per million tokens
  const rawMonthlyCost = (rawTokensPerQuery * queriesPerDay * 30 * 3.0) / 1_000_000;
  const astMonthlyCost = (astTokensPerQuery * queriesPerDay * 30 * 3.0) / 1_000_000;
  const monthlySavings = rawMonthlyCost - astMonthlyCost;
  const tokenSavingsPercent = (((rawTokensPerQuery - astTokensPerQuery) / rawTokensPerQuery) * 100).toFixed(1);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase font-bold">
            <DollarSign className="w-3.5 h-3.5" /> Token Economics Calculator
          </div>
          <h3 className="text-xl font-bold text-foreground mt-1">
            Raw File Dumps vs. AST Progressive Disclosure
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
          <TrendingDown className="w-3.5 h-3.5" /> {tokenSavingsPercent}% Token Reduction
        </span>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-muted/30 border border-border/80">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">Repository File Count:</span>
            <span className="font-bold text-foreground">{fileCount} files</span>
          </div>
          <input
            type="range"
            min="10"
            max="300"
            step="5"
            value={fileCount}
            onChange={(e) => setFileCount(parseInt(e.target.value))}
            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">AI Prompts / Queries Per Day:</span>
            <span className="font-bold text-foreground">{queriesPerDay} queries</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={queriesPerDay}
            onChange={(e) => setQueriesPerDay(parseInt(e.target.value))}
            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Without vibe-memory */}
        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 space-y-2">
          <span className="text-[10px] font-mono uppercase text-red-500 font-bold">
            Traditional Context Loading
          </span>
          <div className="text-2xl font-bold text-foreground">
            {rawTokensPerQuery.toLocaleString()} <span className="text-xs font-normal text-muted-foreground">tokens/query</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            Est. ${rawMonthlyCost.toFixed(2)} / month in API tokens
          </p>
        </div>

        {/* With vibe-memory */}
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-2">
          <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold">
            With Vibe Memory AST
          </span>
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {astTokensPerQuery.toLocaleString()} <span className="text-xs font-normal text-muted-foreground">tokens/query</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            Est. ${astMonthlyCost.toFixed(2)} / month in API tokens
          </p>
        </div>

        {/* Total Annual Savings */}
        <div className="p-4 rounded-xl border border-primary/40 bg-primary/5 space-y-2 flex flex-col justify-center">
          <span className="text-[10px] font-mono uppercase text-primary font-bold">
            Net Monthly Developer Savings
          </span>
          <div className="text-3xl font-serif font-bold text-primary">
            +${monthlySavings.toFixed(2)}
          </div>
          <p className="text-[11px] font-mono text-muted-foreground">
            + ${(monthlySavings * 12).toFixed(2)} / year saved on LLM inference
          </p>
        </div>
      </div>
    </div>
  );
};
