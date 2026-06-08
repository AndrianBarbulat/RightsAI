import Head from 'next/head';
import Link from 'next/link';
import DisclaimerBanner from '../components/DisclaimerBanner';
import ChatWidget from '../components/ChatWidget';

const topics = [
  'Employment Law',
  'Tenancy Rights',
  'Consumer Rights',
  'Family Law',
  'Criminal Law',
  'GDPR & Data Rights',
  'Immigration',
  'Social Welfare',
];

const features = [
  {
    title: 'Irish Law Only',
    desc: 'Answers grounded exclusively in Republic of Ireland legislation and EU regulations applicable to Ireland.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Plain English Answers',
    desc: 'Complex legal concepts explained clearly. No jargon. No confusing terminology.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Always Free',
    desc: 'Access to Irish legal information should not have a price tag. LawBot Ireland is and always will be free.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: 1,
    title: 'Ask Your Question',
    desc: 'Type any question about Irish law in plain English. No legal knowledge required.',
  },
  {
    number: 2,
    title: 'Get an Instant Answer',
    desc: 'Receive a clear, structured response with relevant legislation cited in plain language.',
  },
  {
    number: 3,
    title: 'Consult a Solicitor If Needed',
    desc: 'If your situation requires legal advice, we will point you to the right official resources.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>LawBot Ireland — Irish Legal Questions, Answered Instantly</title>
        <meta name="description" content="Get clear, plain-English answers based on Irish law. Free to use. Available 24/7." />
      </Head>

      <div className="min-h-screen bg-cream font-body">
        {/* Navbar */}
        <header className="bg-navy text-white sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-heading text-xl font-bold">
              LawBot <span className="text-gold">Ireland</span>
            </span>
            <nav>
              <Link
                href="/chat"
                className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-light transition-colors"
              >
                Start Chatting
              </Link>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-navy text-white py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Irish Legal Questions, Answered Instantly
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get clear, plain-English answers based on Irish law. Free to use. Available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/chat"
                  className="bg-gold text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gold-light transition-colors"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </section>

          {/* Trust Bar */}
          <section className="bg-cream-dark py-8">
            <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {['Based on Irish Statute Law', 'References Cited', 'Information Only', 'Always Free'].map((item) => (
                <div key={item} className="text-sm text-navy-light font-medium">
                  &#10003; {item}
                </div>
              ))}
            </div>
          </section>

          {/* Feature Cards */}
          <section className="py-16 md:py-20">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-12">
                Why LawBot Ireland?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white border border-cream-dark rounded-xl p-6 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-gold mb-4 flex justify-center" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-navy-light leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-20 bg-cream-dark">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-12">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step) => (
                  <div key={step.number} className="text-center">
                    <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-navy-light leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Topics Covered */}
          <section className="py-16 md:py-20">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-8">
                Topics Covered
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="bg-white border border-cream-dark rounded-lg px-4 py-3 text-center text-sm text-navy font-medium hover:border-gold transition-colors"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="py-12 bg-cream-dark">
            <DisclaimerBanner variant="landing" />
          </section>

          {/* Resources */}
          <section className="py-12">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="font-heading text-xl font-semibold text-navy mb-6">
                Official Resources
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://www.citizensinformation.ie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-cream-dark rounded-lg px-6 py-4 text-navy hover:border-gold transition-colors"
                >
                  <span className="font-heading font-semibold">Citizens Information</span>
                  <p className="text-xs text-navy-light mt-1">citizensinformation.ie</p>
                </a>
                <a
                  href="https://www.flac.ie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-cream-dark rounded-lg px-6 py-4 text-navy hover:border-gold transition-colors"
                >
                  <span className="font-heading font-semibold">FLAC</span>
                  <p className="text-xs text-navy-light mt-1">Free Legal Advice Centres</p>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-navy text-white py-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} LawBot Ireland. All rights reserved.
            </p>
            <p className="text-xs text-white/40 mt-1">
              LawBot Ireland provides general legal information only. Not a substitute for professional legal advice.
            </p>
          </div>
        </footer>
      </div>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </>
  );
}