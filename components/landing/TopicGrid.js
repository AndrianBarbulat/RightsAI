import Link from 'next/link';
import { topics } from '../../data/topics';
export default function TopicGrid() {
  return (
    <section><div className="topic-grid">
      {topics.map(t => (
        <Link key={t.slug} href={'/topics/' + t.slug} className="topic-grid__item">
          <div className="topic-grid__icon">{t.icon}</div>
          <h3 className="topic-grid__title">{t.title}</h3>
          <p className="topic-grid__desc">{t.description}</p>
          <span className="topic-grid__arrow">{'\u2192'}</span>
        </Link>
      ))}
    </div></section>
  );
}