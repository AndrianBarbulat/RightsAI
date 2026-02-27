import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  const popularTopics = [
    'Residential Tenancies',
    'Employment Law',
    'Consumer Rights',
    'Family Law',
    'Data Protection and GDPR',
    'Small Claims',
  ];

  return (
    <>
      <Head>
        <title>Page Not Found — RightsAI</title>
      </Head>
      <div className="error-page">
        <div className="error-page__code">404</div>
        <h1 className="error-page__title">Page not found</h1>
        <p className="error-page__text">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div style={{ marginBottom: 'var(--space-6)', maxWidth: '500px', width: '100%' }}>
          <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
            Popular topics
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', justifyContent: 'center' }}>
            {popularTopics.map(t => (
              <Link key={t} href={`/topics`} className="chip">
                {t}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/" className="btn btn--primary">
          Go home
        </Link>
      </div>
    </>
  );
}