import Link from 'next/link';

export default function FAB() {
  return (
    <Link
      href="/chat"
      className="fab"
      aria-label="Ask a question — open chat"
      title="Ask a legal question"
    >
      <span className="fab__icon" aria-hidden="true">💬</span>
    </Link>
  );
}