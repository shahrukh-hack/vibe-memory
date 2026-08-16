export type MemoryCategory = 'architecture' | 'bug_fix' | 'user_intent' | 'convention' | 'handoff';

export interface AgentMemory {
  id: string;
  category: MemoryCategory;
  title: string;
  summary: string;
  sourceAgent: 'Antigravity' | 'Cursor' | 'Claude Code' | 'OpenAI Codex' | 'Aider';
  tags: string[];
  timestamp: string;
  confidence: number;
  codeSnippet?: string;
  relatedFiles?: string[];
}

export interface HandoffSnapshot {
  timestamp: string;
  activeGoal: string;
  completedSteps: string[];
  blockers: string[];
  nextSteps: string[];
  activeAgent: string;
  targetAgent: string;
  openQuestions: string[];
}
