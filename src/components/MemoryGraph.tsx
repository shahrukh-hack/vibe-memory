import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, GitFork, Cpu, Shield, Sparkles } from 'lucide-react';

export const MemoryGraph: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('node-1');

  const nodes = [
    {
      id: 'node-1',
      title: 'Project Core Protocol',
      agent: 'Antigravity',
      color: 'border-blue-500 bg-blue-500/10 text-blue-500',
      x: 50,
      y: 20,
      details: 'Established vendor-neutral AGENT_MEMORY.md format for cross-agent synchronization.',
    },
    {
      id: 'node-2',
      title: 'Anti-AI Slop Tokens',
      agent: 'Cursor',
      color: 'border-purple-500 bg-purple-500/10 text-purple-500',
      x: 20,
      y: 60,
      details: 'Banned purple gradients & neon glowing cards. Enforced tactile physics and Plus Jakarta typography.',
    },
    {
      id: 'node-3',
      title: 'GitHub Pages SPA Fix',
      agent: 'Claude Code',
      color: 'border-amber-500 bg-amber-500/10 text-amber-500',
      x: 80,
      y: 60,
      details: 'Automated 404.html fallback and .nojekyll creation to ensure zero 404 router breaks on deploy.',
    },
    {
      id: 'node-4',
      title: 'MCP Server Hook',
      agent: 'OpenAI Codex',
      color: 'border-emerald-500 bg-emerald-500/10 text-emerald-500',
      x: 50,
      y: 90,
      details: 'Exposed recall_memory and store_memory tools over JSON-RPC stdio for all AI coding CLIs.',
    },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase font-bold">
            <GitFork className="w-3.5 h-3.5" /> Context Lineage & Relationship Graph
          </div>
          <h3 className="text-xl font-bold text-foreground mt-1">
            Visual Memory Graph
          </h3>
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          4 Active Memory Nodes Synced
        </span>
      </div>

      {/* Interactive Visual Graph Bench */}
      <div className="relative rounded-2xl border border-border/80 bg-muted/30 p-8 h-72 flex flex-col justify-between overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {nodes.map((node) => (
            <motion.button
              key={node.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedNode(node.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all backdrop-blur-sm ${
                selectedNode === node.id
                  ? 'border-primary bg-background shadow-lg ring-2 ring-primary/20'
                  : 'border-border/80 bg-background/80 hover:border-primary/50'
              }`}
            >
              <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase mb-2 ${node.color}`}>
                {node.agent}
              </span>
              <p className="text-xs font-bold text-foreground leading-tight">
                {node.title}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Selected Node Inspector */}
        <div className="relative z-10 rounded-xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
            <Brain className="w-4 h-4" /> Selected Memory Context:
          </div>
          <p className="text-xs text-foreground mt-1 leading-relaxed font-mono">
            {nodes.find((n) => n.id === selectedNode)?.details}
          </p>
        </div>
      </div>
    </div>
  );
};
