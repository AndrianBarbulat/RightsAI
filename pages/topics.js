import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TopicGrid from '../components/landing/TopicGrid';

export default function Topics() {
  return (
    <>
      <Head><title>Legal Topics — RightsAI</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <section style={{ textAlign: 'center', padding: 'var(--space-16) var(--space-8)' }}>
          <h1 className="text-h1">Explore Irish Legal Topics</h1>
          <p className="text-body text-secondary" style={{ maxWidth: 600, margin: 'var(--space-4) auto 0' }}>
            Browse areas of Irish law. Each topic includes pre-answered common questions and links to relevant legislation.
          </p>
        </section>
        <TopicGrid />
      </main>
      <Footer />
    </>
  );
}