export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export interface ConversationHistory {
  role: string;
  parts: { text: string }[];
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface LegislationItem {
  name: string;
  url?: string;
}

export interface ResourceItem {
  label: string;
  url?: string;
}

export interface ChatAPIResponse {
  topic?: string;
  summary?: string;
  legislation?: LegislationItem[];
  keyPoints?: string[];
  nextSteps?: string[];
  resources?: ResourceItem[];
  disclaimer?: string;
  error?: string;
}

export function isStructuredResponse(content: string): boolean {
  try {
    const parsed = JSON.parse(content);
    return !!(parsed && parsed.topic);
  } catch {
    return false;
  }
}

export function parseStructuredResponse(content: string): ChatAPIResponse | null {
  try {
    const parsed = JSON.parse(content);
    if (parsed && parsed.topic) return parsed as ChatAPIResponse;
    return null;
  } catch {
    return null;
  }
}