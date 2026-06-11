import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={'navbar' + (scrolled ? ' navbar--solid' : ' navbar--transparent')}>
        <Link href="/" className="navbar__logo">
          Rights<span className="navbar__logo-gold">AI</span>
        </Link>

        <div className="navbar__links">
          <Link href="/topics" className="navbar__link">Topics</Link>
          <Link href="/guides" className="navbar__link">Guides</Link>
          <Link href="/glossary" className="navbar__link">Glossary</Link>
          <Link href="/about" className="navbar__link">About</Link>
        </div>

        <div className="navbar__right">
          <Link href="/chat" className="btn btn--primary btn--sm">Ask a Question</Link>
          <ThemeToggle />
          <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? '\u2715' : '\u2630'}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="nav-drawer">
          <div className="nav-drawer__header">
            <Link href="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
              Rights<span className="navbar__logo-gold">AI</span>
            </Link>
            <button className="navbar__hamburger" onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ display: 'block' }}>
              {'\u2715'}
            </button>
          </div>
          <div className="nav-drawer__links">
            <Link href="/topics" className="nav-drawer__link" onClick={() => setMobileOpen(false)}>Topics</Link>
            <Link href="/guides" className="nav-drawer__link" onClick={() => setMobileOpen(false)}>Guides</Link>
            <Link href="/glossary" className="nav-drawer__link" onClick={() => setMobileOpen(false)}>Glossary</Link>
            <Link href="/about" className="nav-drawer__link" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/chat" className="nav-drawer__link" onClick={() => setMobileOpen(false)} style={{ color: 'var(--color-gold)' }}>Ask a Question</Link>
          </div>
        </div>
      )}
    </>
  );
}