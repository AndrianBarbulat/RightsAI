import UserMessage from './UserMessage';
import TypingIndicator from './TypingIndicator';

export default function MessageList({ messages, isLoading, onAction }) {
  return (
    <div className="message-list">
      {messages.map((msg, idx) => {
        if (msg.role === 'user') {
          return <UserMessage key={idx} text={msg.content} time={msg.time} />;
        }
        return (
          <div key={idx} className="bot-message">
            <BotMessage structured={msg.structured} content={msg.content} />
            <div className="bot-message__actions">
              <button
                className="btn btn--ghost btn--sm"
                onClick={() => onAction(idx, 'copy')}
                title="Copy response"
              >
                {'\u2398'} Copy
              </button>
              <button
                className="btn btn--ghost btn--sm"
                onClick={() => onAction(idx, 'helpful')}
                title="Mark as helpful"
              >
                {'\u2714'} Helpful
              </button>
              <button
                className="btn btn--ghost btn--sm"
                onClick={() => onAction(idx, 'not-helpful')}
                title="Mark as not helpful"
              >
                {'\u2718'} Not helpful
              </button>
            </div>
          </div>
        );
      })}
      {isLoading && <TypingIndicator />}
    </div>
  );
}

function BotMessage({ structured }) {
  if (!structured || typeof structured !== 'object') {
    return <div className="bot-message__text">Sorry, I could not process that response.</div>;
  }

  const { topic, summary, legislation, keyRights, nextSteps, resources, disclaimer } = structured;

  return (
    <div className="legal-response">
      {topic && <div className="legal-response__topic">{topic}</div>}
      {summary && <div className="legal-response__summary">{summary}</div>}

      {legislation && legislation.length > 0 && (
        <div className="legal-response__section">
          <h4 className="legal-response__section-title">{'\u2696'} Relevant Legislation</h4>
          <ul className="legal-response__list">
            {legislation.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>
      )}

      {keyRights && keyRights.length > 0 && (
        <div className="legal-response__section">
          <h4 className="legal-response__section-title">{'\u2605'} Your Key Rights</h4>
          <ul className="legal-response__list">
            {keyRights.map((right, i) => (
              <li key={i}>{right}</li>
            ))}
          </ul>
        </div>
      )}

      {nextSteps && nextSteps.length > 0 && (
        <div className="legal-response__section">
          <h4 className="legal-response__section-title">{'\u27A4'} Next Steps</h4>
          <ol className="legal-response__list">
            {nextSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {resources && resources.length > 0 && (
        <div className="legal-response__section">
          <h4 className="legal-response__section-title">{'\u2139'} Official Resources</h4>
          <ul className="legal-response__list">
            {resources.map((res, i) => (
              <li key={i}>
                <a href={res} target="_blank" rel="noopener noreferrer" className="legal-response__link">
                  {res}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {disclaimer && (
        <div className="legal-response__disclaimer">
          {'\u26A0'} {disclaimer}
        </div>
      )}
    </div>
  );
}