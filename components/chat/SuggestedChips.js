const SUGGESTIONS = [
  'What are my rights if my landlord is not returning my deposit?',
  'How much notice does my employer need to give to dismiss me?',
  'What consumer rights do I have when buying a faulty product?',
  'How do I apply for a safety order?',
  'What are my rights during a Garda search?',
  'How does GDPR apply to my personal data in Ireland?',
];

export default function SuggestedChips({ onSelect }) {
  return (
    <div className="suggested-chips">
      {SUGGESTIONS.map((text) => (
        <button
          key={text}
          className="suggested-chips__chip"
          onClick={() => onSelect(text)}
          type="button"
        >
          {text}
        </button>
      ))}
    </div>
  );
}