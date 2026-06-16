import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import DisclaimerBanner from './DisclaimerBanner';
import QuestionChips from './QuestionChips';
import DarkModeToggle from './DarkModeToggle';
import { useChat } from '../hooks/useChat';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || trimmed.length > 1000) return;
    sendMessage(trimmed);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isEmpty = messages.length === 0;
  const charCount = input.length;

  return (
    <>
      {/* Floating bubble button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gold text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gold-light transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat panel overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end sm:items-end sm:justify-end p-0 sm:p-4 bg-black/30">
          <div className="w-full sm:w-[400px] h-full sm:h-[600px] sm:max-h-[80vh] bg-cream sm:rounded-xl shadow-2xl flex flex-col">
            {/* Header */}
            <div className="bg-navy text-white px-4 py-3 flex items-center justify-between sm:rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg font-bold">RightsAI</span>
              </div>
              <div className="flex items-center gap-2">
                <DarkModeToggle />
                {!isEmpty && (
                  <button
                    onClick={clearChat}
                    className="text-xs text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded px-2 py-1"
                    aria-label="Clear chat"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded"
                  aria-label="Close chat"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <DisclaimerBanner variant="chat" />

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-3">
              {isEmpty ? (
                <div className="text-center py-6">
                  <p className="text-navy font-body text-sm leading-relaxed mb-4">
                    Hello! I am RightsAI. Ask me anything about Irish law, your rights, or legal
                    processes in Ireland. I provide general information only, not legal advice.
                  </p>
                  <QuestionChips onSelect={sendMessage} />
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <ChatMessage key={idx} message={msg} />
                ))
              )}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-cream-dark bg-white sm:rounded-b-xl">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Irish law..."
                  rows={1}
                  maxLength={1000}
                  className="flex-1 resize-none border border-cream-dark rounded-lg px-3 py-2 text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  disabled={isLoading}
                  aria-label="Type your legal question"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1"
                  aria-label="Send message"
                >
                  Send
                </button>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-400">Press Enter to send, Shift+Enter for new line</p>
                <p className={`text-xs ${charCount > 900 ? 'text-navy font-medium' : 'text-gray-400'}`}>
                  {charCount}/1000
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}