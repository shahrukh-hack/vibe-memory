import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AgentMemory, MemoryCategory } from '../types/memory';
import {
  Brain,
  Search,
  Tag,
  Code,
  FileText,
  Clock,
  Sparkles,
  Bot,
  Filter,
  Check,
  Copy,
} from 'lucide-react';
import { toast } from 'sonner';

interface Props {
  memories: AgentMemory[];
}

export const MemoryExplorer: React.FC<Props> = ({ memories }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAgent, setSelectedAgent] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: { id: string; label: string; color: string }[] = [
    { id: 'all', label: 'All Contexts', color: 'bg-primary/10 text-primary' },
    { id: 'architecture', label: 'Architecture', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
    { id: 'bug_fix', label: 'Bug Fixes', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
    { id: 'user_intent', label: 'User Intent', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
    { id: 'convention', label: 'Conventions', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
    { id: 'handoff', label: 'Handoffs', color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
  ];

  const filteredMemories = memories.filter((m) => {
    const matchesQuery =
      m.title.toLowerCase().includes(query.toLowerCase()) ||
      m.summary.toLowerCase().includes(query.toLowerCase()) ||
      m.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesAgent = selectedAgent === 'all' || m.sourceAgent === selectedAgent;

    return matchesQuery && matchesCategory && matchesAgent;
  });

  const handleCopyMemory = (mem: AgentMemory) => {
    const text = `### [${mem.category.toUpperCase()}] ${mem.title}\n${mem.summary}\nSource: ${mem.sourceAgent} | Tags: ${mem.tags.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(mem.id);
    toast.success('Memory copied for agent injection!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search architectural decisions, bug fixes, or agent memories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                selectedCategory === c.id
                  ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                  : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Memory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence>
          {filteredMemories.map((mem) => (
            <motion.div
              key={mem.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 space-y-4 hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary">
                      {mem.category.replace('_', ' ')}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
                      <Bot className="w-3 h-3 text-primary" /> {mem.sourceAgent}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyMemory(mem)}
                    className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy memory snippet"
                  >
                    {copiedId === mem.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <h4 className="text-base font-bold text-foreground tracking-tight leading-snug">
                  {mem.title}
                </h4>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {mem.summary}
                </p>

                {/* Code Snippet if present */}
                {mem.codeSnippet && (
                  <div className="rounded-lg bg-muted/60 p-3 font-mono text-[11px] text-foreground overflow-x-auto border border-border/50">
                    <pre>{mem.codeSnippet}</pre>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {mem.tags.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-muted text-[10px]">
                      #{t}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {mem.timestamp.split(' ')[1]}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
