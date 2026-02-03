import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Converts basic Markdown to HTML.
 * Supports: headings (###), bold (**), italic (*), lists (* and -),
 * horizontal rules (***), links, and paragraphs.
 */
function markdownToHtml(text) {
  if (!text) return '';

  let html = text;

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');

  // Horizontal rules
  html = html.replace(/^(---|\*\*\*)\s*$/gm, '<hr />');

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Unordered list items
  html = html.replace(/^[\*\-] (.+)$/gm, '<li>$1</li>');

  // Wrap consecutive <li> items in <ul>
  html = html.replace(/(<li>.*?<\/li>(\s*<li>.*?<\/li>)*)/gs, (match) => {
    return '<ul>' + match + '</ul>';
  });

  // Markdown links: [text](url)
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Split on double newlines for paragraphs
  const blocks = html.split(/\n\n+/);
  html = blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (
        trimmed.startsWith('<h3') ||
        trimmed.startsWith('<h4') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<hr')
      ) {
        return trimmed;
      }
      const withBreaks = trimmed.replace(/\n/g, '<br />');
      return '<p>' + withBreaks + '</p>';
    })
    .join('');

  return html;
}

const INITIAL_MESSAGE = {
  role: 'bot',
  content:
    "Hello! I'm LawBot Ireland. Ask me anything about Irish law, your rights, or legal processes in Ireland. Remember, I provide general information only, not legal advice.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setMessages((prev) => {
        if (prev.length === 0) return [INITIAL_MESSAGE];
        return prev;
      });
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const history = updatedMessages.map((m) => ({
        role: m.role === 'bot' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Server error (' + res.status + ')');
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'bot', content: data.text }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Sorry, something went wrong: ' + err.message + '. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading]);

  return (
    <>
      <button
        className={'chat-bubble-fab' + (isOpen ? ' active' : '')}
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        title={isOpen ? 'Close chat' : 'Chat with LawBot Ireland'}
      >
        {isOpen ? '\u2715' : '\u2709'}
      </button>

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-header-title">
              <span className="chat-header-icon">{'\u2696'}</span>
              <span>LawBot Ireland</span>
            </div>
            <button className="chat-close-btn" onClick={handleToggle} aria-label="Close chat">
              {'\u2715'}
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={'chat-bubble ' + msg.role}>
                {msg.role === 'bot' ? (
                  <div
                    className="chat-markdown"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(msg.content) }}
                  />
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {isLoading && (
              <div className="typing-indicator">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Ask about Irish law..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              className="chat-send-btn"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              {'\u2191'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}