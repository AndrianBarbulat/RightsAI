import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../layout/Sidebar';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import SuggestedChips from './SuggestedChips';
import QuickActionCards from './QuickActionCards';
import ChatInput from './ChatInput';

const WELCOME_GREETING = getGreeting();

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function generateId() {
  return 'c' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTopic, setCurrentTopic] = useState('');
  const [conversationId, setConversationId] = useState(null);

  useEffect(() => {
    const { q, topic, cid } = router.query;
    if (q) {
      handleSend(q);
    }
    if (cid) {
      setConversationId(cid);
      const stored = JSON.parse(localStorage.getItem('rightsai_conversations') || '[]');
      const conv = stored.find(c => c.id === cid);
      if (conv && conv.messages) setMessages(conv.messages);
    }
  }, [router.query]);

  const persistConversation = useCallback((msgs, cid) => {
    const stored = JSON.parse(localStorage.getItem('rightsai_conversations') || '[]');
    const existing = stored.findIndex(c => c.id === cid);
    const title = msgs.find(m => m.role === 'user')?.content?.slice(0, 40) || 'New conversation';
    const entry = {
      id: cid,
      title,
      messages: msgs,
      updatedAt: new Date().toISOString(),
      timeAgo: 'Just now',
    };
    if (existing >= 0) stored[existing] = entry;
    else stored.unshift(entry);
    if (stored.length > 50) stored.length = 50;
    localStorage.setItem('rightsai_conversations', JSON.stringify(stored));
  }, []);

  const handleSend = useCallback(async (text) => {
    const userMsg = { role: 'user', content: text, time: formatTime() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    const cid = conversationId || generateId();
    if (!conversationId) setConversationId(cid);

    try {
      const history = updatedMessages.map(m => ({
        role: m.role,
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
      const botMsg = { role: 'model', content: data.summary || '', structured: data, time: formatTime() };
      const finalMessages = [...updatedMessages, botMsg];
      setMessages(finalMessages);
      setCurrentTopic(data.topic || '');
      persistConversation(finalMessages, cid);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', content: err.message, structured: { topic: 'Error', summary: err.message }, time: formatTime() }]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, conversationId, persistConversation]);

  const handleAction = useCallback(async (idx, action) => {
    if (action === 'copy') {
      const msg = messages[idx];
      if (msg && msg.structured && msg.structured.summary) {
        await navigator.clipboard.writeText(msg.structured.summary);
      }
    }
    if (action === 'helpful' || action === 'not-helpful') {
      fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageIndex: idx, rating: action, topic: currentTopic }),
      }).catch(() => {});
    }
  }, [messages, currentTopic]);

  const handleClear = () => {
    setMessages([]);
    setCurrentTopic('');
    setConversationId(null);
  };

  const handleExport = () => {
    window.print();
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="chat-page">
      <Sidebar isMobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="chat-page__main">
        <button
          className="navbar__hamburger"
          style={{ display: 'none', position: 'fixed', top: 12, left: 12, zIndex: 450, background: 'var(--color-surface-1)', borderRadius: 'var(--radius-md)', padding: '8px', border: '1px solid var(--color-border, #e0ddd5)' }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {'\u2630'}
        </button>

        <ChatHeader topic={currentTopic} onClear={handleClear} onExport={handleExport} />

        {isEmpty ? (
          <div className="welcome-state">
            <h2 className="welcome-state__greeting">{WELCOME_GREETING} — how can I help?</h2>
            <p className="welcome-state__sub">Ask me anything about Irish or EU law. I will give you a structured, plain English answer with legislation cited.</p>
            <QuickActionCards onSelect={handleSend} />
            <div style={{ marginTop: 'var(--space-6)', width: '100%', maxWidth: '600px' }}>
              <SuggestedChips onSelect={handleSend} />
            </div>
          </div>
        ) : (
          <MessageList messages={messages} isLoading={isLoading} onAction={handleAction} />
        )}

        {!isEmpty && <SuggestedChips onSelect={handleSend} />}

        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
}