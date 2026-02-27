import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Something Went Wrong — RightsAI</title>
      </Head>
      <div className="error-page">
        <div className="error-page__code">500</div>
        <h1 className="error-page__title">Something went wrong</h1>
        <p className="error-page__text">
          We encountered an unexpected error. Please try again in a moment.
        </p>
        <Link href="/" className="btn btn--primary">
          Go home
        </Link>
      </div>
    </>
  );
}