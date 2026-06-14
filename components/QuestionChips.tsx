interface QuestionChipsProps {
  onSelect: (question: string) => void;
}

const DEFAULT_QUESTIONS = [
  'What are my tenant rights?',
  'Can my employer cut my pay?',
  'What notice period applies for redundancy?',
  'What are my consumer rights for faulty goods?',
  'How does GDPR apply to me in Ireland?',
  'What are the grounds for divorce in Ireland?',
];

export default function QuestionChips({ onSelect }: QuestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center" role="list" aria-label="Suggested questions">
      {DEFAULT_QUESTIONS.map((question) => (
        <button
          key={question}
          onClick={() => onSelect(question)}
          className="bg-gold-muted border border-gold/30 text-navy text-sm px-4 py-2 rounded-full hover:bg-gold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1"
          role="listitem"
        >
          {question}
        </button>
      ))}
    </div>
  );
}