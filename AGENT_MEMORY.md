# 🧠 Universal Agent Memory Protocol (AGENT_MEMORY.md)
> Standardized Long-Term Memory & Architectural Decision Log for AI Coding Agents.

---

## 📐 1. Architectural Decisions (ADR)
* **[ARCH-001] Single-Page Application Base Path**: Set `base: './'` in `vite.config.ts` to ensure compatibility across sub-domain CDNs and GitHub Pages.
* **[ARCH-002] State Management**: Use React standard useState and URL search parameters for zero-dependency shareable state.

---

## 🐛 2. Bug Discoveries & Edge-Case Learnings
* **[BUG-001] GitHub Pages 404 Routing on Refresh**: Jekyll bypass requires `.nojekyll` in build root and `404.html` fallback duplicate of `index.html`.
* **[BUG-002] UTF-8 Character Encoding in PowerShell**: Avoid non-explicit character write pipelines; ensure UTF-8 without BOM.

---

## 👤 3. User Preferences
* **[ #pref #adaptive ]** Never place static cards, calculators, or hero banners between the tab navigation bar and the active dynamic tab content. Tab content must render immediately below navigation for instant filter feedback.
* **[ #pref #adaptive ]** Always use 420Hz spring physics for button clicks & Anti-AI Slop Rules
* **No Cliché Bento Overload**: Avoid stuffing random Lucide icons into rounded cards.
* **No Neon Purple on Dark Theme**: Prioritize tailored HSL palettes (Editorial Warm, Swiss Precision, Tactile Slate).
* **Physics-Based Spring Transitions**: Use Framer Motion spring presets (`stiffness: 400`, `damping: 30`).

---

## 🔄 4. Active Handoff Checkpoint
* **Last Active Agent**: Antigravity
* **Next Target Agent**: Cursor / Claude Code
* **Active Goal**: Finalize MCP JSON-RPC stdio daemon.
