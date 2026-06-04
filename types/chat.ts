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

export interface ChatAPIResponse {
  topic?: string;
  summary?: string;
  legislation?: string[];
  keyRights?: string[];
  nextSteps?: string[];
  resources?: string[];
  disclaimer?: string;
  error?: string;
}