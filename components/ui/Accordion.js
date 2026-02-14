import { useState } from 'react';
export default function Accordion({ items = [] }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div>
      {items.map((item, idx) => (
        <div className="accordion" key={idx} style={{ marginBottom: idx < items.length - 1 ? 'var(--space-2)' : 0 }}>
          <button className="accordion__trigger" onClick={() => setOpenIdx(openIdx === idx ? null : idx)} aria-expanded={openIdx === idx}>
            <span>{item.question}</span>
            <span className={'accordion__icon' + (openIdx === idx ? ' accordion__icon--open' : '')}>{'\u25BC'}</span>
          </button>
          {openIdx === idx && <div className="accordion__content" role="region">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}