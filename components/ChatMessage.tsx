import type { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] px-4 py-3 ${
          isUser
            ? 'bg-navy text-white rounded-bubble'
            : 'bg-white text-navy rounded-lg border border-cream-dark'
        }`}
        role="article"
        aria-label={isUser ? 'Your message' : 'LawBot Ireland response'}
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
      </div>
    </div>
  );
}