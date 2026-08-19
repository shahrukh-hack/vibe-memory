<div align="center">

# 🧠 Vibe Memory
### Universal Long-Term Memory & Codebase Intelligence for AI Coding Agents — Made Simple

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v2.5.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Token Reduction](https://img.shields.io/badge/Context%20Tokens-97%25%20Reduction-green?style=flat-square)](https://github.com/shahrukh-hack/vibe-memory)
[![Built For](https://img.shields.io/badge/AI%20Agents-Antigravity%20%7C%20Cursor%20%7C%20Claude-purple?style=flat-square)](https://github.com/shahrukh-hack/vibe-memory)
[![Live Visualizer](https://img.shields.io/badge/Live-Graph%20Explorer-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-memory/)

<br />

> **Stop your AI from forgetting your project rules and past decisions.**  
> Built with **Mem0 Adaptive Learning** and **Microsoft GraphRAG**, **Vibe Memory** gives AI agents (Antigravity, Cursor, Claude Code) persistent cross-session memory and cuts context token consumption by **97%**.

</div>

---

## 📖 What is Vibe Memory? (In Simple Terms)

Have you ever noticed that every time you start a new chat with an AI coding assistant, **it forgets everything you discussed yesterday?** It forgets your favorite design colors, your database rules, and your past bug fixes.

**Vibe Memory** gives your AI a permanent **"Brain"**:
* It remembers your preferences and project architecture forever.
* When you switch between tools (e.g. from Google Antigravity to Cursor or Claude Code), your AI picks up right where you left off.
* It searches your entire codebase using smart knowledge graphs instead of reading massive files, saving **97% of your token costs**!

---

## 💬 Real-World Prompts: What You Type ➔ What You Achieve

Here is how anyone can use **Vibe Memory** using simple plain-English chat prompts:

---

### 1. 🧠 Permanent Project Rules & Memory
> **What it does:** Teaches your AI your specific project rules so you never have to repeat yourself.

* **💬 What you type in chat:**
  ```text
  "Remember that for this project, our primary brand color is Emerald (#059669), we always use Tailwind CSS v4, and we never use purple gradients."
  ```
* **🎯 What you achieve instantly:**
  * AI saves this rule to persistent memory (`MEMORY.md`).
  * In every future conversation (even weeks later), AI will automatically follow these rules without being reminded.

---

### 2. 🔍 Instant Search Across Past Project Decisions (GraphRAG)
> **What it does:** Recalls why specific technical decisions were made in past conversations.

* **💬 What you type in chat:**
  ```text
  "Why did we decide to use PostgreSQL instead of MongoDB three weeks ago, and which API routes were affected?"
  ```
* **🎯 What you achieve instantly:**
  * AI queries the Microsoft GraphRAG knowledge graph and explains the exact reasoning, date, and connected files in 2 seconds.

---

### 3. 🔄 Seamless Cross-Tool Handoff (Antigravity ↔ Cursor ↔ Claude Code)
> **What it does:** Lets you start a task in one AI tool and finish it in another without losing context.

* **💬 What you type in chat:**
  ```text
  "Prepare a handoff snapshot of our checkout bug investigation so I can continue in Cursor."
  ```
* **🎯 What you achieve instantly:**
  * Generates an instant, compressed context package (`AGENT_MEMORY.md`) containing open issues, active file paths, and current progress ready for Cursor or Claude Code.

---

### 4. ⚡ 97% Context Token Cost Reduction
> **What it does:** Prevents AI from reading massive 50,000-line codebases that waste money and hit context limits.

* **💬 What you type in chat:**
  ```text
  "Index our codebase and generate a lightweight knowledge map of all functions and database models."
  ```
* **🎯 What you achieve instantly:**
  * Compresses your entire codebase into an Abstract Syntax Tree (AST) symbol graph.
  * AI only loads the exact 20 lines needed for a task instead of 5,000 lines, reducing token bills by 97%!

---

### 5. 🛡️ Self-Correction & Adaptive Learning (Mem0)
> **What it does:** Ensures AI learns from mistakes and never repeats the same error twice.

* **💬 What you type in chat:**
  ```text
  "Never import icons directly from lucide-react without checking if the icon name exists in our design system."
  ```
* **🎯 What you achieve instantly:**
  * AI records this as a strict guardrail in Mem0 memory, automatically validating imports before writing code.

---

## ⚡ 60-Second Quickstart

```bash
# 1. Initialize permanent memory in your project
npx vibe-memory init

# 2. Index your codebase into a knowledge graph
npx vibe-memory index

# 3. Ask your memory a question
npx vibe-memory query "What are our database models?"

# 4. Export handoff state for Cursor or Claude Code
npx vibe-memory handoff
```

---

## 🔌 Connect to Your Favorite AI Assistant

### 🔹 Google Antigravity (`~/.gemini/antigravity/mcp-config.json`):
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

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
