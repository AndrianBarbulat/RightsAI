import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About — RightsAI</title>
      </Head>
      <Navbar />
      <main className="page" style={{ paddingTop: 'var(--navbar-height)' }}>
        <section className="page__section">
          <h1 className="page__title">About RightsAI</h1>
          <p className="page__text">
            RightsAI is a free AI-powered legal information assistant for the Republic of Ireland. Our mission is to make Irish legal information accessible, understandable, and available to everyone — not just those who can afford a solicitor.
          </p>
        </section>

        <section className="page__section">
          <h2 className="page__heading">How It Works</h2>
          <p className="page__text">
            RightsAI uses Gemini 2.0 Flash Lite, a large language model, combined with a structured prompt that restricts responses exclusively to Irish law and EU law as it applies in Ireland. Every answer is delivered in a structured card format with topic identification, a plain English summary, relevant legislation cited, your key rights, practical next steps, and links to official resources.
          </p>
        </section>

        <section className="page__section">
          <h2 className="page__heading">Disclaimer</h2>
          <p className="page__text">
            RightsAI provides general legal information only and does not constitute legal advice. The information provided may not reflect the most current legal developments and should not be relied upon for making legal decisions. Always consult a qualified solicitor for matters specific to your situation. RightsAI does not guarantee any legal outcome and is not a substitute for professional legal representation.
          </p>
        </section>

        <section className="page__section">
          <h2 className="page__heading">Scope</h2>
          <p className="page__text">
            RightsAI covers the law of the Republic of Ireland only. It does not cover Northern Ireland, the United Kingdom, or any other jurisdiction. The platform covers 19 areas of Irish law including residential tenancies, employment, consumer rights, family law, road traffic, criminal law, constitutional law, immigration, small claims, data protection and GDPR, property, wills and probate, personal injury, debt and insolvency, social welfare, education, planning, equality, and business law.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}