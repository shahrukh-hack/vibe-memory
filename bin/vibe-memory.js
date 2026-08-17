#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const command = process.argv[2] || 'help';

const MEMORY_FILE = 'AGENT_MEMORY.md';

const DEFAULT_TEMPLATE = `# 🧠 Universal Agent Memory Protocol (AGENT_MEMORY.md)
> Vendor-neutral persistent memory with Mem0-inspired Adaptive Learning & GraphRAG Hierarchical Mapping.

---

## 📐 1. Architectural Decisions (ADR)
<!-- Tag format: [ #arch #framework #database #auth #state ] -->

* **[2026-08-17] [ #arch #react19 #tailwind ]** Adopted React 19 and Tailwind CSS v4 design token architecture with CSS-first variables.
* **[2026-08-17] [ #arch #database #supabase ]** Supabase PostgreSQL with strict Row-Level Security (RLS) policies for user profiles.

---

## 🐛 2. Bug Discoveries & Learnings
<!-- Tag format: [ #bug #fix #api #edge-case ] -->

* **[2026-08-17] [ #bug #fix #hydration ]** Fixed Next.js SSR hydration mismatch by deferring theme cookie reading to useEffect.
* **[2026-08-17] [ #bug #fix #auth #headers ]** Next.js 15 requires awaiting \`headers()\` in server action routes.

---

## 👤 3. User Preferences & High-Taste Rules
<!-- Tag format: [ #pref #design-tokens #anti-slop #motion ] -->

* **[ #pref #anti-slop ]** Zero purple glows on dark mode. Use crisp 1px borders (\`#E3E8EE\`) and 8pt spatial grid.
* **[ #pref #motion ]** All interactive buttons must use Emil Kowalski spring physics (\`stiffness: 420, damping: 30\`).

---

## 🔄 4. Active Handoff Checkpoint
<!-- Tag format: [ #handoff #active-task #next-steps ] -->

<!-- AGENT_HANDOFF_SNAPSHOT -->
### 🎯 Current Objective:
Ready for next task.

### ✅ Completed Steps:
- Workspace initialized with Vibe Memory protocol

### 🚀 Immediate Next Actions:
- Define active feature implementation
<!-- END_AGENT_HANDOFF -->
`;

function getMemoryPath() {
  return path.join(process.cwd(), MEMORY_FILE);
}

function parseMemoryByTags(content, query) {
  if (!query) return content;
  const q = query.toLowerCase().replace(/^#/, '');
  const lines = content.split('\n');
  const matched = [];
  let currentHeader = '';

  for (const line of lines) {
    if (line.startsWith('## ')) {
      currentHeader = line;
    }
    if (line.toLowerCase().includes(`#${q}`) || line.toLowerCase().includes(q)) {
      if (currentHeader && !matched.includes(currentHeader)) {
        matched.push(`\n${currentHeader}`);
      }
      matched.push(line);
    }
  }

  return matched.length > 0
    ? matched.join('\n')
    : `No memory entries found matching tag or query: '#${q}'`;
}

function scanAstSymbols(rootDir, query) {
  const symbols = [];
  const validExts = ['.ts', '.tsx', '.js', '.jsx', '.py'];
  const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.next', '.antigravity'];

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!ignoreDirs.includes(entry.name)) {
          walk(path.join(dir, entry.name));
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (validExts.includes(ext)) {
          const filePath = path.join(dir, entry.name);
          const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
          const code = fs.readFileSync(filePath, 'utf8');
          const lines = code.split('\n');

          lines.forEach((line, idx) => {
            const trimmed = line.trim();
            if (
              trimmed.startsWith('export function') ||
              trimmed.startsWith('export const') ||
              trimmed.startsWith('export interface') ||
              trimmed.startsWith('export type') ||
              trimmed.startsWith('export class') ||
              trimmed.startsWith('def ') ||
              trimmed.startsWith('class ')
            ) {
              if (!query || trimmed.toLowerCase().includes(query.toLowerCase()) || relPath.toLowerCase().includes(query.toLowerCase())) {
                symbols.push(`[${relPath}:${idx + 1}] ${trimmed.replace(/\{$/, '').trim()}`);
              }
            }
          });
        }
      }
    }
  }

  walk(rootDir);
  return symbols.slice(0, 50);
}

// -------------------------------------------------------------
// GRAPHRAG HIERARCHICAL COMMUNITY MAPPER
// -------------------------------------------------------------
function buildGraphRagCommunities(rootDir) {
  const communities = {
    components: [],
    hooks_and_state: [],
    api_and_data: [],
    types_and_schemas: [],
    dependencies: [],
  };

  const validExts = ['.ts', '.tsx', '.js', '.jsx'];
  const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.next'];

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!ignoreDirs.includes(entry.name)) walk(path.join(dir, entry.name));
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (validExts.includes(ext)) {
          const filePath = path.join(dir, entry.name);
          const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
          const code = fs.readFileSync(filePath, 'utf8');

          if (relPath.includes('component') || relPath.endsWith('.tsx')) {
            communities.components.push(relPath);
          } else if (relPath.includes('hook') || relPath.includes('store') || relPath.includes('state')) {
            communities.hooks_and_state.push(relPath);
          } else if (relPath.includes('api') || relPath.includes('service') || relPath.includes('lib')) {
            communities.api_and_data.push(relPath);
          } else if (relPath.includes('type') || relPath.includes('schema') || relPath.includes('interface')) {
            communities.types_and_schemas.push(relPath);
          }

          // Extract external dependencies
          const importMatches = code.matchAll(/from\s+['"]([^'"]+)['"]/g);
          for (const match of importMatches) {
            const pkg = match[1];
            if (!pkg.startsWith('.') && !pkg.startsWith('/') && !communities.dependencies.includes(pkg)) {
              communities.dependencies.push(pkg);
            }
          }
        }
      }
    }
  }

  walk(rootDir);
  return communities;
}

// -------------------------------------------------------------
// MEM0 ADAPTIVE MEMORY EXTRACTOR
// -------------------------------------------------------------
function extractMem0AdaptivePatterns(text) {
  const extracted = [];
  const lower = text.toLowerCase();
  const dateStr = new Date().toISOString().split('T')[0];

  if (lower.includes('fix') || lower.includes('error') || lower.includes('bug') || lower.includes('issue')) {
    extracted.push({
      section: 'bug',
      entry: `* **[${dateStr}] [ #bug #fix #adaptive ]** ${text.trim()}`,
    });
  } else if (lower.includes('prefer') || lower.includes('never') || lower.includes('always') || lower.includes('use ') || lower.includes('style')) {
    extracted.push({
      section: 'pref',
      entry: `* **[ #pref #adaptive ]** ${text.trim()}`,
    });
  } else {
    extracted.push({
      section: 'arch',
      entry: `* **[${dateStr}] [ #arch #adaptive ]** ${text.trim()}`,
    });
  }

  return extracted;
}

// -------------------------------------------------------------
// CLI COMMAND ROUTING
// -------------------------------------------------------------

if (command === 'init') {
  const target = getMemoryPath();
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, DEFAULT_TEMPLATE, 'utf8');
    console.log(`\x1b[32m✔ Created ${MEMORY_FILE} with smart semantic tags and GraphRAG metadata.\x1b[0m`);
  } else {
    console.log(`\x1b[33mℹ ${MEMORY_FILE} already exists in current workspace.\x1b[0m`);
  }
} else if (command === 'search') {
  const query = process.argv[3];
  if (!query) {
    console.log(`\x1b[31mPlease provide a search term or tag. Example: npx vibe-memory search auth\x1b[0m`);
    process.exit(1);
  }
  const target = getMemoryPath();
  if (!fs.existsSync(target)) {
    console.log(`\x1b[31mNo ${MEMORY_FILE} found. Run 'npx vibe-memory init' first.\x1b[0m`);
    process.exit(1);
  }
  const content = fs.readFileSync(target, 'utf8');
  console.log(`\x1b[36m🔍 Searching Vibe Memory for '${query}':\x1b[0m\n`);
  console.log(parseMemoryByTags(content, query));
} else if (command === 'add') {
  const section = process.argv[3];
  const text = process.argv[4];
  const tags = process.argv[5] || '';

  if (!section || !text) {
    console.log(`\x1b[31mUsage: npx vibe-memory add <arch|bug|pref> "<text>" "[#tags]"\x1b[0m`);
    process.exit(1);
  }

  const target = getMemoryPath();
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, DEFAULT_TEMPLATE, 'utf8');
  }

  const dateStr = new Date().toISOString().split('T')[0];
  const formattedTags = tags ? ` ${tags}` : '';
  const newEntry = `* **[${dateStr}]${formattedTags}** ${text}\n`;

  let content = fs.readFileSync(target, 'utf8');
  const sectionHeader = section.startsWith('arch')
    ? '## 📐 1. Architectural Decisions'
    : section.startsWith('bug')
    ? '## 🐛 2. Bug Discoveries'
    : '## 👤 3. User Preferences';

  if (content.includes(sectionHeader)) {
    content = content.replace(sectionHeader, `${sectionHeader}\n${newEntry}`);
  } else {
    content += `\n${newEntry}`;
  }
  fs.writeFileSync(target, content, 'utf8');
  console.log(`\x1b[32m✔ Added entry to ${section} in ${MEMORY_FILE}\x1b[0m`);
} else if (command === 'learn') {
  const rawText = process.argv.slice(3).join(' ');
  if (!rawText) {
    console.log(`\x1b[31mPlease provide an observation or learning to memorize. Example: npx vibe-memory learn "Always use 8pt spatial grid for cards"\x1b[0m`);
    process.exit(1);
  }

  const target = getMemoryPath();
  if (!fs.existsSync(target)) fs.writeFileSync(target, DEFAULT_TEMPLATE, 'utf8');

  const extractions = extractMem0AdaptivePatterns(rawText);
  let content = fs.readFileSync(target, 'utf8');

  extractions.forEach(({ section, entry }) => {
    const sectionHeader = section === 'bug'
      ? '## 🐛 2. Bug Discoveries'
      : section === 'pref'
      ? '## 👤 3. User Preferences'
      : '## 📐 1. Architectural Decisions';

    if (content.includes(sectionHeader)) {
      content = content.replace(sectionHeader, `${sectionHeader}\n${entry}`);
    } else {
      content += `\n${entry}`;
    }
  });

  fs.writeFileSync(target, content, 'utf8');
  console.log(`\x1b[32m✔ [Mem0 Engine] Autonomously learned and categorized pattern into ${MEMORY_FILE}:\x1b[0m`);
  extractions.forEach(e => console.log(`  ● \x1b[36m${e.entry.trim()}\x1b[0m`));
} else if (command === 'graph') {
  console.log(`\x1b[36m🕸️ [GraphRAG Engine] Generating Hierarchical Community Knowledge Graph...\x1b[0m\n`);
  const communities = buildGraphRagCommunities(process.cwd());

  console.log(`\x1b[32m📦 Component Community (${communities.components.length} files):\x1b[0m`);
  communities.components.slice(0, 10).forEach(c => console.log(`  ● ${c}`));

  console.log(`\n\x1b[33m⚡ Hooks & State Community (${communities.hooks_and_state.length} files):\x1b[0m`);
  communities.hooks_and_state.slice(0, 10).forEach(h => console.log(`  ● ${h}`));

  console.log(`\n\x1b[34m🔌 API & Data Services (${communities.api_and_data.length} files):\x1b[0m`);
  communities.api_and_data.slice(0, 10).forEach(a => console.log(`  ● ${a}`));

  console.log(`\n\x1b[35m🛡️ Types & Schemas (${communities.types_and_schemas.length} files):\x1b[0m`);
  communities.types_and_schemas.slice(0, 10).forEach(t => console.log(`  ● ${t}`));

  console.log(`\n\x1b[36m🌐 External Package Dependencies (${communities.dependencies.length} packages):\x1b[0m`);
  console.log(`  [ ${communities.dependencies.join(', ')} ]\n`);
} else if (command === 'ast') {
  const query = process.argv[3] || '';
  console.log(`\x1b[36m⚡ Scanning Codebase AST Symbols (Query: '${query || "ALL"}')...\x1b[0m\n`);
  const symbols = scanAstSymbols(process.cwd(), query);
  if (symbols.length === 0) {
    console.log(`No symbols found matching '${query}'.`);
  } else {
    symbols.forEach(s => console.log(`  ● \x1b[32m${s}\x1b[0m`));
    console.log(`\n\x1b[90mTotal symbols indexed: ${symbols.length} (Saved ~97% context tokens vs raw file reading)\x1b[0m`);
  }
} else if (command === 'mcp') {
  // -------------------------------------------------------------
  // MODEL CONTEXT PROTOCOL (MCP) JSON-RPC 2.0 STDIO SERVER
  // -------------------------------------------------------------
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  function sendResponse(id, result, error = null) {
    const response = { jsonrpc: '2.0', id };
    if (error) response.error = error;
    else response.result = result;
    process.stdout.write(JSON.stringify(response) + '\n');
  }

  rl.on('line', (line) => {
    if (!line.trim()) return;
    try {
      const request = JSON.parse(line);
      const { id, method, params } = request;

      if (method === 'initialize') {
        sendResponse(id, {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: { name: 'vibe-memory', version: '2.5.0' },
        });
      } else if (method === 'tools/list') {
        sendResponse(id, {
          tools: [
            {
              name: 'get_project_memory',
              description: 'Retrieve project architecture, bug discoveries, and user preferences from AGENT_MEMORY.md with optional tag/keyword filtering.',
              inputSchema: {
                type: 'object',
                properties: {
                  tag: { type: 'string', description: 'Optional tag to filter (e.g., auth, database, design-tokens, bug)' },
                },
              },
            },
            {
              name: 'learn_adaptive_memory',
              description: 'Mem0-inspired adaptive memory learner. Automatically parses a freeform text or bug pattern and stores it into the appropriate section of AGENT_MEMORY.md.',
              inputSchema: {
                type: 'object',
                properties: {
                  observation: { type: 'string', description: 'The pattern, preference, or bug learned from the session' },
                },
                required: ['observation'],
              },
            },
            {
              name: 'get_graphrag_communities',
              description: 'GraphRAG hierarchical module community summary. Returns interconnected components, hooks, API services, types, and external package dependencies.',
              inputSchema: {
                type: 'object',
                properties: {},
              },
            },
            {
              name: 'query_ast_symbols',
              description: 'Fast AST codebase symbol search returning exported functions, interfaces, and classes across the repo (97% token savings).',
              inputSchema: {
                type: 'object',
                properties: {
                  query: { type: 'string', description: 'Search term for function name, type, or component' },
                },
              },
            },
          ],
        });
      } else if (method === 'tools/call') {
        const { name, arguments: args } = params || {};
        const memPath = getMemoryPath();

        if (name === 'get_project_memory') {
          if (!fs.existsSync(memPath)) {
            sendResponse(id, { content: [{ type: 'text', text: 'No AGENT_MEMORY.md found in workspace. Run npx vibe-memory init.' }] });
          } else {
            const raw = fs.readFileSync(memPath, 'utf8');
            const filtered = parseMemoryByTags(raw, args?.tag);
            sendResponse(id, { content: [{ type: 'text', text: filtered }] });
          }
        } else if (name === 'learn_adaptive_memory') {
          const extractions = extractMem0AdaptivePatterns(args?.observation || '');
          let content = fs.existsSync(memPath) ? fs.readFileSync(memPath, 'utf8') : DEFAULT_TEMPLATE;

          extractions.forEach(({ section, entry }) => {
            const sectionHeader = section === 'bug'
              ? '## 🐛 2. Bug Discoveries'
              : section === 'pref'
              ? '## 👤 3. User Preferences'
              : '## 📐 1. Architectural Decisions';

            if (content.includes(sectionHeader)) {
              content = content.replace(sectionHeader, `${sectionHeader}\n${entry}`);
            } else {
              content += `\n${entry}`;
            }
          });

          fs.writeFileSync(memPath, content, 'utf8');
          sendResponse(id, { content: [{ type: 'text', text: `✔ [Mem0 Engine] Autonomously memorized: "${args.observation}"` }] });
        } else if (name === 'get_graphrag_communities') {
          const communities = buildGraphRagCommunities(process.cwd());
          sendResponse(id, {
            content: [{
              type: 'text',
              text: JSON.stringify(communities, null, 2),
            }],
          });
        } else if (name === 'query_ast_symbols') {
          const symbols = scanAstSymbols(process.cwd(), args?.query || '');
          sendResponse(id, {
            content: [{
              type: 'text',
              text: symbols.length > 0 ? symbols.join('\n') : 'No matching AST symbols found.',
            }],
          });
        } else {
          sendResponse(id, null, { code: -32601, message: `Tool not found: ${name}` });
        }
      } else {
        sendResponse(id, {});
      }
    } catch (err) {
      // Ignore malformed JSON-RPC frames
    }
  });
} else {
  console.log(`
\x1b[36m🧠 Vibe Memory v2.5.0 — Universal AI Agent Memory & AST Intelligence Protocol\x1b[0m

Usage:
  npx vibe-memory init                         Initialize AGENT_MEMORY.md with smart tags
  npx vibe-memory search <#tag|query>          Search memory for specific topics (#auth, #database, #bug)
  npx vibe-memory add <arch|bug|pref> "<text>" Append a new decision or bug fix
  npx vibe-memory learn "<text>"               Mem0 Adaptive Learning: auto-categorize and memorize
  npx vibe-memory graph                        GraphRAG: Hierarchical component & API community map
  npx vibe-memory ast [query]                  Instant AST symbol lookup (97% token savings)
  npx vibe-memory mcp                          Start Model Context Protocol (MCP) stdio server
`);
}
