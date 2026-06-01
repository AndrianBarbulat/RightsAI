import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import TrustBar from '../components/landing/TrustBar';
import Footer from '../components/layout/Footer';

const TopicGrid = dynamic(() => import('../components/landing/TopicGrid'), {
  loading: () => <div className="section-placeholder" style={{ height: '400px' }} />,
});
const HowItWorks = dynamic(() => import('../components/landing/HowItWorks'), {
  loading: () => <div className="section-placeholder" style={{ height: '300px' }} />,
});
const ExampleQA = dynamic(() => import('../components/landing/ExampleQA'), {
  loading: () => <div className="section-placeholder" style={{ height: '300px' }} />,
});
const ResourcesSection = dynamic(() => import('../components/landing/ResourcesSection'), {
  loading: () => <div className="section-placeholder" style={{ height: '250px' }} />,
});

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
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
