import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import TrustBar from '../components/landing/TrustBar';
import TopicGrid from '../components/landing/TopicGrid';
import HowItWorks from '../components/landing/HowItWorks';
import ExampleQA from '../components/landing/ExampleQA';
import ResourcesSection from '../components/landing/ResourcesSection';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/layout/Footer';

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      {'\u2191'}
    </button>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>RightsAI — Know Your Rights. Instantly.</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <TopicGrid />
        <HowItWorks />
        <ExampleQA />
        <ResourcesSection />
        <FAQ />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
