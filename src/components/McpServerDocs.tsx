import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

export const McpServerDocs: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const configs = [
    {
      title: 'Antigravity MCP Configuration',
      file: '~/.gemini/antigravity/mcp-config.json',
      json: `{\n  "mcpServers": {\n    "vibe-memory": {\n      "command": "npx",\n      "args": ["-y", "vibe-memory", "mcp"]\n    }\n  }\n}`,
    },
    {
      title: 'Cursor Rules & MCP Setup',
      file: '.cursor/mcp.json',
      json: `{\n  "mcpServers": {\n    "vibe-memory": {\n      "command": "npx",\n      "args": ["-y", "vibe-memory", "mcp"]\n    }\n  }\n}`,
    },
    {
      title: 'Claude Code CLI Tooling',
      file: '~/.claude.json',
      json: `{\n  "mcpServers": {\n    "vibe-memory": {\n      "command": "npx",\n      "args": ["-y", "vibe-memory", "mcp"]\n    }\n  }\n}`,
    },
  ];

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    toast.success('MCP configuration copied to clipboard!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase font-bold">
          <Terminal className="w-3.5 h-3.5" /> Zero-Config MCP Protocol
        </div>
        <h3 className="text-xl font-bold text-foreground mt-1">
          Model Context Protocol (MCP) Integration
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Connect your local agent memory store to any AI coding agent via standard MCP JSON-RPC.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {configs.map((cfg, idx) => (
          <div key={cfg.title} className="rounded-xl border border-border/80 bg-muted/40 p-4 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">{cfg.title}</span>
                <button
                  onClick={() => handleCopy(cfg.json, idx)}
                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground block">{cfg.file}</span>
              <pre className="text-[11px] font-mono bg-background p-3 rounded-lg border border-border/60 text-foreground overflow-x-auto">
                {cfg.json}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
