const CARDS = [
  {
    icon: '\u2302',
    title: 'Tenant Rights',
    q: 'What are my rights as a tenant in Ireland?',
  },
  {
    icon: '\u2692',
    title: 'Employment Law',
    q: 'What are my rights at work in Ireland?',
  },
  {
    icon: '\uD83D\uDED2',
    title: 'Consumer Rights',
    q: 'What are my consumer rights in Ireland when I buy a faulty product?',
  },
  {
    icon: '\u2696',
    title: 'Garda Interactions',
    q: 'What are my rights when stopped by the Garda\u00ED?',
  },
];

export default function QuickActionCards({ onSelect }) {
  return (
    <div className="quick-action-cards">
      {CARDS.map((card) => (
        <button
          key={card.title}
          className="quick-action-cards__card"
          onClick={() => onSelect(card.q)}
          type="button"
        >
          <span className="quick-action-cards__icon">{card.icon}</span>
          <span className="quick-action-cards__title">{card.title}</span>
        </button>
      ))}
    </div>
  );
}