import { useState, useRef } from 'react';
export default function Accordion({ items = [] }) {
  const [openIdx, setOpenIdx] = useState(null);
  const triggersRef = useRef([]);

  const handleKeyDown = (e, idx) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const next = Math.min(idx + 1, items.length - 1);
        triggersRef.current[next]?.focus();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prev = Math.max(idx - 1, 0);
        triggersRef.current[prev]?.focus();
        break;
      }
      case 'Home': {
        e.preventDefault();
        triggersRef.current[0]?.focus();
        break;
      }
      case 'End': {
        e.preventDefault();
        triggersRef.current[items.length - 1]?.focus();
        break;
      }
    }
  };

  return (
    <div role="region">
      {items.map((item, idx) => (
        <div className="accordion" key={idx} style={{ marginBottom: idx < items.length - 1 ? 'var(--space-2)' : 0 }}>
          <button
            className="accordion__trigger"
            ref={el => (triggersRef.current[idx] = el)}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            aria-expanded={openIdx === idx}
          >
            <span>{item.question}</span>
            <span className={'accordion__icon' + (openIdx === idx ? ' accordion__icon--open' : '')}>{'\u25BC'}</span>
          </button>
          {openIdx === idx && <div className="accordion__content" role="region">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}