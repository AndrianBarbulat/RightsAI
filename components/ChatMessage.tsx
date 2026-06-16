import type { Message } from '../types/chat';
import { isStructuredResponse, parseStructuredResponse } from '../types/chat';
import StructuredResponse from './StructuredResponse';
import FeedbackButtons from './FeedbackButtons';
import CopyButton from './CopyButton';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const structured = parseStructuredResponse(message.content);

  // Assistant with structured JSON response
  if (!isUser && structured) {
    return <StructuredResponse data={structured} />;
  }

  // Standard text bubble
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`relative max-w-[80%] px-4 py-3 ${
          isUser
            ? 'bg-navy text-white rounded-bubble'
            : 'bg-white text-navy rounded-lg border border-cream-dark'
        }`}
        role="article"
        aria-label={isUser ? 'Your message' : 'RightsAI response'}
      >
        <p className={`text-[15px] leading-6 ${isUser ? 'text-white' : 'text-navy'}`}>
          {message.content}
        </p>
        {message.timestamp && (
          <p className={`text-xs mt-1 ${isUser ? 'text-white/70' : 'text-gray-500'}`}>
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        )}

        {/* Copy button and feedback on assistant messages */}
        {!isUser && (
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-cream-dark">
            <CopyButton text={message.content} />
            <FeedbackButtons />
          </div>
        )}
      </div>
    </div>
  );
}