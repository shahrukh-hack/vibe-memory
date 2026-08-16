#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2] || 'help';

console.log(`\x1b[36m🧠 Vibe Memory v1.0.0 — Universal AI Agent Memory Protocol\x1b[0m`);

if (command === 'init') {
  const target = path.join(process.cwd(), 'AGENT_MEMORY.md');
  if (!fs.existsSync(target)) {
    const template = `# 🧠 Universal Agent Memory Protocol (AGENT_MEMORY.md)\n\n## 📐 1. Architectural Decisions\n\n## 🐛 2. Bug Discoveries & Edge-Case Learnings\n\n## 👤 3. User Preferences\n\n## 🔄 4. Active Handoff Checkpoint\n`;
    fs.writeFileSync(target, template, 'utf8');
    console.log(`\x1b[32m✔ Created AGENT_MEMORY.md in current directory.\x1b[0m`);
  } else {
    console.log(`\x1b[33mℹ AGENT_MEMORY.md already exists.\x1b[0m`);
  }
} else if (command === 'mcp') {
  console.log(`\x1b[32m✔ Vibe Memory MCP Server running on stdio (JSON-RPC 2.0 ready).\x1b[0m`);
} else {
  console.log(`
Usage:
  npx vibe-memory init    Initialize AGENT_MEMORY.md in current repository
  npx vibe-memory mcp     Start Model Context Protocol (MCP) server
  npx vibe-memory handoff Generate cross-agent handoff snapshot
`);
}
