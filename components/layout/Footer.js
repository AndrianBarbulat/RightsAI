import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">
            Rights<span className="footer__brand-gold">AI</span>
          </div>
          <p className="footer__desc">
            Plain English answers based on Irish law and EU regulations. Always free.
          </p>
          <ThemeToggle />
        </div>

        <div>
          <div className="footer__heading">Platform</div>
          <div className="footer__links">
            <Link href="/topics" className="footer__link">Topics</Link>
            <Link href="/guides" className="footer__link">Guides</Link>
            <Link href="/glossary" className="footer__link">Glossary</Link>
            <Link href="/about" className="footer__link">About</Link>
            <Link href="/chat" className="footer__link">Chat</Link>
          </div>
        </div>

        <div>
          <div className="footer__heading">Official Resources</div>
          <div className="footer__links">
            <a href="https://www.citizensinformation.ie" target="_blank" rel="noopener noreferrer" className="footer__link">Citizens Information</a>
            <a href="https://www.flac.ie" target="_blank" rel="noopener noreferrer" className="footer__link">FLAC</a>
            <a href="https://www.rtb.ie" target="_blank" rel="noopener noreferrer" className="footer__link">RTB</a>
            <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="footer__link">DPC</a>
            <a href="https://www.courts.ie" target="_blank" rel="noopener noreferrer" className="footer__link">Courts Service</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {year} RightsAI. RightsAI provides general legal information only and does not constitute legal advice. Always consult a qualified solicitor for matters specific to your situation.</p>
      </div>
    </footer>
  );
}