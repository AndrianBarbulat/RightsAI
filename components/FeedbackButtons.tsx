import { useState } from 'react';

export default function FeedbackButtons() {
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);

  return (
    <div className="flex items-center gap-1 mt-2" role="group" aria-label="Rate this response">
      <button
        onClick={() => setFeedback(feedback === 'up' ? null : 'up')}
        className={`p-1 rounded transition-colors ${
          feedback === 'up'
            ? 'text-gold bg-gold-muted'
            : 'text-navy-light hover:text-navy hover:bg-cream-dark'
        }`}
        aria-label="This response was helpful"
        aria-pressed={feedback === 'up'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
      </button>
      <button
        onClick={() => setFeedback(feedback === 'down' ? null : 'down')}
        className={`p-1 rounded transition-colors ${
          feedback === 'down'
            ? 'text-navy bg-cream-dark'
            : 'text-navy-light hover:text-navy hover:bg-cream-dark'
        }`}
        aria-label="This response was not helpful"
        aria-pressed={feedback === 'down'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
        </svg>
      </button>
    </div>
  );
}