const TRUST_ITEMS = [
  { icon: '\u2696', text: 'Based on Irish Statute Law' },
  { icon: '\u270E', text: 'References Cited in Every Answer' },
  { icon: '\u26A0', text: 'Information Only — Not Legal Advice' },
  { icon: '\u2665', text: 'Always Free' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {TRUST_ITEMS.map((item) => (
        <div key={item.text} className="trust-bar__item">
          <span className="trust-bar__icon" aria-hidden="true">{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}