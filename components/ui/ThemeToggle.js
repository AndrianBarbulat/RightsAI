import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <button className="modal__close" onClick={onClose} aria-label="Close">{'\u2715'}</button>
        {title && <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-h2)', fontWeight: 600, color: 'var(--color-navy)' }}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}