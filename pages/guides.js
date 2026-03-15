import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';
import { guides } from '../data/guides';

export default function Guides() {
  return (
    <>
      <Head>
        <title>Guides — RightsAI</title>
      </Head>
      <Navbar />
      <main className="page" style={{ paddingTop: 'var(--navbar-height)' }}>
        <section className="page__section">
          <h1 className="page__title">Guides</h1>
          <p className="page__subtitle">
            Step-by-step guides to help you understand and exercise your legal rights in Ireland.
          </p>

          <div className="guides-grid">
            {guides && guides.length > 0 ? (
              guides.map((guide) => (
                <Link href={`/guides/${guide.slug}`} key={guide.slug} className="guides-card">
                  <span className="guides-card__icon">{guide.icon || '\u2696'}</span>
                  <h3 className="guides-card__title">{guide.title}</h3>
                  <p className="guides-card__desc">{guide.description}</p>
                </Link>
              ))
            ) : (
              <p className="page__empty">Guides coming soon. In the meantime, try <Link href="/chat">asking a question</Link>.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}