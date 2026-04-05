import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Know Your Rights.<br />
          <span className="hero__title-gold">Instantly.</span>
        </h1>
        <p className="hero__subtitle">
          Free AI-powered Irish legal information. Ask any question about Irish or EU law
          and get a clear, structured answer with legislation cited.
        </p>
        <div className="hero__actions">
          <Link href="/chat" className="btn btn--primary btn--lg">
            Ask a Question
          </Link>
          <Link href="/topics" className="btn btn--outline btn--lg">
            Explore Topics
          </Link>
        </div>
      </div>
    </section>
  );
}