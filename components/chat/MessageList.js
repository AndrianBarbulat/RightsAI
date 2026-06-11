import UserMessage from './UserMessage';
import TypingIndicator from './TypingIndicator';

export default function MessageList({ messages, isLoading, onAction }) {
  return (
    <div className="message-list">
      {messages.map((msg, idx) => {
        if (msg.role === 'user') {
          return <UserMessage key={idx} text={msg.content} time={msg.time} />;
        }
        if (!msg.structured || typeof msg.structured !== 'object') {
          return (
            <div key={idx} className="bot-message">
              <div className="bot-message__text">
                {msg.content || 'Sorry, I could not process that response.'}
              </div>
            </div>
          );
        }
        return (
          <div key={idx} className="bot-message">
            <BotMessage structured={msg.structured} />
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
  const { topic, summary, legislation, keyRights, nextSteps, resources, disclaimer } = structured;

  return (
    <div className="legal-response">
      {topic && <div className="legal-response__topic">{topic}</div>}
      {summary && <div className="legal-response__summary">{summary}</div>}

      {legislation && legislation.length > 0 && (
        <div className="response-section">
          <h4 className="response-section__header">
            <span className="response-section__header-icon">{'\u2696'}</span>
            Relevant Legislation
          </h4>
          <ul className="response-section__list">
            {legislation.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>
      )}

      {keyRights && keyRights.length > 0 && (
        <div className="response-section">
          <h4 className="response-section__header">
            <span className="response-section__header-icon">{'\u2605'}</span>
            Your Key Rights
          </h4>
          <ul className="response-section__list">
            {keyRights.map((right, i) => (
              <li key={i}>{right}</li>
            ))}
          </ul>
        </div>
      )}

      {nextSteps && nextSteps.length > 0 && (
        <div className="response-section">
          <h4 className="response-section__header">
            <span className="response-section__header-icon">{'\u27A4'}</span>
            Next Steps
          </h4>
          <ol className="response-section__numbered">
            {nextSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {resources && resources.length > 0 && (
        <div className="response-section">
          <h4 className="response-section__header">
            <span className="response-section__header-icon">{'\u2139'}</span>
            Official Resources
          </h4>
          <div className="response-section__sources">
            {resources.map((res, i) => (
              <div key={i} className="response-section__source">
                <a href={res} target="_blank" rel="noopener noreferrer">
                  {res}
                </a>
              </div>
            ))}
          </div>
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
