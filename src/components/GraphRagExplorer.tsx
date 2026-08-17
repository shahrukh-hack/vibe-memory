import React, { useState } from 'react';
import { Network, Layers, Box, Cpu, Shield, ExternalLink, ArrowUpRight } from 'lucide-react';

interface CommunityCluster {
  id: string;
  name: string;
  count: number;
  color: string;
  description: string;
  nodes: string[];
}

const GRAPH_CLUSTERS: CommunityCluster[] = [
  {
    id: 'components',
    name: 'Component Community',
    count: 8,
    color: 'emerald',
    description: 'User interface components, design systems, and page layouts',
    nodes: [
      'src/App.tsx',
      'src/components/MemoryExplorer.tsx',
      'src/components/CodebaseGraph.tsx',
      'src/components/HandoffWizard.tsx',
      'src/components/MemoryGraph.tsx',
      'src/components/TokenCostCalculator.tsx',
      'src/components/AdaptiveLearningSandbox.tsx',
      'src/components/GraphRagExplorer.tsx',
    ],
  },
  {
    id: 'hooks',
    name: 'Hooks & State Community',
    count: 3,
    color: 'amber',
    description: 'Custom React hooks, Zustand stores, and state machines',
    nodes: ['src/hooks/useMemoryStore.ts', 'src/hooks/useThemeToggle.ts', 'src/stores/cartStore.ts'],
  },
  {
    id: 'api',
    name: 'API & Services',
    count: 4,
    color: 'blue',
    description: 'Backend clients, data fetching adapters, and external pipelines',
    nodes: ['src/lib/supabaseClient.ts', 'src/lib/mcpClient.ts', 'src/lib/astParser.ts', 'src/lib/shopify.ts'],
  },
  {
    id: 'types',
    name: 'Types & Schemas',
    count: 3,
    color: 'purple',
    description: 'TypeScript contracts, interfaces, and Zod runtime validators',
    nodes: ['src/types/memory.ts', 'src/types/ast.ts', 'src/types/handoff.ts'],
  },
  {
    id: 'packages',
    name: 'External Dependencies',
    count: 7,
    color: 'rose',
    description: 'Core runtime libraries and UI primitives',
    nodes: ['react (v18.3)', 'lucide-react', 'framer-motion', 'sonner', 'tailwindcss', 'vite', '@modelcontextprotocol/sdk'],
  },
];

export const GraphRagExplorer: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<string>('components');

  const active = GRAPH_CLUSTERS.find((c) => c.id === selectedCluster) || GRAPH_CLUSTERS[0];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Microsoft GraphRAG Community Explorer</h2>
              <p className="text-xs text-muted-foreground">
                Hierarchical module community graph: Analyzes multi-tier dependencies between UI components, API services, types, and packages.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 text-xs font-mono font-semibold">
            GraphRAG Architecture (23k+ ⭐)
          </div>
        </div>

        {/* Cluster Selection Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          {GRAPH_CLUSTERS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCluster(c.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedCluster === c.id
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border bg-background hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">{c.name.split(' ')[0]}</span>
                <span className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono text-muted-foreground font-bold">
                  {c.count}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground truncate mt-1">{c.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Active Cluster Details */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <span>{active.name}</span>
              <span className="text-xs font-normal text-muted-foreground font-mono">({active.count} nodes)</span>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{active.description}</p>
          </div>
          <span className="px-3 py-1 rounded-lg bg-muted text-xs font-mono text-foreground font-semibold">
            Impact Radius: Low / Isolated
          </span>
        </div>

        {/* Node Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {active.nodes.map((node) => (
            <div
              key={node}
              className="p-3.5 rounded-xl border border-border/80 bg-background hover:border-primary/40 transition-colors flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0">
                  <Box className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono text-foreground truncate">{node}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 text-[10px] font-mono font-semibold flex-shrink-0">
                Indexed
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
