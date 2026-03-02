import { useState, useRef, useEffect } from 'react';

export default function ChatInput({ onSend, isLoading }) {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <div className="chat-input__wrapper">
        <textarea
          ref={textareaRef}
          className="chat-input__textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Irish law... (Shift + Enter for new line)"
          rows={1}
          disabled={isLoading}
          aria-label="Type your legal question"
        />
        <button
          className="btn btn--primary chat-input__send"
          type="submit"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
        >
          {isLoading ? '\u27F3' : '\u2191'}
        </button>
      </div>
      <p className="chat-input__disclaimer">
        RightsAI provides general legal information, not legal advice. Always verify with official sources.
      </p>
    </form>
  );
}