import CopyButton from './CopyButton';
import FeedbackButtons from './FeedbackButtons';
import type { ChatAPIResponse, LegislationItem, ResourceItem } from '../types/chat';

interface StructuredResponseProps {
  data: ChatAPIResponse;
}

function getLegislationUrl(item: LegislationItem): string {
  if (item.url) return item.url;
  const encoded = encodeURIComponent(item.name);
  if (item.name.toLowerCase().includes('eu') || item.name.toLowerCase().includes('regulation')) {
    return `https://eur-lex.europa.eu/search.html?text=${encoded}`;
  }
  return `https://www.irishstatutebook.ie/eli/results.html?q=${encoded}`;
}

function getResourceUrl(item: ResourceItem): string {
  if (item.url) return item.url;
  const encoded = encodeURIComponent(item.label);
  return `https://www.citizensinformation.ie/en/search/?q=${encoded}`;
}

export default function StructuredResponse({ data }: StructuredResponseProps) {
  const textContent = [
    data.topic,
    data.summary,
    data.legislation?.map((l) => l.name).join(', '),
    data.keyPoints?.join(', '),
    data.nextSteps?.join(', '),
    data.resources?.map((r) => r.label).join(', '),
    data.disclaimer,
  ]
    .filter(Boolean)
    .join('\n\n');

  return (
    <div className="relative bg-white border border-cream-dark rounded-xl p-5 shadow-sm" role="article" aria-label={`Response about ${data.topic || 'Irish law'}`}>
      <CopyButton text={textContent} />

      {/* Topic badge */}
      {data.topic && (
        <span className="inline-block bg-gold-muted text-navy text-xs font-medium px-3 py-1 rounded-full mb-3">
          {data.topic}
        </span>
      )}

      {/* Summary */}
      {data.summary && (
        <p className="text-navy text-[15px] leading-relaxed mb-4">{data.summary}</p>
      )}

      {/* Legislation */}
      {data.legislation && data.legislation.length > 0 && (
        <section className="mb-4">
          <h4 className="font-heading text-sm font-semibold text-navy mb-2">Relevant Legislation</h4>
          <ul className="space-y-1">
            {data.legislation.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-navy-light">
                <span className="text-gold mt-0.5 shrink-0" aria-hidden="true">&#8226;</span>
                <a
                  href={getLegislationUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold underline underline-offset-2 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Key Points */}
      {data.keyPoints && data.keyPoints.length > 0 && (
        <section className="mb-4">
          <h4 className="font-heading text-sm font-semibold text-navy mb-2">Key Points</h4>
          <ul className="space-y-1">
            {data.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-navy-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next Steps */}
      {data.nextSteps && data.nextSteps.length > 0 && (
        <section className="mb-4">
          <h4 className="font-heading text-sm font-semibold text-navy mb-2">Next Steps</h4>
          <ol className="space-y-1 list-decimal list-inside text-sm text-navy-light">
            {data.nextSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {/* Resources */}
      {data.resources && data.resources.length > 0 && (
        <section className="mb-4">
          <h4 className="font-heading text-sm font-semibold text-navy mb-2">Official Resources</h4>
          <ul className="space-y-1">
            {data.resources.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-navy-light">
                <span className="text-gold mt-0.5 shrink-0" aria-hidden="true">&#8599;</span>
                <a
                  href={getResourceUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold underline underline-offset-2 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Disclaimer */}
      {data.disclaimer && (
        <p className="text-xs text-gray-400 italic mt-4 pt-3 border-t border-cream-dark">
          {data.disclaimer}
        </p>
      )}

      <FeedbackButtons />
    </div>
  );
}