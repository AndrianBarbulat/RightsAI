import { useState, useRef, useEffect } from 'react';

const MAX_CHARS = 2000;
const WARN_THRESHOLD = 0.8;

export default function ChatInput({ onSend, isLoading }) {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

  const charCount = input.length;
  const warnLevel = charCount >= MAX_CHARS * WARN_THRESHOLD;
  const nearLimit = charCount >= MAX_CHARS - 40;
  const atLimit = charCount >= MAX_CHARS;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, [input]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setInput(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading || atLimit) return;
    onSend(trimmed);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const charCountClass = [
    'chat-input__count',
    warnLevel && 'chat-input__count--warn',
    nearLimit && 'chat-input__count--near',
    atLimit && 'chat-input__count--limit',
  ].filter(Boolean).join(' ');

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <div className="chat-input__wrapper">
        <textarea
          ref={textareaRef}
          className={'chat-input__textarea' + (warnLevel ? ' chat-input__textarea--warn' : '')}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Irish law... (Shift + Enter for new line)"
          rows={1}
          disabled={isLoading}
          maxLength={MAX_CHARS}
          aria-label="Type your legal question"
        />
        <button
          className="btn btn--primary chat-input__send"
          type="submit"
          disabled={!input.trim() || isLoading || atLimit}
          aria-label="Send message"
        >
          {isLoading ? '\u27F3' : '\u2191'}
        </button>
      </div>
      <div className="chat-input__meta">
        <span className={charCountClass} aria-live="polite">
          {charCount} / {MAX_CHARS}
        </span>
        {warnLevel && !nearLimit && (
          <span className="chat-input__warning">Approaching character limit</span>
        )}
        {nearLimit && (
          <span className="chat-input__warning chat-input__warning--near" role="alert">
            Almost at character limit — keep it concise
          </span>
        )}
      </div>
      <p className="chat-input__disclaimer">
        RightsAI provides general legal information, not legal advice. Always verify with official sources.
      </p>
    </form>
  );
}
