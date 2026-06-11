import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from '../ui/ThemeToggle';

const STORAGE_KEY = 'rightsai_conversations';

function getStoredConversations() {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

function groupByTime(convs) {
  const now = new Date();
  const today = [];
  const yesterday = [];
  const thisWeek = [];
  const earlier = [];
  convs.forEach(c => {
    const d = new Date(c.updatedAt);
    const diffDays = (now - d) / (1000 * 60 * 60 * 24);
    if (diffDays < 1) today.push(c);
    else if (diffDays < 2) yesterday.push(c);
    else if (diffDays < 7) thisWeek.push(c);
    else earlier.push(c);
  });
  return { today, yesterday, thisWeek, earlier };
}

export default function Sidebar({ isMobileOpen, onClose }) {
  const router = useRouter();
  const [conversations, setConversations] = useState([]);
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    setConversations(getStoredConversations());
  }, []);

  // Swipe to close on mobile
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (dx < -60 && isMobileOpen) {
        onClose();
      }
    };
    sidebar.addEventListener('touchstart', handleTouchStart, { passive: true });
    sidebar.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      sidebar.removeEventListener('touchstart', handleTouchStart);
      sidebar.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobileOpen, onClose]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const groups = groupByTime(conversations);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    const updated = conversations.filter(c => c.id !== id);
    setConversations(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const section = (label, items) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="sidebar__section">
        <div className="sidebar__section-label">{label}</div>
        {items.map(c => (
          <div
            key={c.id}
            className={'sidebar__conversation' + (router.query.cid === c.id ? ' sidebar__conversation--active' : '')}
            onClick={() => router.push('/chat?cid=' + c.id)}
          >
            <span className="sidebar__conversation-text">{c.title || 'New conversation'}</span>
            <span className="sidebar__conversation-time">{c.timeAgo || ''}</span>
            <button className="sidebar__conversation-delete" onClick={(e) => handleDelete(c.id, e)} aria-label="Delete conversation">{'\u2715'}</button>
          </div>
        ))}
      </div>
    );
  };

  const sidebarContent = (
    <>
      <div className="sidebar__brand">
        Chats
      </div>

      <div className="sidebar__section">
        <button className="btn btn--primary" style={{ width: '100%' }} onClick={() => router.push('/chat')}>
          {'\u270E'} New Chat
        </button>
      </div>

      {section('Today', groups.today)}
      {section('Yesterday', groups.yesterday)}
      {section('This Week', groups.thisWeek)}
      {section('Earlier', groups.earlier)}

      <div className="sidebar__bottom">
        <button className="sidebar__bottom-link">{'\u2699'} Preferences</button>
        <Link href="/about" className="sidebar__bottom-link">{'\u2139'} About</Link>
        <ThemeToggle />
      </div>
    </>
  );

  return (
    <>
      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />
      )}
      <aside
        ref={sidebarRef}
        className={'sidebar' + (isMobileOpen ? ' sidebar--mobile-open' : '')}
      >
        <div className="sidebar__swipe-hint" aria-hidden="true">
          <span className="sidebar__swipe-bar" />
        </div>
        {sidebarContent}
      </aside>
    </>
  );
}
