export default function TypingIndicator() {
  return (
    <div className="typing-indicator" aria-live="polite" aria-label="RightsAI is researching">
      <div className="typing-indicator__dots">
        <span className="typing-indicator__dot" />
        <span className="typing-indicator__dot" />
        <span className="typing-indicator__dot" />
      </div>
      <span className="typing-indicator__label">RightsAI is researching...</span>
    </div>
  );
}