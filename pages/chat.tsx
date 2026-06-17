import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ChatMessage from '../components/ChatMessage';
import TypingIndicator from '../components/TypingIndicator';
import DisclaimerBanner from '../components/DisclaimerBanner';
import QuestionChips from '../components/QuestionChips';
import DarkModeToggle from '../components/DarkModeToggle';
import { useChat } from '../hooks/useChat';

export default function ChatPage() {
  const router = useRouter();
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const hasSentInitialQuery = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle ?q= query parameter on page load
  useEffect(() => {
    const { q } = router.query;
    if (q && typeof q === 'string' && !hasSentInitialQuery.current) {
      hasSentInitialQuery.current = true;
      sendMessage(q);
    }
  }, [router.query, sendMessage]);

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
      <Head>
        <title>Chat — RightsAI</title>
        <meta name="description" content="Ask RightsAI about Irish law. Get clear, plain-English answers with legislation cited." />
        <meta property="og:title" content="Chat — RightsAI" />
        <meta property="og:description" content="Ask RightsAI about Irish law. Get clear, plain-English answers with legislation cited." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="h-screen bg-cream font-body flex flex-col">
        {/* Header */}
        <header className="bg-navy text-white px-4 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded"
              aria-label="Back to home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <span className="font-heading text-lg font-bold">
              Rights<span className="text-gold">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            {!isEmpty && (
              <button
                onClick={clearChat}
                className="text-xs text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded px-2 py-1"
                aria-label="Clear conversation"
              >
                Clear
              </button>
            )}
          </div>
        </header>

        {/* Disclaimer */}
        <DisclaimerBanner variant="chat" />

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto">
          {isEmpty ? (
            <div className="text-center py-12">
              <h2 className="font-heading text-xl font-semibold text-navy mb-3">
                Hello! I am RightsAI
              </h2>
              <p className="text-navy-light max-w-md mx-auto leading-relaxed mb-6">
                Ask me anything about Irish law, your rights, or legal processes in Ireland.
                I provide general information only, not legal advice.
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
        <div className="border-t border-cream-dark bg-white px-4 py-4 shrink-0">
          <div className="max-w-3xl mx-auto flex items-end gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your legal question..."
              rows={1}
              maxLength={1000}
              className="flex-1 resize-none border border-cream-dark rounded-lg px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              disabled={isLoading}
              aria-label="Type your legal question"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-gold text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 max-w-3xl mx-auto">
            <p className="text-xs text-gray-400">Press Enter to send, Shift+Enter for new line</p>
            <p className={`text-xs ${charCount > 900 ? 'text-navy font-medium' : 'text-gray-400'}`}>
              {charCount}/1000
            </p>
          </div>
        </div>
      </div>
    </>
  );
}