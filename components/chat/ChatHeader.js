import Badge from '../ui/Badge';

export default function ChatHeader({ topic, onClear, onExport }) {
  return (
    <div className="chat-header">
      <div className="chat-header__left">
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          Rights<span style={{ color: 'var(--color-gold)' }}>AI</span>
        </div>
        {topic && <Badge variant="gold-muted">{topic}</Badge>}
        <Badge variant="warning">Not legal advice</Badge>
      </div>
      <div className="chat-header__actions">
        <div className="shortcuts-tooltip">
          <button className="btn btn--ghost btn--sm" aria-label="Keyboard shortcuts">
            {'\u2328'}
          </button>
          <div className="shortcuts-tooltip__popover">
            <div className="shortcuts-tooltip__item">
              <kbd>Ctrl</kbd> + <kbd>N</kbd>
              <span>New chat</span>
            </div>
            <div className="shortcuts-tooltip__item">
              <kbd>Enter</kbd>
              <span>Send message</span>
            </div>
            <div className="shortcuts-tooltip__item">
              <kbd>Shift</kbd> + <kbd>Enter</kbd>
              <span>New line</span>
            </div>
          </div>
        </div>
        <button className="btn btn--ghost btn--sm" onClick={onClear}>{'\u2327'} Clear</button>
        <button className="btn btn--ghost btn--sm" onClick={onExport}>{'\u2913'} Export</button>
      </div>
    </div>
  );
}
