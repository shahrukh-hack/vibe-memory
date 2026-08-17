<div align="center">

# 🧠 Vibe Memory (v2.5)
### Universal Long-Term Memory & Codebase AST Intelligence Protocol for AI Coding Agents

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v2.5.0-635BFF?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![Token Reduction](https://img.shields.io/badge/Context%20Tokens-97%25%20Saved-brightgreen?style=flat-square)](#)
[![Live Visualizer](https://img.shields.io/badge/Live-Memory%20Visualizer-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-memory/)

<br />

> **Quit Claude Code mid-task, switch to Antigravity or Cursor in the same directory, cut LLM tokens by 97%, and continue coding without re-explaining the architecture, bug discoveries, or user preferences.**

</div>

---

## 🌐 Live Interactive Memory & AST Visualizer

Test the visual memory lineage graph, search indexed codebase symbols, and generate live handoff snapshots:  
👉 **[https://shahrukh-hack.github.io/vibe-memory/](https://shahrukh-hack.github.io/vibe-memory/)**

---

## ⚡ The Core Problem: Why AI Agents Fail Without Memory

When building production software with AI coding agents (**Antigravity**, **Cursor**, **Claude Code**, **OpenAI Codex**, **Windsurf**), developers face three major bottlenecks:

1. **🔴 The "Fresh Chat Amnesia" Problem:** Every time a context window resets or you open a new conversation, the AI forgets your architectural decisions, design tokens, and the edge-case bugs you solved yesterday.
2. **💸 The "Raw File Dumping" Token Tax:** When an agent needs to understand a component or function, it reads dozens of full source code files—burning 15,000+ to 50,000+ context tokens and slowing down responses.
3. **🔒 Tool Lock-In & Vendor Fragmentation:** Switching from Antigravity (planning) to Cursor (editing) or Claude Code (CLI) requires manually re-prompting and explaining the entire task from scratch.

---

## 🚀 The Dual-Engine Solution

```
                          ┌────────────────────────────────────────────────────────┐
                          │                VIBE MEMORY DUAL ENGINE                 │
                          └───────────────────────────┬────────────────────────────┘
                                                      │
                       ┌──────────────────────────────┴──────────────────────────────┐
                       ▼                                                             ▼
┌──────────────────────────────────────────────┐              ┌──────────────────────────────────────────────┐
│  ENGINE 1: CONTEXT & HANDOFF MEMORY          │              │  ENGINE 2: AST & SYMBOL KNOWLEDGE GRAPH      │
│  • Architectural Decision Records (ADR)      │              │  • Component & Function Hierarchies          │
│  • Bug fix pattern discoveries               │              │  • Call graphs & export dependency maps      │
│  • Anti-AI slop user preferences             │              │  • 97% Context Token Reduction               │
│  • Smart semantic tags (#auth, #bug, #pref)  │              │  • Sub-millisecond symbol queries            │
└──────────────────────────────────────────────┘              └──────────────────────────────────────────────┘
```

---

## ⚡ 1-Command CLI Usage

```bash
# 1. Initialize AGENT_MEMORY.md in any workspace
npx vibe-memory init

# 2. Search memory for specific tags or topics
npx vibe-memory search auth
npx vibe-memory search #bug

# 3. Append a new architectural decision or bug fix
npx vibe-memory add arch "Migrated to Tailwind v4 @theme architecture" "[ #arch #tailwind ]"
npx vibe-memory add bug "Fixed Next.js SSR hydration mismatch" "[ #bug #fix ]"

# 4. Instant AST Symbol Lookup across repository (97% token savings)
npx vibe-memory ast
npx vibe-memory ast AuthButton

# 5. Start the Model Context Protocol (MCP) Server for AI IDEs
npx vibe-memory mcp
```

---

## 🔌 Model Context Protocol (MCP) Configuration

Equip **Antigravity**, **Cursor**, and **Claude Code** with automated memory recall and AST queries over native stdio JSON-RPC:

### 🔹 Antigravity (`~/.gemini/antigravity/mcp-config.json`):
```json
{
  "mcpServers": {
    "vibe-memory": {
      "command": "npx",
      "args": ["-y", "vibe-memory", "mcp"]
    }
  }
}
```

### 🔹 Cursor (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "vibe-memory": {
      "command": "npx",
      "args": ["-y", "vibe-memory", "mcp"]
    }
  }
}
```

### 🔹 Claude Code (`~/.claude.json`):
```json
{
  "mcpServers": {
    "vibe-memory": {
      "command": "npx",
      "args": ["-y", "vibe-memory", "mcp"]
    }
  }
}
```

---

## 🛠️ Native MCP Tools Included:

| MCP Tool Name | Parameters | Description |
| :--- | :--- | :--- |
| **`get_project_memory`** | `{ tag?: string }` | Retrieves project ADRs, bug fixes, and user preferences from `AGENT_MEMORY.md` with optional tag filtering. |
| **`append_memory_entry`** | `{ section: "arch"|"bug"|"pref", title: string, tags?: string }` | Commits a new architectural decision, bug discovery, or user preference directly to `AGENT_MEMORY.md`. |
| **`query_ast_symbols`** | `{ query?: string }` | Scans workspace and returns exported functions, interfaces, and classes in <100 tokens. |

---

## 🔄 The Cross-Agent Handoff Workflow

When switching from **Antigravity** to **Cursor** or **Claude Code** mid-task:

1. Tell your active agent: *"Create handoff snapshot for Cursor."*
2. The agent appends a structured checkpoint to `AGENT_MEMORY.md`:

```markdown
<!-- AGENT_HANDOFF_SNAPSHOT: ANTIGRAVITY ➔ CURSOR -->
# 🔄 Context Handoff (2026-08-17T22:30:00Z)

## 🎯 Active Objective
Finalizing the real-time fleet telemetry map and vehicle status filter.

## ✅ Accomplished So Far
- Configured Leaflet container and Tailwind design tokens
- Built GPS ingestion pipeline in TypeScript
- Verified Adelaide CBD and Barossa Valley route corridors

## 🚀 Immediate Next Actions for Cursor
- Connect the live incident marker overlay in src/components/CorridorMap.tsx
- Run unit test suite
<!-- END_AGENT_HANDOFF -->
```

3. Open **Cursor**, type `"Continue active task"`, and Cursor resumes the exact next step without missing a beat!

---

## ⚡ 97% Context Token Savings via AST Indexing

| Method | Tokens Consumed | Response Latency | Cost / Risk |
|---|---|---|---|
| **Raw File Reading** | ~15,000 – 50,000 tokens | 6.5s – 12.0s | High cost, context bloat, hallucinations |
| **Vibe Memory AST Index** | **~85 – 150 tokens** | **0.4s** | **97% savings, instant focus, zero amnesia** |

---

## 🤝 Part of The Vibe Coder's Power Suite

1. 🪄 **[`vibe-superkit`](https://github.com/shahrukh-hack/vibe-superkit):** Anti-AI Slop & Stripe/Tailwind UI Design Engine ([Live Demo](https://shahrukh-hack.github.io/vibe-superkit/))
2. 🧠 **[`vibe-memory`](https://github.com/shahrukh-hack/vibe-memory):** Universal Long-Term Memory & Codebase AST Intelligence ([Live Demo](https://shahrukh-hack.github.io/vibe-memory/))
3. ⚡ **[`vibe-skills`](https://github.com/shahrukh-hack/vibe-skills):** Mega-Library of 50 Standard Agent Skills with 1-Command CLI (`npx vibe-skills add <skill>`)
4. 🤖 **[`vibe-agency`](https://github.com/shahrukh-hack/vibe-agency):** Autonomous Multi-Agent Team Orchestrator with 200+ Agents & Vibe Kanban ([Live Demo](https://shahrukh-hack.github.io/vibe-agency/))

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
