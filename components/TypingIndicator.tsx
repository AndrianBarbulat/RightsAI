export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4" aria-live="polite" aria-label="RightsAI is researching">
      <div className="bg-white border border-cream-dark rounded-lg px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-navy-light">RightsAI is researching</span>
          <span className="flex gap-1" aria-hidden="true">
            <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        </div>
      </div>
    </div>
  );
}