import React, { useState } from 'react';
import { MemoryExplorer } from './components/MemoryExplorer';
import { HandoffWizard } from './components/HandoffWizard';
import { MemoryGraph } from './components/MemoryGraph';
import { CodebaseGraph } from './components/CodebaseGraph';
import { McpServerDocs } from './components/McpServerDocs';
import { TokenCostCalculator } from './components/TokenCostCalculator';
import { AdaptiveLearningSandbox } from './components/AdaptiveLearningSandbox';
import { GraphRagExplorer } from './components/GraphRagExplorer';
import { SAMPLE_MEMORIES } from './data/sampleMemories';
import {
  Brain,
  Layers,
  Sparkles,
  GitFork,
  Terminal,
  Zap,
  Github,
  Sun,
  Moon,
  Network,
  Cpu,
} from 'lucide-react';
import { Toaster } from 'sonner';

export function App() {
  const [activeTab, setActiveTab] = useState<
    'explorer' | 'adaptive' | 'graphrag' | 'codebase' | 'handoff' | 'graph' | 'mcp'
  >('explorer');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-200 ${darkMode ? 'dark' : ''}`}>
      <Toaster position="top-right" richColors />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-sm shadow-sm">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base tracking-tight text-foreground">
                Vibe Memory
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-mono text-muted-foreground">
                v2.5 (Mem0 + GraphRAG + AST Engine)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shahrukh-hack/vibe-memory"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Star on GitHub</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Hero Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mem0 Adaptive Learning • Microsoft GraphRAG • AST 97% Token Savings</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight">
            Universal Memory & <span className="italic font-normal text-primary">Codebase Intelligence</span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Combines <strong>cross-agent long-term memory</strong> with <strong>AST symbol intelligence</strong>. Index codebases, cut LLM tokens by 97%, and hand off context seamlessly across Antigravity, Cursor, Claude Code, and Codex.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-muted-foreground">
            <span className="px-2 py-1 rounded bg-muted">Mem0 Adaptive</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">GraphRAG Maps</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">97% Token Reduction</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">Antigravity</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">Cursor</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">Claude Code</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">MCP Protocol</span>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl border border-border bg-muted/60 gap-1 overflow-x-auto max-w-full">
            {[
              { id: 'explorer', label: 'Memory Explorer', icon: <Brain className="w-3.5 h-3.5" /> },
              { id: 'adaptive', label: 'Mem0 Adaptive Sandbox', icon: <Cpu className="w-3.5 h-3.5 text-red-500" /> },
              { id: 'graphrag', label: 'GraphRAG Explorer', icon: <Network className="w-3.5 h-3.5 text-blue-500" /> },
              { id: 'codebase', label: 'Codebase AST Index', icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'handoff', label: 'Handoff Wizard', icon: <Zap className="w-3.5 h-3.5" /> },
              { id: 'graph', label: 'Lineage Graph', icon: <GitFork className="w-3.5 h-3.5" /> },
              { id: 'mcp', label: 'MCP Setup', icon: <Terminal className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Token Cost Economics Calculator */}
        <section>
          <TokenCostCalculator />
        </section>

        {/* Active Tab Views */}
        {activeTab === 'explorer' && <MemoryExplorer memories={SAMPLE_MEMORIES} />}
        {activeTab === 'adaptive' && <AdaptiveLearningSandbox />}
        {activeTab === 'graphrag' && <GraphRagExplorer />}
        {activeTab === 'codebase' && <CodebaseGraph />}
        {activeTab === 'handoff' && <HandoffWizard />}
        {activeTab === 'graph' && <MemoryGraph />}
        {activeTab === 'mcp' && <McpServerDocs />}

        {/* Footer */}
        <footer className="pt-12 border-t border-border/80 text-center space-y-3">
          <p className="text-xs sm:text-sm font-mono text-muted-foreground">
            Created with intention by <a href="https://github.com/shahrukh-hack" className="text-primary font-bold hover:underline">Yogeshkumar Patel</a> • Adelaide, Australia 🇦🇺
          </p>
          <p className="text-[11px] text-muted-foreground">
            Open Source under MIT License • Compatible with Antigravity, Cursor, Claude Code, Windsurf & Codex
          </p>
        </footer>
      </main>
    </div>
  );
}
