import React, { useState } from 'react';
import { Sparkles, Brain, Plus, CheckCircle, Tag, ArrowRight, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface LearnedEntry {
  id: string;
  category: 'arch' | 'bug' | 'pref';
  date: string;
  tags: string[];
  text: string;
}

const INITIAL_LEARNED: LearnedEntry[] = [
  {
    id: '1',
    category: 'pref',
    date: '2026-08-17',
    tags: ['#pref', '#adaptive', '#motion'],
    text: 'Always use 420Hz Emil Kowalski spring physics for interactive button depressions',
  },
  {
    id: '2',
    category: 'bug',
    date: '2026-08-17',
    tags: ['#bug', '#fix', '#hydration'],
    text: 'Fixed Next.js SSR hydration mismatch by deferring theme cookie reading to useEffect',
  },
  {
    id: '3',
    category: 'arch',
    date: '2026-08-17',
    tags: ['#arch', '#database', '#supabase'],
    text: 'Enforce Supabase PostgreSQL Row-Level Security (RLS) on all user profile tables',
  },
];

export const AdaptiveLearningSandbox: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [entries, setEntries] = useState<LearnedEntry[]>(INITIAL_LEARNED);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLearn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      const lower = inputText.toLowerCase();
      let cat: 'arch' | 'bug' | 'pref' = 'arch';
      let tags = ['#arch', '#adaptive'];

      if (lower.includes('fix') || lower.includes('bug') || lower.includes('error') || lower.includes('issue')) {
        cat = 'bug';
        tags = ['#bug', '#fix', '#adaptive'];
      } else if (lower.includes('prefer') || lower.includes('never') || lower.includes('always') || lower.includes('style') || lower.includes('use')) {
        cat = 'pref';
        tags = ['#pref', '#adaptive', '#styling'];
      }

      const newEntry: LearnedEntry = {
        id: Date.now().toString(),
        category: cat,
        date: new Date().toISOString().split('T')[0],
        tags,
        text: inputText.trim(),
      };

      setEntries([newEntry, ...entries]);
      setInputText('');
      setIsProcessing(false);
      toast.success(`[Mem0 Engine] Autonomously memorized as ${cat.toUpperCase()}`);
    }, 300);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-md">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Mem0 Adaptive Learning Sandbox</h2>
              <p className="text-xs text-muted-foreground">
                Self-updating memory: Type any raw conversation snippet, error discovery, or preference to watch the engine categorize it in real time.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-500 text-xs font-mono font-semibold">
            Mem0 Protocol (28k+ ⭐)
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleLearn} className="flex gap-2 pt-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Try: "Fixed Next.js 15 async headers() bug" or "Always use 8pt spatial grid for cards"'
            className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={isProcessing || !inputText.trim()}
            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 disabled:opacity-50"
          >
            {isProcessing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
            <span>Memorize</span>
          </button>
        </form>
      </div>

      {/* Live Memory Ledger */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
          <span>LIVE MEMORY STREAM ({entries.length} ENTRIES)</span>
          <span>AUTO-SYNCED TO AGENT_MEMORY.MD</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors flex items-start justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${
                      entry.category === 'bug'
                        ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                        : entry.category === 'pref'
                        ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
                        : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                    }`}
                  >
                    {entry.category === 'bug' ? '🐛 Bug Fix' : entry.category === 'pref' ? '👤 Preference' : '📐 Architecture'}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground">{entry.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground font-medium">{entry.text}</p>
              </div>

              <div className="flex flex-wrap items-center gap-1">
                {entry.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
