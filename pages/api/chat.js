import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head><title>Server Error — RightsAI</title></Head>
      <main className="error-page" style={{ paddingTop: 'var(--space-16)' }}>
        <div className="error-page__code">500</div>
        <h1 className="error-page__title">Something went wrong</h1>
        <p className="error-page__text">An unexpected error occurred. Please try again in a moment.</p>
        <Link href="/" className="btn btn--primary">Return Home</Link>
      </main>
    </>
  );
}