import Head from 'next/head';
import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <>
      <Head>
        <title>LawBot Ireland — Irish Legal Questions, Answered Instantly</title>
      </Head>

      <div className="page-container">
        {/* ===== Navbar ===== */}
        <nav className="navbar">
          <div className="navbar-logo">
            <div className="logo-icon">{'\u2696'}</div>
            LawBot Ireland
          </div>
        </nav>

        {/* ===== Hero ===== */}
        <section className="hero">
          <div className="hero-badge">Free Legal Information</div>
          <h1>
            Irish Legal Questions,{' '}
            <span className="highlight">Answered Instantly</span>
          </h1>
          <p className="hero-subtitle">
            Get clear, plain-English answers based on Irish law. Free to use.
            Available 24/7.
          </p>
          <button
            className="hero-cta"
            onClick={() => {
              // Scroll to trigger the chat bubble — or directly open chat
              const fab = document.querySelector('.chat-bubble-fab');
              if (fab) fab.click();
            }}
          >
            <span className="cta-icon">{'\u2709'}</span>
            Ask a Question Now
          </button>
        </section>

        {/* ===== Features ===== */}
        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">{'\u2618'}</div>
            <h3>Irish Law Only</h3>
            <p>
              Exclusively focused on the laws of the Republic of Ireland.
              References to Irish Acts, statutory instruments, and legal
              processes.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">{'\u270E'}</div>
            <h3>Plain English Answers</h3>
            <p>
              No confusing legal jargon. Complex topics explained in clear,
              straightforward language anyone can understand.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">{'\u2665'}</div>
            <h3>Always Free</h3>
            <p>
              LawBot Ireland is completely free to use. Access legal information
              whenever you need it, without any charges or subscriptions.
            </p>
          </div>
        </section>

        {/* ===== Disclaimer ===== */}
        <section className="disclaimer-section">
          <div className="disclaimer-icon">{'\u26A0'}</div>
          <p>
            <strong>Important:</strong> LawBot Ireland provides general legal
            information only and does not constitute legal advice. Always consult
            a qualified solicitor for matters specific to your situation.
          </p>
        </section>

        {/* ===== Recommended Resources ===== */}
        <section className="resources">
          <h2>Recommended Resources</h2>
          <div className="resource-links">
            <a
              href="https://www.citizensinformation.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              citizensinformation.ie <span className="link-arrow">{'\u2197'}</span>
            </a>
            <a
              href="https://www.flac.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              flac.ie <span className="link-arrow">{'\u2197'}</span>
            </a>
          </div>
        </section>

        {/* ===== Footer ===== */}
        <footer className="footer">
          <p>
            <strong>LawBot Ireland</strong> &copy; {new Date().getFullYear()}
          </p>
          <p>
            LawBot Ireland provides general legal information only and does not
            constitute legal advice. Always consult a qualified solicitor for
            matters specific to your situation.
          </p>
        </footer>
      </div>

      {/* ===== Chat Widget ===== */}
      <ChatWidget />
    </>
  );
}