import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { glossaryTerms } from '../data/guides';

function groupByLetter(terms) {
  const groups = {};
  terms.forEach((t) => {
    const letter = t.letter || t.term[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(t);
  });
  return Object.keys(groups)
    .sort()
    .map((letter) => ({ letter, terms: groups[letter] }));
}

export default function Glossary() {
  const groups = groupByLetter(glossaryTerms);

  return (
    <>
      <Head>
        <title>Glossary — RightsAI</title>
      </Head>
      <Navbar />
      <main className="page" style={{ paddingTop: 'var(--navbar-height)' }}>
        <section className="page__section">
          <h1 className="page__title">Legal Glossary</h1>
          <p className="page__subtitle">
            Key Irish legal terms explained in plain English.
          </p>

          {groups.length > 0 ? (
            groups.map((group) => (
              <div key={group.letter} className="glossary-group">
                <h2 className="glossary-group__letter">{group.letter}</h2>
                <dl className="glossary-group__terms">
                  {group.terms.map((t) => (
                    <div key={t.term} className="glossary-term">
                      <dt className="glossary-term__name">{t.term}</dt>
                      <dd className="glossary-term__def">{t.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))
          ) : (
            <p className="page__empty">Glossary terms coming soon.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}